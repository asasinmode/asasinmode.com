<script setup lang="ts">
const i18nHead = useLocaleHead({
	addSeoAttributes: true,
	addDirAttribute: true,
});

useHead({
	htmlAttrs: {
		lang: () => i18nHead.value.htmlAttrs.lang,
		dir: () => i18nHead.value.htmlAttrs.dir,
	},
	link: [].concat(i18nHead.value.link),
	meta: i18nHead.value.meta || [],
});

useSeoMeta({
	title: 'asasinmode | Stanisław Perek',
});
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
