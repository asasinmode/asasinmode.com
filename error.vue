<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{
  error: NuxtError;
}>();

const localePath = useLocalePath();
const route = useRoute();

console.log(props.error);
// TODO error statusCode shows even if unknown
// TODO page meta types are wrong
</script>

<template>
  <h1>{{ $t("error.code") }}: {{ error.statusCode }}</h1>
  <p>
    {{ $t("error.message") }}:
    {{
      $t(`error.${error.statusCode}`, { url: route.path }) ||
      error.statusMessage
    }}
  </p>
  <NuxtLink @click="clearError()" :to="localePath('/')">
    {{ $t("error.goBack") }}
  </NuxtLink>
</template>
