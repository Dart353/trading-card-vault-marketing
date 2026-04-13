<script lang="ts">
	import Hero from '$lib/components/custom/section/hero/Hero.svelte';
	import SocialProof from '$lib/components/custom/section/socialProof/SocialProof.svelte';
	import ValueProps from '$lib/components/custom/section/valueProps/ValueProps.svelte';
	import FeatureRow from '$lib/components/custom/section/featureRow/FeatureRow.svelte';
	import WidgetPreview from '$lib/components/custom/section/widgetPreview/WidgetPreview.svelte';
	import Testimonials from '$lib/components/custom/section/testimonials/Testimonials.svelte';
	import PricingTeaser from '$lib/components/custom/section/pricingTeaser/PricingTeaser.svelte';
	import FaqSection from '$lib/components/custom/section/faqSection/FaqSection.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import { FEATURES } from '$lib/content/features.js';
	import { HOME_FAQS } from '$lib/content/faqs.js';
	import { SITE } from '$lib/content/site.js';

	const homeFeatures = FEATURES.filter((feature) =>
		[
			'ai-card-scanner',
			'scryfall-pricing',
			'multi-shop-inventory',
			'storefront-widget',
			'order-fulfillment',
			'team-roles'
		].includes(feature.slug)
	);

	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: SITE.name,
		url: SITE.url,
		description: SITE.description,
		email: SITE.email,
		sameAs: [SITE.social.twitter, SITE.social.linkedin].filter(Boolean)
	};

	const softwareSchema = {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: SITE.name,
		applicationCategory: 'BusinessApplication',
		operatingSystem: 'Web',
		description: SITE.description,
		offers: {
			'@type': 'Offer',
			price: '29',
			priceCurrency: 'USD'
		}
	};

	const faqSchema = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: HOME_FAQS.map((item) => ({
			'@type': 'Question',
			name: item.question,
			acceptedAnswer: {
				'@type': 'Answer',
				text: item.answer
			}
		}))
	};
</script>

<SeoHead
	title={`${SITE.name} — ${SITE.tagline}`}
	description={SITE.description}
	path="/"
	jsonLd={[organizationSchema, softwareSchema, faqSchema]}
/>

<Hero />
<SocialProof />
<ValueProps />

<section class="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-2xl text-center">
		<p class="text-primary text-xs font-mono tracking-widest uppercase">What you get</p>
		<h2 class="mt-2 text-3xl font-bold sm:text-4xl">Every tool a modern LGS actually needs.</h2>
		<p class="text-muted-foreground mt-4 text-base">
			Not a generic inventory app with a card-themed skin. Every surface is built around how shop
			owners and their staff actually spend their time.
		</p>
	</div>

	{#each homeFeatures as feature, featureIndex (feature.slug)}
		<FeatureRow {feature} index={featureIndex} reverse={featureIndex % 2 === 1} />
	{/each}
</section>

<WidgetPreview />
<Testimonials />
<PricingTeaser />
<FaqSection items={HOME_FAQS} />
<CtaBand />
