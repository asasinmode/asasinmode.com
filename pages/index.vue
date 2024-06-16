<template>
	<main id="homePage">
		<div id="titleContainer">
			<h1 id="title">
				asasinmode
			</h1>
			<h2 id="subtitle">
				{{ $t('home.subtitle') }}
			</h2>
			<I18nT id="description" tag="p" keypath="home.description">
				<br>
				<NuxtLink to="https://x.com/asasinmode" target="_blank">
					X
				</NuxtLink>
				<NuxtLink to="https://twitch.tv/asasinmode" target="_blank">
					Twitch
				</NuxtLink>
			</I18nT>
			<div />
		</div>
	</main>
</template>

<style>
/* TODO make a plugin for generating clamp thingies */
:root {
	--size-16-36: clamp(1rem, 0.6711rem + 1.6447vi, 2.25rem);
	--size-48-160: clamp(3rem, 1.1579rem + 9.2105vi, 10rem);
}

#homePage {
	display: flex;
	align-items: center;
	flex-grow: 1;
	padding-block: calc(var(--header-py) * 2 + var(--language-switch-font-size));
	padding-inline: var(--layout-px);

	#titleContainer {
		margin-inline: auto;
	}

	#title {
		font-size: var(--size-48-160);
		font-weight: 600;
	}

	#subtitle {
		color: light-dark(hsl(0 0% 20%), hsl(0 0 80%));
		margin-bottom: 1.5rem;
	}

	#description {
		font-size: var(--size-16-36);

		a {
			color: var(--color);
		}
	}
}
</style>
