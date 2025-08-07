<script setup lang="ts" generic="T">
type IComputedOptions = { text: string; value: T }[];

const props = defineProps<{
	id: string;
	label: string;
	options: T[] | IComputedOptions;
	transformOptions?: boolean;
}>();

const modelValue = defineModel<T>({ required: true });

const computedOptions = computed<IComputedOptions>(() => {
	if (props.transformOptions) {
		return (props.options as T[]).map(value => ({
			text: `${value}`,
			value,
		})) as IComputedOptions;
	}
	return props.options as IComputedOptions;
});

const isExpanded = ref(false);
const cursoredOverIndex = ref<number>();
const combobox = useTemplateRef('combobox');
const listbox = useTemplateRef('listbox');

watch(modelValue, (value) => {
	cursoredOverIndex.value = undefined;
	for (let i = 0; i < computedOptions.value.length; i++) {
		if (computedOptions.value[i]!.value === value) {
			cursoredOverIndex.value = i;
			break;
		}
	}
}, { immediate: true });

// TODO should also scroll to option
function moveCursor(value: number) {
	if (cursoredOverIndex.value === undefined) {
		cursoredOverIndex.value = 0;
	} else {
		cursoredOverIndex.value = Math.max(
			0,
			Math.min(
				cursoredOverIndex.value + value,
				computedOptions.value.length - 1,
			),
		);
	}
}

function confirmOptionAndCollapse(index?: number) {
	if (index !== undefined) {
		modelValue.value = computedOptions.value[index]!.value;
	}
	isExpanded.value = false;
}

function expandAndCursorOver(first: boolean) {
	isExpanded.value = true;
	if (cursoredOverIndex.value === undefined) {
		cursoredOverIndex.value = first ? 0 : computedOptions.value.length - 1;
	}
}

function expandOrSelectAndCollapse() {
	if (isExpanded.value) {
		confirmOptionAndCollapse(cursoredOverIndex.value);
	} else {
		isExpanded.value = true;
	}
}

function onBlur(event: FocusEvent) {
	if (isExpanded.value && !listbox.value?.contains(event.relatedTarget as Node)) {
		confirmOptionAndCollapse(cursoredOverIndex.value);
	}
}

function onKeydown(e: KeyboardEvent) {
	let preventDefault = true;

	if (e.key.length === 1 && e.key !== ' ' && !e.ctrlKey && !e.altKey && !e.metaKey) {
		handleTypeahead(e.key);
		e.preventDefault();
		return;
	}

	switch (e.key) {
		case 'Escape': {
			isExpanded.value = false;
			break;
		}
		case ' ':
		case 'Enter': {
			expandOrSelectAndCollapse();
			break;
		} case 'ArrowDown': {
			if (e.altKey) {
				isExpanded.value = true;
			} else {
				isExpanded.value ? moveCursor(1) : expandAndCursorOver(true);
			}
			break;
		} case 'ArrowUp': {
			if (e.altKey && isExpanded.value) {
				expandOrSelectAndCollapse();
			} else {
				isExpanded.value ? moveCursor(-1) : expandAndCursorOver(false);
			}
			break;
		} case 'Home': {
			cursoredOverIndex.value = 0;
			break;
		} case 'End': {
			cursoredOverIndex.value = computedOptions.value.length - 1;
			break;
		} default: {
			preventDefault = false;
		}
	}

	preventDefault && e.preventDefault();
}

let typeaheadTimeout: NodeJS.Timeout | undefined;
let typeaheadBuffer = '';

function handleTypeahead(key: string) {
	clearTimeout(typeaheadTimeout);
	typeaheadBuffer += key.toLowerCase();

	const index = computedOptions.value.findIndex(option => option.text.toLowerCase().startsWith(typeaheadBuffer));
	if (~index) {
		cursoredOverIndex.value = index;
	}

	typeaheadTimeout = setTimeout(() => {
		typeaheadBuffer = '';
	}, 1000);
}

onBeforeUnmount(() => {
	clearTimeout(typeaheadTimeout);
});

const selectedOptionText = computed(() => {
	const selectedOptionIndex = computedOptions.value.findIndex(option => option.value === modelValue.value);
	return computedOptions.value[selectedOptionIndex]?.text ?? modelValue.value;
});

const activeDescendantId = computed(() => cursoredOverIndex.value !== undefined
	? `${props.id}-opt-${cursoredOverIndex.value}`
	: undefined);
</script>

<template>
	<div :id class="combobox-container">
		<span :id="`${id}-lbl`" @click="combobox?.focus()">
			{{ label }}
		</span>
		<div
			:id="`${id}-combobox`"
			ref="combobox"
			aria-haspopup="listbox"
			role="combobox"
			tabindex="0"
			:aria-expanded="isExpanded"
			:aria-controls="`${id}-listbox`"
			:aria-labelledby="`${id}-lbl`"
			:aria-activedescendant="isExpanded ? activeDescendantId : ''"
			@keydown="onKeydown"
			@click="isExpanded = !isExpanded"
			@blur="onBlur"
		>
			{{ selectedOptionText }}
		</div>
		<ul
			:id="`${id}-listbox`"
			ref="listbox"
			tabindex="-1"
			role="listbox"
			:aria-labelled-by="`${id}-lbl`"
			:hidden="!isExpanded"
		>
			<li
				v-for="(option, index) in computedOptions"
				:id="`${id}-opt-${index}`"
				:key="index"
				:aria-selected="(modelValue === option.value) || undefined"
				:data-focused="(cursoredOverIndex === index) || undefined"
				role="option"
				@click.stop="confirmOptionAndCollapse(index)"
			>
				{{ option.text }}
			</li>
		</ul>
	</div>
</template>

<style>
@layer components {
	.combobox-container {
		position: relative;

		[role='combobox'] {
			cursor: pointer;
			display: inline-block;
		}

		span {
			margin-inline-end: 0.3rem;
		}

		ul {
			position: absolute;
			top: 100%;
			right: 0;
		}

		li[role='option'][data-focused='true'] {
			background-color: var(--clr-page-bg-dark);
		}
	}
}
</style>
