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
