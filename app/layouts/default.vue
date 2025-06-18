<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
	<header id="wip">
		{{ $t('index.wip') }}
	</header>
	<nav>
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
				<NuxtLink :to="localePath('projects')">
					projects
				</NuxtLink>
			</li>
			<li>
				<NuxtLink :to="localePath('cv')">
					cv
				</NuxtLink>
			</li>
		</menu>
		<TheSkinSwitch />
	</nav>
	<slot />
</template>

<style>
@layer layout {
	#wip {
		text-transform: uppercase;
		position: absolute;
		left: 50%;
		top: 0.55rem;
		transform: translate(-50%, 0);
		font-size: var(--fluid-20-36);
		white-space: nowrap;
		background: repeating-linear-gradient(
			100deg,
			black,
			hsl(50 100% 50%) 0.05em,
			hsl(30 100% 60%) 0.65em,
			black 0.7em,
			black 1.3em
		);
		border-radius: 6px;
		padding-inline: 0.6rem;
		font-weight: 700;
		letter-spacing: -0.025em;
		animation: wip-blink steps(2, jump-start) 1s infinite;
		width: min-content;
	}

	nav {
		position: fixed;
		top: 0;
		right: 0;
		padding: 0.3rem 0.75rem;
	}

	menu {
		display: flex;
		column-gap: 0.5rem;

		.router-link-exact-active {
			background: #4f4f4f;
		}
	}

	@keyframes wip-blink {
		from {
			color: hsl(0 100% 100% / 0);
		}
		to {
			color: hsl(0 100% 100% / 1);
			text-shadow:
				2px 2px green,
				4px 4px purple,
				-2px -2px blue,
				-4px -4px red;
		}
	}
}
</style>
