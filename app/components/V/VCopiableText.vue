<script setup lang="ts">
const props = defineProps<{ text: string }>();

const hasCopied = ref(false);

async function copy() {
	await navigator.clipboard.writeText(props.text);
	hasCopied.value = true;
}
function resetInfo() {
	hasCopied.value = false;
}
</script>

<template>
	<button class="v-copiable-text" @click="copy" @mouseleave="resetInfo" @blur="resetInfo">
		{{ text }}
		<client-only>
			<span class="info" :aria-live="hasCopied ? undefined : 'polite'">
				<span class="copy">{{ hasCopied ? $t('copied') : $t('copy') }}</span>
			</span>
		</client-only>
	</button>
</template>

<style>
@layer component {
	.v-copiable-text {
		position: relative;

		.info {
			position: absolute;
			left: 50%;
			top: 0;
			transform: translate(-50%, -100%);
		}

		.copy {
			display: none;
		}

		&:hover .copy,
		&:focus-visible .copy {
			display: block;
		}
	}
}
</style>
