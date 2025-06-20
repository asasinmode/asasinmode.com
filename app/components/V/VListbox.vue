<script setup lang="ts" generic="T">
type IComputedOptions = { text: string; value: T }[];

const props = defineProps<{
	id: string;
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

watch(modelValue, (value) => {
	cursoredOverIndex.value = undefined;
	for (let i = 0; i < computedOptions.value.length; i++) {
		if (computedOptions.value[i]!.value === value) {
			cursoredOverIndex.value = i;
			break;
		}
	}
}, { immediate: true });

function moveCursor(value: number) {
	cursoredOverIndex.value = Math.max(
		0,
		Math.min(
			(cursoredOverIndex.value ?? 0) + value,
			computedOptions.value.length - 1,
		),
	);
	selectOption(cursoredOverIndex.value, false);
}

function setCursor(value: number) {
	cursoredOverIndex.value = value;
	selectOption(cursoredOverIndex.value, false);
}

function selectOption(index: number, collapse = true) {
	modelValue.value = computedOptions.value[index]!.value;

	if (collapse) {
		isExpanded.value = false;
	}
}

function onFocus() {
	if (cursoredOverIndex.value === undefined) {
		setCursor(0);
	}
}

function onKeydown(e: KeyboardEvent) {
	let preventDefault = true;

	if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
		if (e.key === ' ') {
			isExpanded.value = true;
		} else {
			handleTypeahead(e.key);
		}
		e.preventDefault();
		return;
	}

	switch (e.key) {
		case 'Enter':
		case 'Escape': {
			isExpanded.value = false;
			break;
		} case 'ArrowDown': {
			moveCursor(1);
			break;
		} case 'ArrowUp': {
			moveCursor(-1);
			break;
		} case 'Home': {
			setCursor(0);
			break;
		} case 'End': {
			setCursor(computedOptions.value.length - 1);
			break;
		} case ' ': {
			isExpanded.value = true;
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
	typeaheadBuffer += key.toLocaleLowerCase();

	const index = computedOptions.value.findIndex(option => option.text.toLocaleLowerCase().startsWith(typeaheadBuffer));
	if (~index) {
		setCursor(index);
	}

	typeaheadTimeout = setTimeout(() => {
		typeaheadBuffer = '';
	}, 1000);
}

onBeforeUnmount(() => {
	clearTimeout(typeaheadTimeout);
});

const activeDescendantId = computed(() => cursoredOverIndex.value !== undefined
	? `${props.id}-opt-${cursoredOverIndex.value}`
	: undefined);
</script>

<template>
	<ul
		:id="`${id}-listbox`"
		tabindex="0"
		role="listbox"
		:data-expanded="isExpanded"
		:aria-activedescendant="activeDescendantId"
		@focus="onFocus"
		@keydown="onKeydown"
	>
		<li
			v-for="(option, index) in computedOptions"
			:id="`${id}-opt-${index}`"
			:key="index"
			:aria-selected="(modelValue === option.value) || undefined"
			role="option"
			@click="selectOption(index)"
		>
			{{ option.text }}
		</li>
	</ul>
</template>

<style>
@layer components {
	li[role='option'][aria-selected='true'] {
		background-color: var(--clr-page-bg-dark);
	}
}
</style>
