<script setup lang="ts">
definePageMeta({ layout: 'empty' });

let linkElement: HTMLLinkElement;

const { t } = useI18n({ useScope: 'local' });

onMounted(() => {
	linkElement = Object.assign(document.createElement('link'), { rel: 'stylesheet', href: '/cv.css' });
	document.head.appendChild(linkElement);

	document.getElementById('header-email')?.append(
		[115, 116, 97, 110, 105, 115, 108, 97, 119, 46, 112, 101, 114, 101, 107, 46, 117, 105, 64, 103, 109, 97, 105, 108, 46, 99, 111, 109].map(code => String.fromCharCode(code)).join(''),
	);
	document.getElementById('contact-phone')?.append(
		[54, 54, 55, 32, 49, 53, 56, 32, 55, 55, 50].map(code => String.fromCharCode(code)).join(''),
	);
});

onBeforeUnmount(() => {
	linkElement.remove();
});
</script>

<template>
	<div id="cv-wrapper">
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
					<Icon size="1.25em" mode="svg" name="ph:globe-simple" /> asasinmode.com
				</li>
				<li id="contact-phone">
					<span class="sr-only">numer telefonu</span>
					<Icon size="1.25em" mode="svg" name="ph:phone-fill" />
				</li>
				<li>
					<span class="sr-only">lokalizacja:</span>
					<Icon size="1.25em" mode="svg" name="ph:map-pin-fill" /> {{ t('location') }}
				</li>
				<li>
					<span class="sr-only">github</span>
					<Icon size="1.25em" mode="svg" name="logos:github-icon" /> github.com/asasinmode
				</li>
			</ul>
			<hr>
			<p id="contact-title">
				{{ t('technikZsl') }}
			</p>
			<hr>
			<ul id="lang-list">
				<li v-if="$i18n.locale === 'en'">
					polish <span>native</span>
				</li>
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
						<h2>Mid web developer @ RemoteCraftsmen <span>2022-2025</span></h2>
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
								<template #jest>
									<strong>jest</strong>
								</template>
								<template #vitest>
									<strong>vitest</strong>
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
							<I18nT tag="li" keypath="rmtDev6">
								<template #fullstack>
									<strong>Fullstack</strong>
								</template>
								<template #restApi>
									<strong>REST api</strong>
								</template>
								<template #multitenancy>
									<strong>{{ t('multitenancy') }}</strong>
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
					<template #orm>
						<strong>ORM</strong>
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

		<footer><p>{{ t('footer') }}</p></footer>
		<div />
	</div>
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
		"rmtDev2": "{progressiveEnhancement} istniejących projektów, w tym responsywność, {a11y}, {pwa} i testy ({jest}/{vitest})",
		"rmtDev3": "{performanceRefactor} istniejących projektów",
		"rmtDev4": "{toolsScripts} ułatwiające workflow",
		"rmtDev5": "{thirdPartyIntegration} takimi jak OAuth, Stripe, Twilio, Geolocalization",
		"rmtDev6": "{fullstack} w tym {restApi} i zarządzanie {multitenancy} bazą danych",
		"multitenancy": "multitenant",
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
		"technologiesNote": "Poza wyżej wspomnianymi radzę sobie z bazami danych {sql}/{mongoDB} (przez {orm} też) i umiem pracować z {dockerContainer}. Dodatkowo znam {lua} i {java}.",
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
		"freelancing1": "Contract work including personalized blog and a CMS for it",
		"freelancing2": "Video montage and editing",
		"rmtDev1": "Individual and as part of a team work on an ATS system, betting app, {saas} applications and {productPage}/{cms} for them",
		"rmtDev2": "{progressiveEnhancement} of existing projects including responsiveness, {a11y}, {pwa} and tests ({jest}/{vitest})",
		"rmtDev3": "{performanceRefactor} of old projects",
		"rmtDev4": "{toolsScripts} for easing the workflow",
		"rmtDev5": "{thirdPartyIntegration} like OAuth, Stripe, Twilio, Geolocalization",
		"rmtDev6": "{fullstack} including {restApi} and database management with {multitenancy}",
		"multitenancy": "multitenancy",
		"performanceRefactor": "Improving the performance and refactoring",
		"toolsScripts": "Developer tools and scripts",
		"thirdPartyIntegration": "Third party integrations",
		"skills": "Skills",
		"skills1": "Implementing {pixelPerfect} designs",
		"skills2": "Working both individually and on a team",
		"skills3": "Ability to lead a project and assign tasks",
		"skills4": "Fast learning and adoption of new technologies/programming languages",
		"technologies": "Technologies",
		"technologies1": "{0} - if it's a website, I can write it",
		"technologies2": "{0} - I'm using it basically since the beginning and can take advantage of most of its functionality",
		"technologies3": "{0} - I've worked with both for ~4 years now and know them like the back of my hand. When it comes to other frameworks I'm ok with using any but I find these 2 the most intuitive",
		"technologies4": "{0} - I have the most experience with node.js but I've checked out the other 2 and I don't see any issues with adopting them",
		"technologiesNote": "Besides the above I'm also familiar with {sql}/{mongoDB} (through an {orm} too) databases and can use {dockerContainer}. Additionally I know {lua} and {java}.",
		"dockerContainer": "docker containers",
		"footer": "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation)."
	}
}
</i18n>
