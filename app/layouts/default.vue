<!-- eslint-disable vue/no-multiple-template-root -->
<template>
	<header>
		<TheLanguageSwitch />
	</header>
	<slot />
</template>

<style>
header {
	position: fixed;
	top: 0;
	right: 0;
	padding: 0.3rem 0.75rem;
}
</style>
