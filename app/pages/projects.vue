<script setup lang="ts">
import defaultSkin from '~/composables/skins/projects/default';

definePageMeta({
	enabledSkins: ['default'],
});

useSkin(defaultSkin);
</script>

<template>
	<h1>projects be here</h1>
</template>
