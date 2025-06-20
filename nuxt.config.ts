export default defineNuxtConfig({
	compatibilityDate: '2025-05-12',
	devtools: { enabled: true },
	app: {
		rootTag: 'body',
		head: {
			script: [
				{
					innerHTML: 'const colorScheme = localStorage.getItem(\'color-scheme\'); if (colorScheme) { document.documentElement.dataset.colorScheme = colorScheme }; function skinIsDarkMode() { return document.documentElement.dataset.colorScheme === \'dark\' || (document.documentElement.dataset.colorScheme === \'auto\' && window.matchMedia && window.matchMedia(\'(prefers-color-scheme: dark)\').matches) }',
					tagPriority: 0,
				},
			],
		},
	},
	future: {
		compatibilityVersion: 4,
	},
	experimental: {
		typedPages: true,
		watcher: 'parcel',
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
	css: ['~/assets/index.css', '~/assets/reset.css', '#build/asasinmode:fluid-variables.css'],
	fonts: {
		defaults: {
			weights: [400, 500, 700],
		},
	},
	runtimeConfig: {
		public: {
			cvImage: '',
		},
	},
});
