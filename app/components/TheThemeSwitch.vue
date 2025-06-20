<script setup lang="ts">
const route = useRoute();

const skinName = useState<ISkinName>('skinName', () => 'default');
const availableSkins = computed<ISkinName[]>(() => route.meta.enabledSkins || ['default', 'minimal']);

const colorScheme = ref('auto');
const availableColorSchemes = ['light', 'auto', 'dark'];

onMounted(() => {
	colorScheme.value = document.documentElement.dataset.colorScheme!;

	window
		.matchMedia('(prefers-color-scheme: dark)')
		.addEventListener('change', ({ matches }) => {
			setColorScheme(matches ? 'dark' : 'light');
		});
});

function setColorScheme(name: string) {
	colorScheme.value = name;
	localStorage.setItem('color-scheme', name);
	document.documentElement.dataset.colorScheme = name;
	window.skinUpdateColorScheme?.();
}
</script>

<template>
	<div id="theme-controls">
		<div class="theme-ctrls-group" role="group">
			<span id="skin-lbl">skin</span>
			:
			<button
				v-for="name in availableSkins"
				:id="`skin-${name}`"
				:key="name"
				:aria-pressed="name === skinName"
				:aria-labelledby="`skin-lbl skin-${name}`"
				@click="skinName = name"
			>
				{{ name }}
			</button>
		</div>
		<div>
			<label id="color-scheme-listbox-lbl">
				theme:
			</label>
			<VListbox
				id="color-scheme"
				v-model="colorScheme"
				aria-labelledby="color-scheme-listbox-lbl"
				transform-options
				:options="availableColorSchemes"
				@update:model-value="setColorScheme"
			/>
		</div>
	</div>
</template>

<style>
@layer component {
	.theme-ctrls-group {
		display: flex;
		column-gap: 0.4em;
		font-size: 1.5rem;
	}

	#color-scheme-listbox li {
		cursor: pointer;
	}

	.theme-ctrls-group button,
	#color-scheme-listbox li {
		color: currentColor;
		text-decoration-line: none;

		&:hover,
		&:focus-visible {
			text-decoration-line: underline;
		}
	}

	.theme-ctrls-group button[aria-pressed='true'],
	#color-scheme-listbox li[aria-selected='true'] {
		color: var(--clr-rainbow);
	}
}
</style>
