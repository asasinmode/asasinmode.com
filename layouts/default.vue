<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <nav style="display: flex; column-gap: 0.5rem">
    <NuxtLink :to="localePath('/')">{{ $t("nav.home") }}</NuxtLink>
    <NuxtLink :to="localePath('/about')">{{ $t("nav.about") }}</NuxtLink>
    <button
      @click="
        throw createError({
          fatal: true,
          statusCode: 500,
          statusMessage: 'My server error',
        });
      "
    >
      Throw oopsie
    </button>

    <br />
    <TheLanguageSwitch />
  </nav>
  <slot />
</template>
