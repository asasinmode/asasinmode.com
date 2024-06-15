<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const localePath = useLocalePath();
const route = useRoute();

console.log(props.error);
</script>

<template>
  <h1>{{ $t("error.code") }}: {{ error.statusCode }}</h1>
  <p>
    {{ $t("error.message") }}:
    {{
      // @TODO this doesnt work and shows the translation path if status code is unknown
      $t(`error.${error.statusCode}`, { url: route.path }) ||
      error.statusMessage
    }}
  </p>
  <NuxtLink @click="clearError()" :to="localePath('/')">
    {{ $t("error.goBack") }}
  </NuxtLink>
</template>
