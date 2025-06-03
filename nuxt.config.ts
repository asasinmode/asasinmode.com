export default defineNuxtConfig({
	compatibilityDate: '2025-05-12',
	devtools: { enabled: true },
	app: { rootTag: 'body' },
	future: {
		compatibilityVersion: 4,
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
	modules: ['@nuxtjs/i18n', '@nuxt/eslint', '@nuxt/icon', '@nuxt/fonts'],
	i18n: {
		locales: [
			{ code: 'en', language: 'en-US', file: 'en.json', name: 'English' },
			{ code: 'pl', language: 'pl-PL', file: 'pl.json', name: 'Polski' },
		],
		lazy: true,
		defaultLocale: 'en',
		baseUrl: 'https://asasinmode.com',
	},
	css: ['~/assets/reset.css', '~/assets/index.css', '~/assets/rainbow.css', '#build/asasinmode:fluid-variables.css'],
	fonts: {
		defaults: {
			weights: [400, 700],
		},
	},
	runtimeConfig: {
		public: {
			cvImage: '',
		},
	},
});
