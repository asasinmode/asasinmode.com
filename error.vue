<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{
	error: NuxtError;
}>();

const localePath = useLocalePath();
const route = useRoute();
</script>

<template>
	<h1>{{ $t("error.code") }}: {{ error.statusCode }}</h1>
	<p>
		{{ $t("error.message") }}:
		{{
			// @TODO this doesnt work and shows the translation path if status code is unknown
			$t(`error.${error.statusCode}`, { url: route.path })
				|| error.statusMessage
		}}
	</p>
	<NuxtLink :to="localePath('/')" @click="clearError()">
		{{ $t("error.goBack") }}
	</NuxtLink>
</template>
