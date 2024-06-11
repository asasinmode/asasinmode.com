<script setup lang="ts">
const { locale: currentLocale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <NuxtLink
    v-for="locale in locales"
    :key="locale.code"
    :to="switchLocalePath(locale.code)"
    :style="currentLocale === locale.code ? 'font-weight: 600' : ''"
  >
    {{ locale.name }}
  </NuxtLink>
</template>
