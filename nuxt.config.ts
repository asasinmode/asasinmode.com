export default defineNuxtConfig({
	compatibilityDate: '2025-05-12',
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	modules: ['@nuxtjs/i18n', '@nuxt/eslint'],
	i18n: {
		locales: [
			{ code: 'en', language: 'en-US', file: 'en-US.json', name: 'English' },
			{ code: 'pl', language: 'pl-PL', file: 'pl-PL.json', name: 'Polski' },
		],
		lazy: true,
		defaultLocale: 'en',
		baseUrl: 'https://asasinmode.com',
	},
	css: ['~/assets/index.css', '~/assets/rainbow.css'],
	eslint: {
		config: {
			standalone: false,
		},
	},
});
