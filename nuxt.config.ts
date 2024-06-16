export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxtjs/i18n', '@nuxt/eslint'],
	i18n: {
		locales: [
			{ code: 'en', iso: 'en-US', file: 'en-US.ts', name: 'English' },
			{ code: 'pl', iso: 'pl-PL', file: 'pl-PL.ts', name: 'Polski' },
		],
		lazy: true,
		langDir: 'lang',
		defaultLocale: 'en',
		baseUrl: 'https://asasinmode.com',
	},
	css: ['~/assets/index.css'],
	eslint: {
		config: {
			standalone: false,
		},
	},
});
