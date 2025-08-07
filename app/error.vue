<script setup lang="ts">
import type { NuxtError } from '#app';

defineProps<{ error: NuxtError }>();
</script>

<template>
	<h1>
		code: {{ error.statusCode }}
	</h1>
	<p> message: {{ error.statusMessage || '-' }} </p>
	<NuxtLink to="/" @click="clearError()">
		go back
	</NuxtLink>
</template>
