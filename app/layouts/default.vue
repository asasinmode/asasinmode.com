<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
	<header>
		<TheLanguageSwitch />
		<menu>
			<li>
				<NuxtLink :to="localePath('index')">
					home
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('blog')">
					blog
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('cv')">
					cv
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('cv')">
					projects
				</NuxtLink>
			</li>
		</menu>
		<TheSkinSwitch />
	</header>
	<slot />
</template>

<style>
@layer layout {
	menu {
		display: flex;
		column-gap: 0.5rem;

		.router-link-exact-active {
			background: #4f4f4f;
		}
	}

	header {
		position: fixed;
		top: 0;
		right: 0;
		padding: 0.3rem 0.75rem;
	}
}
</style>
