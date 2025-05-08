<script setup lang="ts">
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
	<div id="languageSwitch">
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
:root {
	--language-switch-font-size: 1.5rem;
}

#languageSwitch {
	display: flex;
	column-gap: 0.4em;
	font-size: var(--language-switch-font-size);
	line-height: 1;

	.router-link-active {
		text-decoration: underline;
	}
}
</style>
