<script setup lang="ts">
const route = useRoute();

const skinName = useState<ISkinName>('skinName', () => 'default');
const availableSkins = computed<ISkinName[]>(() => route.meta.enabledSkins || ['default', 'minimal']);
</script>

<template>
	<div id="skin-switch">
		<button
			v-for="name in availableSkins"
			:key="name"
			:style="name === skinName ? 'color: var(--color)' : undefined"
			@click="skinName = name"
		>
			{{ name }}
		</button>
	</div>
</template>

<style>
@layer component {
	#skin-switch {
		display: flex;
		column-gap: 0.4em;
		font-size: 1.5rem;

		a {
			color: currentColor;
			text-decoration-line: none;

			&:hover,
			&:focus-visible {
				text-decoration-line: underline;
			}

			&.router-link-active {
				color: var(--color);
			}
		}
	}
}
</style>
