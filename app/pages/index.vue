<script setup lang="ts">
import defaultSkin from '~/composables/skins/index/default';

useSkin(defaultSkin);
</script>

<template>
	<main>
		<span id="wip">{{ $t('index.wip') }}</span>
		<h1 id="name-header">
			<span id="name-header-text">
				Stanisław Perek
			</span>
		</h1>
		<ul id="me-tokens">
			<li>web developer</li>
			<li>programmer</li>
			<li>i like coding</li>
		</ul>
		<h3 id="stuff-header">
			<span id="stuff-header-text">
				<svg
					id="stuff-header-rainbow"
					mlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="xMidYMid slice"
					width="200"
					height="103"
					x="0"
					y="0"
					viewBox="0 -3 200 100"
				>
					<defs>
						<linearGradient id="grad-red" x1="0%" y1="10%" x2="100%" y2="20%">
							<stop offset="0%" stop-color="#f00" />
							<stop offset="100%" stop-color="#800" />
						</linearGradient>
						<linearGradient id="grad-orange" x1="0%" y1="20%" x2="100%" y2="30%">
							<stop offset="0%" stop-color="#ffa500" />
							<stop offset="100%" stop-color="#ff00ff" />
						</linearGradient>
					</defs>
					<path fill="violet" d="M 0 80 C 100 110 100 60 200 80 L 200 69 C 100 49 100 99 0 69 Z" />
					<path fill="indigo" d="M 0 70 C 100 100 100 50 200 70 L 200 59 C 100 39 100 89 0 59 Z" />
					<path fill="blue" d="M 0 60 C 100 90 100 40 200 60 L 200 49 C 100 29 100 79 0 49 Z" />
					<path fill="green" d="M 0 50 C 100 80 100 30 200 50 L 200 39 C 100 19 100 69 0 39 Z" />
					<path fill="yellow" d="M 0 40 C 100 70 100 20 200 40 L 200 29 C 100 9 100 59 0 29 Z" />
					<path fill="url(#grad-orange)" d="M 0 30 C 100 60 100 10 200 30 L 200 19 C 100 -1 100 49 0 19 Z" />
					<path fill="url(#grad-red)" d="M 0 20 C 100 50 100 0 200 20 L 200 10 C 100 -10 100 40 0 10 Z" />
				</svg>
				stuff
			</span>
		</h3>
		<ul>
			<li>
				<h5>fullstack blog cms</h5>
				<p>featuring an html and css editor, custom file and image management with automatically generated responsive picture variants, seo tools and more</p>
			</li>
			<li>
				<h5>a wheelbarrow</h5>
				<p>vanilla friendly minecraft mod adding a wheelbarrow you can use to transport mobs around</p>
			</li>
			<li>
				<h5>warframe offering prices scraper</h5>
				<p>a small cli script for finding the most expensive warframe syndicate offering mods</p>
			</li>
			<li>
				<h5>league of legends damage calculator</h5>
				<p>unfortunately not updated, but in its glory days it accurately showed the dps difference between different builds</p>
			</li>
		</ul>
		<p>
			big or small, web, game or cli - doesn't matter. if it sounds fun or useful, i'll do it
		</p>
		<p>
			personally, i enjoy creating user-facing stuff that someone can interact with or creating complicated logic that make me feel smart<br>
			despite that, i understand that not all of programming can be exciting and sometimes a job needs to get done. i'm here for those times too
		</p>
		<h3>experience</h3>
		<ol>
			<li>4 years of polish <i>technikum</i> (vocational IT school), in the middle of which i started freelance work</li>
			<li>internship that turned into 4 years of junior, then mid fullstack web developer position</li>
			<li>? - excited for what future holds</li>
		</ol>
		<h5>web dev</h5>
		<p>
			if it's javascript, html or css related i will be fine, regardless of the framework and tools. That said, i prefer Vue and use it a lot with Nuxt and tailwind (unocss). I can handle a typescript backend, whether it's using an ORM or pure SQL/Mongo, and 3rd-party integrations. I have written tests with Jest then migrated them to Vitest and rewritten a codebase from cjs to esm
		</p>
		<p>
			besides implementing the designs pixel-perfect, i do my best to make sure my websites meet the a11y standards, are responsive and fully keyboard navigable. I would like to explore making a website fully screen reader friendly but unforunately it's a very time consuming process and i haven't had the chance to do so. To anybody interested in accessibility i wholeheartedly recommend <NuxtLink target="_blank" to="https://adrianroselli.com/">
				Adrian Roselli's website
			</NuxtLink>
		</p>
		<h5>not web dev</h5>
		<p>
			my mindset is that given enough time i'll figure it out - sooner rather than later, it's all programming after all. I enjoy finding new ways of doing things and programming languages are really good at providing them. I know what Rust, Python and PHP look like and i feel like i wouldn't be <i>that</i> lost amidst Java decorators or Lua's 1-based indexing.
		</p>
		<p>
			git for version control and a decent knowledge of what to do with branches, pull requests and commits. I'm familiar with creating/maintaining Github CI/CD pipelines, as well as making and using Docker containers. I use Neovim btw. Additionally i have experience with video editing
		</p>
		<h3>contact</h3>
		<p>
			get in touch through email (<a href="mailto:stanislaw.perek.ui@gmail.com">stanislaw.perek.ui@gmail.com</a>) or a discord dm (username: <v-copiable-text text="asasinmode" />). Whether business related or something i yapped about on <strong>TODO blog</strong>, i'm happy to talk
		</p>
	</main>
</template>

<style>
@layer page {
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
