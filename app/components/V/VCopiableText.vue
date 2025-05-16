<script setup lang="ts">
defineProps<{ text: string }>();

const hasCopied = ref(false);

function copy() {
	hasCopied.value = true;
}
function resetInfo() {
	hasCopied.value = false;
}
</script>

<template>
	<button class="copiable" @click="copy" @mouseleave="resetInfo" @blur="resetInfo">
		{{ text }}
		<client-only>
			<span class="info" :aria-live="hasCopied ? undefined : 'polite'">
				<span v-if="hasCopied" class="copied">copied</span>
				<span v-else class="copy">copy</span>
			</span>
		</client-only>
	</button>
</template>

<style>
.copiable {
	position: relative;

	.info {
		position: absolute;
		left: 50%;
		transform: translate(-50%, -100%);
		color: var(--text-color);
	}

	.copy,
	.copied {
		display: none;
	}

	&:hover .copy,
	&:focus-visible .copy,
	&:hover .copied,
	&:focus-visible .copied {
		display: block;
	}
}
</style>
