<script setup lang="ts">
const i18nHead = useLocaleHead({ seo: true, dir: true });

useHead({
	htmlAttrs: {
		lang: () => i18nHead.value.htmlAttrs.lang,
		dir: 'ltr',
	},
	link: i18nHead.value.link,
	meta: i18nHead.value.meta,
});

useSeoMeta({
	title: 'Stanisław Perek',
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
@import '~/assets/skins/default.css';
</style>
