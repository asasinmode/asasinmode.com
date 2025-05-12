<script setup lang="ts">
const { locales } = useI18n();
</script>

<template>
	<div id="languageSwitch">
		<NuxtLink
			v-for="locale in locales"
			:key="locale.code"
			:to="$switchLocalePath(locale.code)"
		>
			{{ locale.code }}
		</NuxtLink>
	</div>
</template>

<style>
#languageSwitch {
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
</style>
