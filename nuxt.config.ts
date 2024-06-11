// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en-US.ts", name: "English" },
      { code: "pl", iso: "pl-PL", file: "pl-PL.ts", name: "Polski" },
    ],
    lazy: true,
    langDir: "lang",
    defaultLocale: "en",
    baseUrl: "http://localhost:3000",
  },
});
