<script setup lang="ts">
useHead({ link: [{ rel: 'stylesheet', href: '/cv.css' }] });
definePageMeta({ layout: 'empty' });

const { t } = useI18n({ useScope: 'local' });
</script>

<template>
	<header>
		<div id="cv-image-container">
			<img :src="$config.public.cvImage" crossorigin="anonymous">
		</div>
		<h1>Stanisław Perek</h1>
		<p>{{ t('header1') }}</p>
		<I18nT tag="p" keypath="header2">
			<strong>a11y</strong>
		</I18nT>
	</header>

	<aside>
		<h3>{{ t('contact') }}</h3>
	</aside>

	<main>
		<h3>{{ t('experience') }}</h3>
	</main>

	<footer>{{ t('footer') }}</footer>
</template>

<i18n lang="json">
{
	"pl": {
		"header1": "Technik informatyk i fullstack web developer. Od 4 lat zajmuję się tworzeniem praktycznych stron internetowych i aplikacji webowych.",
		"header2": "Odnajduję się zarówno we front jak i back-endzie, jednak preferuję frontend. Przykładam dużą uwagę do responsywności i dostępności ({0}) moich projektów.",
		"contact": "Kontakt",
		"experience": "Doświadczenie",
		"footer": "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)."
	},
	"en": {
		"header1": "Technik informatyk i fullstack web developer. Od 4 lat zajmuję się tworzeniem praktycznych stron internetowych i aplikacji webowych.",
		"header2": "Odnajduję się zarówno we front jak i back-endzie, jednak preferuję frontend. Przykładam dużą uwagę do responsywności i dostępności ({0}) moich projektów.",
		"contact": "Contact",
		"experience": "Experience",
		"footer": "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
	}
}
</i18n>

<style>
:root {
	--image-bg: #f4ce14;
	--header-bg: #495e57;
	--aside-bg: #45474b;
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

header {
	position: relative !important;
	grid-column: span 2 / span 2;
	display: grid;
	grid-template-columns: subgrid;
	grid-template-rows: min-content min-content 1fr;
	padding: 0 6mm 0 0 !important;
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
		transform: scale(1.45) translate(1%, -10%);
	}
}

aside {
	position: relative;
	grid-row: 2 / -1;

	& > * {
		z-index: 2;
		position: relative;
	}

	&::before {
		pointer-events: none;
		position: absolute;
		content: '';
		width: 100%;
		height: 120%;
		top: -10mm;
		background: var(--aside-bg);
		z-index: 0;
	}
}

main {
	width: 100%;
	grid-column: 2 / span 1;
}

footer {
	grid-column: 1 / span 2;
	font-size: 10px;
	color: #101010;
	padding-bottom: 2mm;
	padding-inline: 3mm;
	z-index: 2;
}

@media print {
	#language-switch {
		display: none !important;
	}
}
</style>
