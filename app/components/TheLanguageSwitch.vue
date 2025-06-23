<script setup lang="ts">
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
	<div id="language-switch">
		<NuxtLink
			v-for="locale in locales"
			:key="locale.code"
			:to="switchLocalePath(locale.code)"
		>
			{{ locale.code }}
		</NuxtLink>
	</div>
</template>

<style>
@layer component {
	#language-switch {
		display: flex;
		column-gap: 0.4em;
		font-size: 1.5rem;
	}
}
</style>
