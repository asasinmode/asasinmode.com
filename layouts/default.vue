<template>
	<div id="layoutContainer">
		<header id="header">
			<TheLanguageSwitch />
		</header>
		<slot />
	</div>
</template>

<style>
:root {
	--header-py: 0.3rem;
	--layout-px: 0.75rem;
}

#layoutContainer {
	display: flex;
	flex-direction: column;
}

#header {
	position: fixed;
	top: 0;
	right: 0;
	padding: var(--header-py) 0.75rem;
}
</style>
