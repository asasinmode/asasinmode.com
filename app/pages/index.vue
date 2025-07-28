<script setup lang="ts">
import defaultSkin from '~/composables/skins/index/default';

useSkin(defaultSkin);

const localePath = useLocalePath();
const locale = useI18n().locale;

const experienceCopes = [
	'I\'m working on it 😓',
	'It\'s a marathon not a race 🗿',
	'Just a matter of time 😉',
	'I\'m getting there 😫',
	// 'Help me get some 😣',
];

const experienceCopeIndex = ref(0);

function shuffleExperienceCope() {
	let randomIndex = experienceCopes.length * Math.random() | 0;
	while (randomIndex === experienceCopeIndex.value) {
		randomIndex = experienceCopes.length * Math.random() | 0;
	}
	experienceCopeIndex.value = randomIndex;
}
</script>

<template>
	<main>
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
		<h2 id="stuff">
			<span id="stuff-header-text">
				stuff
				<a class="section-anchor" href="#stuff">
					<span aria-hidden="true">#</span>
					<span class="sr-only">stuff section anchor</span>
				</a>
			</span>
		</h2>
		<ul id="stuff-list">
			<li>
				<h3 id="stuff-humbak">
					fullstack blog cms
				</h3>
				<nuxt-link to="https://github.com/asasinmode/humbak/?tab=readme-ov-file#humbak" target="_blank" class="no-underline" aria-labelledby="stuff-humbak" />
				<p style="--size-stuff-max-w: 50ch">
					featuring an html and css editor, custom file and image management with automatically generated responsive picture variants and seo tools
				</p>
				<img
					src="/images/home/humbak_thumbnail.webp"
					width="640"
					height="320"
					alt="Thumbnail with a screenshot of the humbak cms showcasing the pages table along with the meta and code editor and the html preview"
				>
			</li>
			<li>
				<h3 id="stuff-wheelbarrow">
					a minecraft mod
				</h3>
				<nuxt-link to="https://modrinth.com/mod/wheelbarrow" target="_blank" class="no-underline" aria-labelledby="stuff-wheelbarrow" />
				<p>adding a wheelbarrow that you can use to transport mobs around</p>
				<img
					src="/images/home/wheelbarrow_thumbnail.webp"
					width="640"
					height="320"
					alt="Thumbnail with, on the left, a screenshot of minecraft characters next to wheelbarrows. On the right, a screenshot of the wheelbarrow crafting recipe"
				>
			</li>
			<li>
				<h3 id="stuff-warframe-scraper">
					warframe offering prices scraper
				</h3>
				<nuxt-link to="https://github.com/asasinmode/warframe-syndicate-offerings-scraper?tab=readme-ov-file#warframe-syndicate-offerings-price-scraper" target="_blank" class="no-underline" aria-labelledby="stuff-warframe-scraper" />
				<p>in form of a cli tool. It lists and finds the most expensive warframe syndicate offerings</p>
				<img
					src="/images/home/warframe_scraper_thumbnail.webp"
					width="640"
					height="320"
					alt="Thumbnail with a screenshot of terminal output for the offerings scraper showing the syndicate selection and scraping output"
					style="object-position: left;"
				>
			</li>
			<li>
				<h3 id="stuff-collector">
					league of legends damage calculator
				</h3>
				<nuxt-link to="https://github.com/asasinmode/collector/wiki#welcome-to-the-collector-wiki" target="_blank" class="no-underline" aria-labelledby="stuff-collector" />
				<p style="--size-stuff-max-w: 45ch">
					unfortunately not updated, but in its glory days it accurately showed the damage difference between champions and builds
				</p>
				<img
					src="/images/home/collector_thumbnail.webp"
					width="640"
					height="320"
					alt="Thumbnail with a screenshot of the collector damage calculator page with Jinx and Vi selected and some items chosen. Their calculated stats can be seen"
				>
			</li>
		</ul>
		<div id="stuff-note">
			<h3>
				<NuxtLink :to="localePath('projects')">
					projects page
				</NuxtLink>
			</h3>
			<p>
				big or small, web, game or cli - doesn't matter. if it sounds fun or useful, i'll do it
			</p>
			<p>
				i enjoy creating user-facing stuff that someone can interact with, or creating complicated logic that makes me feel smart. Despite it, i understand that not all of programming can be exciting and sometimes a job needs to get done
			</p>
		</div>
		<h2 id="experience">
			<span id="experience-header-text">
				<svg viewBox="0 0 525 80" xmlns="http://www.w3.org/2000/svg">
					<path
						v-for="(stroke, index) in [
							'#de0000',
							'#fe622c',
							'#fef600',
							'#00bc00',
							'#009cfe',
							'#000084',
							'#2c009c',
						]"
						:id="index === 0 ? 'experience-path' : undefined"
						:key="stroke"
						class="experience-path"
						fill="none"
						:style="`--offset: ${index * -(24 + 2)}; --animation-offset: ${index * -(24 + 2) - 182}`"
						:stroke
						:d="locale === 'en'
							? 'M 77 55 C 138 40 143 35 205 34 C 260 34 269 50 320 50 C 398 52 401 44 448 34'
							: 'M 14 52 C 65 43 110 33 175 32 C 240 32 285 52 350 52 C 415 52 460 32 511 32'"
					/>
					<text fill="currentColor" :textLength="locale === 'en' ? '5.5em' : '7.25em'">
						<textPath
							href="#experience-path"
							startOffset="50%"
							text-anchor="middle"
							dominant-baseline="middle"
						>
							{{ $t('index.experience') }}
						</textPath>
					</text>
				</svg>
				<a class="section-anchor" href="#experience">
					<span aria-hidden="true">#</span>
					<span class="sr-only">experience section anchor</span>
				</a>
			</span>
		</h2>
		<ol id="experience-list">
			<li>2018-2022 vocational IT school</li>
			<li>2022-2025 mid fullstack web developer</li>
			<li aria-live="polite">
				{{ experienceCopes[experienceCopeIndex] }}
				<button @click="shuffleExperienceCope">
					cope
				</button>
			</li>
		</ol>
		<h3>web dev</h3>
		<p>
			if it's javascript, html or css related i will be fine, regardless of the framework and tools. That said, i prefer Vue and use it a lot with Nuxt and tailwind (unocss). I can handle a typescript backend, whether it's using an ORM or pure SQL/Mongo, and 3rd-party integrations. I have written tests with Jest then migrated them to Vitest and rewritten a codebase from cjs to esm
		</p>
		<p>
			besides implementing the designs pixel-perfect, i do my best to make sure my websites meet the a11y standards, are responsive and fully keyboard navigable. I would like to explore making a website fully screen reader friendly but unforunately it's a very time consuming process and i haven't had the chance to do so. To anybody interested in accessibility i wholeheartedly recommend <NuxtLink target="_blank" to="https://adrianroselli.com/">
				Adrian Roselli's website
			</NuxtLink>
		</p>
		<h3>not web dev</h3>
		<p>
			my mindset is that given enough time i'll figure it out - sooner rather than later, it's all programming after all. I enjoy finding new ways of doing things and programming languages are really good at providing them. I know what Rust, Python and PHP look like and i feel like i wouldn't be <i>that</i> lost amidst Java decorators or Lua's 1-based indexing.
		</p>
		<p>
			git for version control and a decent knowledge of what to do with branches, pull requests and commits. I'm familiar with creating/maintaining Github CI/CD pipelines, as well as making and using Docker containers. I use Neovim btw. Additionally i have experience with video editing
		</p>
		<h2>contact</h2>
		<p>
			get in touch through email (<a href="mailto:stanislaw.perek.ui@gmail.com">stanislaw.perek.ui@gmail.com</a>) or a discord dm (username: <v-copiable-text text="asasinmode" />). Whether business related or something i yapped about on <nuxt-link to="/blog">
				<!-- eslint-disable-next-line vue/multiline-html-element-content-newline -->
				blog</nuxt-link>, i'm happy to talk
		</p>
	</main>
</template>
