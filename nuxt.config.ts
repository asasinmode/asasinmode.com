export default defineNuxtConfig({
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4
	},
	modules: ['@nuxtjs/i18n', '@nuxt/eslint'],
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en-US.json', name: 'English' },
			{ code: 'pl', iso: 'pl-PL', file: 'pl-PL.json', name: 'Polski' },
		],
		lazy: true,
		langDir: 'lang',
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
