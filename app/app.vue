<script setup lang="ts">
import '~/assets/skins/default.css';

const i18nHead = useLocaleHead({ seo: true, dir: true });

useHead({
	htmlAttrs: {
		lang: () => i18nHead.value.htmlAttrs.lang,
		dir: 'ltr',
	},
	link: [
		...i18nHead.value.link,
		{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
		{ rel: 'icon', href: '/favicon_dark.svg', media: '(prefers-color-scheme: dark)', type: 'image/svg+xml' },
		{ rel: 'icon', href: '/favicon.ico' },
		{ rel: 'icon', href: '/favicon_dark.ico', media: '(prefers-color-scheme: dark)' },
	],
	meta: [...i18nHead.value.meta],
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
