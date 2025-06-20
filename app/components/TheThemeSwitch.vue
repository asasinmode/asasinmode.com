<script setup lang="ts">
const route = useRoute();

const skinName = useState<ISkinName>('skinName', () => 'default');
const availableSkins = computed<ISkinName[]>(() => route.meta.enabledSkins || ['default', 'minimal']);

const colorScheme = ref('auto');

onMounted(() => {
	colorScheme.value = document.documentElement.dataset.colorScheme!;
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
		<div class="theme-ctrls-group" role="group">
			<span id="theme-lbl">{{ colorScheme }} theme</span>
			:
			<button
				v-for="name in ['light', 'dark', 'auto']"
				:id="`theme-${name}`"
				:key="name"
				:aria-pressed="colorScheme === name"
				:aria-labelledby="`theme-lbl theme-${name}`"
				@click="setColorScheme(name)"
			>
				{{ name }}
			</button>
		</div>
	</div>
</template>

<style>
@layer component {
	.theme-ctrls-group {
		display: flex;
		column-gap: 0.4em;
		font-size: 1.5rem;

		button {
			color: currentColor;
			text-decoration-line: none;

			&:hover,
			&:focus-visible {
				text-decoration-line: underline;
			}

			&[aria-pressed='true'] {
				color: var(--clr-rainbow);
			}
		}
	}
}
</style>
