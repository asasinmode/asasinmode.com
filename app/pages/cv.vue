<script setup lang="ts">
useHead({ link: [{ rel: 'stylesheet', href: '/cv.css' }] });
definePageMeta({ layout: 'empty' });

const { t } = useI18n({ useScope: 'local' });

onMounted(() => {
	document.getElementById('header-email')?.append(
		[115, 116, 97, 110, 105, 115, 108, 97, 119, 46, 112, 101, 114, 101, 107, 46, 117, 105, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109].map(code => String.fromCharCode(code)).join(''),
	);
	document.getElementById('contact-phone')?.append(
		[54, 54, 55, 32, 49, 53, 56, 32, 55, 55, 50].map(code => String.fromCharCode(code)).join(''),
	);
});
</script>

<template>
	<TheLanguageSwitch />

	<header>
		<div id="cv-image-container">
			<img :src="$config.public.cvImage" crossorigin="anonymous">
		</div>
		<h1>Stanisław Perek<span id="header-email" /></h1>
		<I18nT tag="p" keypath="header1">
			<b style="font-weight: 500">{{ t('headerMe') }}</b>
		</I18nT>
		<I18nT tag="p" keypath="header2">
			<strong>a11y</strong>
		</I18nT>
	</header>

	<aside>
		<ul id="contact-list">
			<li>
				<span class="sr-only">strona</span>
				<Icon size="1.25em" name="ph:globe-simple" /> asasinmode.com
			</li>
			<li id="contact-phone">
				<span class="sr-only">numer telefonu</span>
				<Icon size="1.25em" name="ph:phone-fill" />
			</li>
			<li>
				<span class="sr-only">lokalizacja:</span>
				<Icon size="1.25em" name="ph:map-pin-fill" /> {{ t('location') }}
			</li>
			<li>
				<span class="sr-only">github</span>
				<Icon size="1.25em" name="logos:github-icon" /> github.com/asasinmode
			</li>
		</ul>
		<hr>
		<p id="contact-title">
			{{ t('technikZsl') }}
		</p>
		<hr>
		<ul id="lang-list">
			<li>{{ t('english') }} <span>C2</span></li>
			<li>{{ t('mandarin') }} <span>A1</span></li>
		</ul>
	</aside>

	<main>
		<section id="section-experience">
			<h1>{{ t('experience') }}</h1>
			<ol>
				<li>
					<h2>Freelancing <span>2020-2022</span></h2>
					<ul>
						<li>{{ t('freelancing1') }}</li>
						<li>{{ t('freelancing2') }}</li>
					</ul>
				</li>
				<li>
					<h2>Junior/mid web dev @ RemoteCraftsmen <span>2022-2025</span></h2>
					<ul>
						<I18nT tag="li" keypath="rmtDev1">
							<template #saas>
								<strong>SAAS</strong>
							</template>
							<template #productPage>
								<strong>product page</strong>
							</template>
							<template #cms>
								<strong>CMS</strong>
							</template>
						</I18nT>
						<I18nT tag="li" keypath="rmtDev2">
							<template #progressiveEnhancement>
								<strong>Progressive enhancement</strong>
							</template>
							<template #a11y>
								<strong>a11y</strong>
							</template>
							<template #pwa>
								<strong>PWA</strong>
							</template>
						</I18nT>
						<I18nT tag="li" keypath="rmtDev3">
							<template #performanceRefactor>
								<strong>{{ t('performanceRefactor') }}</strong>
							</template>
						</I18nT>
						<I18nT tag="li" keypath="rmtDev4">
							<template #toolsScripts>
								<strong>{{ t('toolsScripts') }}</strong>
							</template>
						</I18nT>
						<I18nT tag="li" keypath="rmtDev5">
							<template #thirdPartyIntegration>
								<strong>{{ t('thirdPartyIntegration') }}</strong>
							</template>
						</I18nT>
					</ul>
				</li>
			</ol>
		</section>

		<section id="section-skills">
			<h1>{{ t('skills') }}</h1>
			<ul>
				<I18nT tag="li" keypath="skills1">
					<template #pixelPerfect>
						<strong>pixel perfect</strong>
					</template>
				</I18nT>
				<li>{{ t('skills2') }}</li>
				<li>{{ t('skills3') }}</li>
				<li>{{ t('skills4') }}</li>
			</ul>
		</section>

		<section id="section-technologies">
			<h1>{{ t('technologies') }}</h1>
			<ul>
				<I18nT tag="li" keypath="technologies1">
					<strong>html/css/javascript</strong>
				</I18nT>
				<I18nT tag="li" keypath="technologies2">
					<strong>typescript</strong>
				</I18nT>
				<I18nT tag="li" keypath="technologies3">
					<strong>vue/nuxt</strong>
				</I18nT>
				<I18nT tag="li" keypath="technologies4">
					<strong>node.js/deno/bun</strong>
				</I18nT>
			</ul>
			<I18nT tag="p" keypath="technologiesNote">
				<template #sql>
					<strong>SQL</strong>
				</template>
				<template #mongoDB>
					<strong>MongoDB</strong>
				</template>
				<template #dockerContainer>
					<strong>{{ t('dockerContainer') }}</strong>
				</template>
				<template #lua>
					<strong>Lua</strong>
				</template>
				<template #java>
					<strong>Java</strong>
				</template>
			</I18nT>
		</section>
	</main>

	<footer>{{ t('footer') }}</footer>
</template>

<i18n lang="json">
{
	"pl": {
		"headerMe": "Technik informatyk, programista, full stack web developer",
		"header1": "{0}. Od 5 lat zajmuję się tworzeniem praktycznych stron internetowych i aplikacji webowych.",
		"header2": "Odnajduję się zarówno na front jak i back-endzie, jednak preferuję frontend. Przykładam dużą uwagę do responsywności i dostępności ({0}) moich projektów i staram się dopilnować najmniejszych szczegółów.",
		"location": "Kraków, 31-261",
		"technikZsl": "technik informatyk (ZSŁ)",
		"english": "angielski",
		"mandarin": "mandaryński",
		"experience": "Doświadczenie",
		"freelancing1": "Praca na zlecenie, w tym spersonalizowany blog i CMS do zarządzania nim",
		"freelancing2": "Montaż oraz edytowanie filmów",
	"rmtDev1": "Praca samodzielna oraz w zespole nad systemem ATS, aplikacją do obstawiania, {saas}-ami oraz {productPage}/{cms}-y do nich",
		"rmtDev2": "{progressiveEnhancement} istniejących projektów, w tym responsywność, {a11y} i {pwa}",
		"rmtDev3": "{performanceRefactor} istniejących projektów",
		"rmtDev4": "{toolsScripts} ułatwiające workflow",
		"rmtDev5": "{thirdPartyIntegration} takimi jak OAuth, Stripe, Twilio, Geolocalization",
		"performanceRefactor": "Poprawianie wydajności i refactor",
		"toolsScripts": "Narzędzia/skrypty dla deweloperów",
		"thirdPartyIntegration": "Integracja z 3rd-party serwisami",
		"skills": "Umiejętności",
		"skills1": "Implementowanie {pixelPerfect} designów",
		"skills2": "Umiejętność pracy samemu i w zespole",
		"skills3": "Zdolność kierowania projektem i dzielenia obowiązków",
		"skills4": "Szybkie przyswajanie nowych technologii/języków programowania",
		"technologies": "Technologie",
		"technologies1": "{0} - jeśli to strona internetowa to mogę ją napisać",
		"technologies2": "{0} - używam praktycznie od początku i potrafię wykorzystać większość jego funkcjonalności",
		"technologies3": "{0} - pracuję z obydwoma od ~4 lat i znam je jak własną dłoń. Jeśli chodzi o inne frameworki to jestem gotów użyć każdego ale najbardziej intuicyjnymi znajduję te dwa",
		"technologies4": "{0} - najwięcej doświadczenie mam w używaniu node.js ale sprawdzałem też pozostałe 2 i nie widzę przeszkód w przerzuceniu się na nie",
		"technologiesNote": "Poza wyżej wspomnianymi radzę sobie z bazami danych {sql}/{mongoDB} i umiem pracować z {dockerContainer}. Znam też {lua} i {java}.",
		"dockerContainer": "docker kontenerami",
		"footer": "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)."
	},
	"en": {
		"headerMe": "IT technician, programmer, fullstack web developer",
		"header1": "{0}. I've been working on practical websites and webapps for 5 years.",
		"header2": "I'm comfortable both on the front and backend but I prefer frontend. I strive to make my projects responsive and accessible ({0}) and try to pay attention to the smallest details.",
		"location": "Cracow, 31-261",
		"technikZsl": "IT technician (ZSŁ)",
		"english": "english",
		"mandarin": "mandarin",
		"experience": "Experience",
		"footer": "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
	}
}
</i18n>

<style>
:root {
	--image-bg: #b9d4ee;
	--header-bg: #d9eafd;
	--aside-bg: #e8f1fb;
	--accent: #4d7393;
}

body {
	width: 210mm;
	height: 297mm;
	min-height: unset !important;
	display: grid;
	margin-inline: auto;
	grid-template-columns: 55mm 1fr;
	grid-template-rows: 55mm 1fr min-content;
	color: black;
	background: white;
	z-index: 0;

	&::after {
		pointer-events: none;
		position: absolute;
		content: '';
		width: calc(210mm + 4px);
		height: calc(297mm + 4px);
		transform: translate(-2px, -2px);
		border: 2px solid black;
		z-index: 10;
	}
}

#language-switch {
	position: absolute;
	top: 0.25rem;
	right: 0.75rem;
}

header {
	position: relative !important;
	grid-column: span 2 / span 2;
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: min-content min-content 1fr;
	padding: 0 !important;
	column-gap: 6mm;
	background: var(--header-bg);

	& > * {
		grid-column: 2 / span 1;
		z-index: 2;
	}

	&::after {
		pointer-events: none;
		position: absolute;
		content: '';
		background: var(--image-bg);
		width: 100%;
		height: calc(100% * sqrt(2));
		left: 0;
		transform: translate(calc(-50% - 2mm), -2mm) rotate(-45deg);
		transform-origin: 50% 0;
		z-index: 1;
	}

	h1 {
		margin-block: 4mm 0.5rem;
		font-size: 2rem;
		line-height: 1;
		font-weight: 700;
		letter-spacing: 0.025em;
		white-space: nowrap;
	}

	p {
		padding-inline-end: 3mm;
	}

	p + p {
		text-indent: 1rem;
	}
}

#cv-image-container {
	aspect-ratio: 1;
	height: 100%;
	overflow: hidden;
	position: relative;
	grid-column: 1 / span 1;
	grid-row: 1 / -1;
	clip-path: polygon(2mm 2mm, 55mm 2mm, 55mm 85%, 85% 55mm, 2mm 55mm);

	img {
		position: absolute;
		object-fit: cover;
	}
}

#header-email {
	font-size: 1.25rem;
	margin-inline-start: 0.5rem;
	color: var(--accent);
}

aside {
	position: relative;
	grid-row: 2 / -1;
	padding-inline: 2mm;
	padding-block: 2mm;

	& > * {
		z-index: 2;
		position: relative;
	}

	&::before {
		pointer-events: none;
		position: absolute;
		content: '';
		width: 100%;
		height: 110%;
		bottom: calc(-2mm - (0.625rem * 3 * 1.1));
		left: 0;
		background: var(--aside-bg);
		z-index: 0;
	}

	#contact-list {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-auto-rows: min-content;
		column-gap: 0.4em;
		row-gap: 0.25em;
		margin-block-end: 0.5rem;

		li {
			display: grid;
			grid-column: span 2 / span 2;
			grid-template-columns: subgrid;
			align-items: center;
			white-space: nowrap;
		}
	}

	#contact-title {
		margin-block: 0.5rem;
	}

	#lang-list {
		margin-block-start: 0.5rem;

		li {
			display: flex;
			justify-content: space-between;

			span {
				font-weight: 500;
			}
		}
	}
}

main {
	width: 100%;
	grid-column: 2 / span 1;
	padding-inline: 3mm;
	padding-block: 3.5mm;

	section + section {
		margin-block-start: 1.25rem;
	}
}

#section-experience ul > li,
#section-skills li {
	list-style-type: disc;
	margin-left: 1.125rem;
}

#section-experience ul > li,
#section-skills li,
#section-technologies li {
	line-height: 1.4;
}

#section-experience ul > li + li,
#section-skills li + li,
#section-technologies li + li {
	margin-block-start: 0.2rem;
}

h1 {
	font-size: 1.375rem;
	font-weight: 700;
	margin-block-end: 0.2rem;
}

#section-experience {
	h1 {
		font-size: 0.875rem;
		font-weight: 700;
		text-transform: uppercase;
		line-height: 1;
		letter-spacing: 0.025em;
		color: var(--accent);
		margin-block-end: 0.125rem;
	}

	h2 {
		font-size: 1.375rem;
		font-weight: 700;
		margin-block-end: 0.1rem;

		span {
			font-weight: 400;
			color: var(--accent);
		}
	}

	ol > li + li {
		margin-top: 0.25rem;
	}
}

#section-technologies {
	& > p:last-child {
		margin-block-start: 1rem;
	}
}

footer {
	grid-column: 1 / span 2;
	font-size: 0.625rem;
	color: hsl(0 0% 30%);
	padding-bottom: 2mm;
	padding-inline: 3mm;
	z-index: 2;
	line-height: 1.1;
	text-align: justify;
}

@media print {
	body::after {
		display: none;
	}

	#language-switch {
		display: none !important;
	}
}
</style>
