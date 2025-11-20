export default defineNuxtConfig({
	compatibilityDate: '2025-05-12',
	devtools: { enabled: true },
	app: {
		rootTag: 'body',
		head: {
			script: [
				{
					innerHTML: 'const colorScheme = localStorage.getItem(\'color-scheme\'); document.documentElement.dataset.colorScheme = colorScheme || \'auto\'; function skinIsDarkMode() { return document.documentElement.dataset.colorScheme === \'dark\' || (document.documentElement.dataset.colorScheme !== \'light\' && window.matchMedia && window.matchMedia(\'(prefers-color-scheme: dark)\').matches) }; function skinIsEn() { return document.documentElement.lang === \'en-US\' }',
					tagPriority: 0,
				},
			],
		},
	},
	experimental: {
		typedPages: true,
	},
	features: {
		inlineStyles: false,
	},
	eslint: {
		config: {
			standalone: false,
		},
	},
	modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxtjs/i18n'],
	i18n: {
		locales: [
			{ code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
			{ code: 'pl', language: 'pl-PL', file: 'pl.json', name: 'Polski' },
		],
		defaultLocale: 'en',
		baseUrl: 'https://asasinmode.com',
	},
	css: ['~/assets/index.css', '~/assets/reset.css', '#build/fluid-variables.css'],
	runtimeConfig: {
		public: {
			cvImage: '',
		},
	},
});
