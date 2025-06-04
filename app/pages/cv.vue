<script setup lang="ts">
useHead({ link: [{ rel: 'stylesheet', href: '/cv.css' }] });
definePageMeta({ layout: 'empty' });

const { t } = useI18n({ useScope: 'local' });

onMounted(() => {
	document.getElementById('contact-email')?.append(
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
		<h1>Stanisław Perek</h1>
		<I18nT tag="p" keypath="header1">
			<b style="font-weight: 500">{{ t('headerMe') }}</b>
		</I18nT>
		<I18nT tag="p" keypath="header2">
			<strong>a11y</strong>
		</I18nT>
	</header>

	<aside>
		<h1>{{ t('contact') }}</h1>
		<ul>
			<li id="contact-email">
				<span class="sr-only">email</span>
				<Icon size="1.5em" name="ph:envelope-simple" />
			</li>
			<li>
				<span class="sr-only">strona</span>
				<Icon size="1.5em" name="ph:globe-simple" /> asasinmode.com
			</li>
			<li>
				<span class="sr-only">github</span>
				<Icon size="1.5em" name="logos:github-icon" /> github.com/asasinmode
			</li>
			<li id="contact-phone">
				<span class="sr-only">numer telefonu</span>
				<Icon size="1.5em" name="ph:phone-fill" />
			</li>
			<li>
				<span class="sr-only">lokalizacja:</span>
				<Icon size="1.5em" name="ph:map-pin-fill" /> {{ t('location') }}
			</li>
		</ul>
		<hr>
		<p>technik informatyk (ZSŁ)</p>
		<hr>
		<p>angielski <span>c2</span></p>
		<p>mandaryński <span>wip</span></p>
	</aside>

	<main>
		<section>
			<h1>{{ t('experience') }}</h1>
			<ol>
				<li>
					<h2>Freelancing 2020-2022</h2>
					<ul>
						<li>Praca na zlecenie, w tym spersonalizowany blog i CMS do zarządzania nim</li>
						<li>Montaż oraz edytowanie filmów</li>
					</ul>
				</li>
				<li>
					<h2>JUNIOR/MID DEVELOPER @ RemoteCraftsmen 2022-2025</h2>
					<ul>
						<li>
							Praca samodzielna oraz w zespole nad systemem ATS, aplikacją do
							obstawiania, SAAS-ami oraz <strong>product page</strong> i <strong>CMS</strong>-ami do nich
						</li>
						<li>
							<strong>Progressive enhancement</strong> istniejących projektów o responsywność, a11y i <strong>PWA</strong>
						</li>
						<li><strong>Poprawianie wydajności i refactor</strong> istniejących projektów</li>
						<li><strong>Narzędzia/skrypty dla deweloperów</strong> ułatwiające workflow</li>
						<li><strong>Integracja z 3rd-party serwisami</strong> takimi jak OAuth, Stripe, Twilio, Geolocalization</li>
					</ul>
				</li>
			</ol>
		</section>

		<section>
			<h1>{{ t('skills') }}</h1>
			<ul>
				<li>Implementowanie <strong>pixel perfect</strong> designów</li>
				<li>Umiejętność pracy samemu i w zespole</li>
				<li>Zdolność kierowania projektem i dzielenia obowiązków</li>
				<li>Szybkie przyswajanie nowych technologii/języków programowania</li>
			</ul>
		</section>

		<section>
			<h1>{{ t('technologies') }}</h1>
			<ul>
				<li><strong>html/css/javascript</strong> - jeśli to strona internetowa to mogę ją napisać</li>
				<li><strong>typescript</strong> - używam praktycznie od początku i potrafię wykorzystać większość jego funkcjonalności</li>
				<li><strong>vue/nuxt</strong> - pracuję z obydwoma od ~4 lat i znam je jak własną dłoń. Jeśli chodzi o inne frameworki to jestem gotów użyć każdego ale najbardziej intuicyjnymi znajduję te dwa</li>
				<li><strong>node.js/deno/bun</strong> - największe doświadczenie mam w używaniu node.js ale sprawdzałem też pozostałe 2 i nie widzę przeszkód w przerzuceniu się na nie</li>
			</ul>
			<p>
				Poza wyżej wspomnianymi radzę sobie z bazami danych <strong>SQL</strong>/<strong>MongoDB</strong> i umiem
				pracować z <strong>docker kontenerami</strong>. Znam też <strong>Lua</strong> i <strong>Java</strong>.
			</p>
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
		"contact": "Kontakt",
		"location": "Kraków, 31-261",
		"experience": "Doświadczenie",
		"skills": "Umiejętności",
		"technologies": "Technologie",
		"footer": "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO)."
	},
	"en": {
		"headerMe": "IT technician, programmer, fullstack web developer",
		"header1": "{0}. I've been working on practical websites and webapps for 5 years.",
		"header2": "I'm comfortable both on the front and backend but I prefer frontend. I strive to make my projects responsive and accessible ({0}) and try to pay attention to the smallest details.",
		"contact": "Contact",
		"location": "Cracow, 31-261",
		"experience": "Experience",
		"footer": "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
	}
}
</i18n>

<style>
:root {
	--image-bg: #5f7161;
	--header-bg: #6d8b74;
	--aside-bg: #efead8;
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

	h1 {
		margin-block: 4mm 0.5rem;
		font-size: 2rem;
		line-height: 1;
		font-weight: 700;
		letter-spacing: 0.025em;
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

aside {
	position: relative;
	grid-row: 2 / -1;
	padding-inline: 2mm;

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
		left: 0;
		background: var(--aside-bg);
		z-index: 0;
	}

	ul {
		display: grid;
		grid-template-columns: min-content 1fr;
		grid-auto-rows: min-content;
		column-gap: 0.4em;
		row-gap: 0.25em;

		li {
			display: grid;
			grid-column: span 2 / span 2;
			grid-template-columns: subgrid;
			align-items: center;
		}
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
	body::after {
		display: none;
	}

	#language-switch {
		display: none !important;
	}
}
</style>
