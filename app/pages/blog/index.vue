<script setup lang="ts">
import defaultSkin from '~/composables/skins/blog/default';

definePageMeta({
	enabledSkins: ['default'],
});

useSkin(defaultSkin);
</script>

<template>
	<h1>blog be here</h1>
</template>
