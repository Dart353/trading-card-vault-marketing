<script lang="ts">
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import FeatureRow from '$lib/components/custom/section/featureRow/FeatureRow.svelte';
	import FaqSection from '$lib/components/custom/section/faqSection/FaqSection.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import FeatureIcon from '$lib/components/custom/icon/featureIcon/FeatureIcon.svelte';
	import { FEATURES } from '$lib/content/features.js';
	import { HOME_FAQS } from '$lib/content/faqs.js';

	interface FeatureGroup {
		id: string;
		label: string;
		description: string;
		slugs: string[];
	}

	interface ExtraCard {
		icon: 'scan' | 'store' | 'clipboardCheck';
		title: string;
		copy: string;
	}

	const EXTRA_CARDS: ExtraCard[] = [
		{
			icon: 'scan',
			title: 'Open to feedback',
			copy: 'Our roadmap is public and shaped by a working group of shop owners.'
		},
		{
			icon: 'store',
			title: 'Magic-first, TCG-ready',
			copy: 'The data model is TCG-agnostic. Pok\u00e9mon and Lorcana are in progress.'
		},
		{
			icon: 'clipboardCheck',
			title: 'Made in America',
			copy: 'A small team of Magic players and retail engineers building out of Minnesota.'
		}
	];

	const FEATURE_GROUPS: FeatureGroup[] = [
		{
			id: 'inventory',
			label: 'Inventory',
			description: 'The ledger of what you have, where it is, and what it is worth.',
			slugs: ['multi-shop-inventory', 'bulk-import', 'card-attributes', 'dashboard']
		},
		{
			id: 'scanning',
			label: 'Scanning & pricing',
			description: 'Get cards into the system fast, and keep their prices honest.',
			slugs: ['ai-card-scanner', 'scryfall-pricing', 'quick-add']
		},
		{
			id: 'widget',
			label: 'Storefront widget',
			description: 'A real online storefront on your domain — not someone else\u2019s marketplace.',
			slugs: ['storefront-widget']
		},
		{
			id: 'orders',
			label: 'Orders & fulfillment',
			description: 'From checkout to pick list to "ready for pickup" — built to match how shops actually work.',
			slugs: ['order-fulfillment']
		},
		{
			id: 'team',
			label: 'Team & security',
			description: 'Invite your staff, scope their access, and sleep better.',
			slugs: ['team-roles']
		}
	];

	function featuresBySlugs(slugs: string[]) {
		return slugs
			.map((slug) => FEATURES.find((feature) => feature.slug === slug))
			.filter((feature): feature is (typeof FEATURES)[number] => Boolean(feature));
	}
</script>

<SeoHead
	title="Every feature of Trading Card Vault"
	description="AI card scanning, live Scryfall pricing, multi-shop inventory, an embeddable storefront widget, order fulfillment, and team roles — all in one product built for local game shops."
	path="/features"
/>

<PageHero
	eyebrow="Product tour"
	title="Everything a modern LGS needs, in one product."
	description="No add-ons, no integrations to wire up, no upsells for basic features. Here is everything Trading Card Vault does — grouped the way a shop owner actually thinks about it."
/>

<nav class="border-border/60 border-b bg-card/40">
	<div class="mx-auto flex max-w-7xl flex-wrap gap-2 px-6 py-4 lg:px-8">
		{#each FEATURE_GROUPS as group (group.id)}
			<a
				href={`#${group.id}`}
				class="text-muted-foreground hover:text-foreground hover:bg-muted rounded-full px-3 py-1.5 text-xs font-medium tracking-wide transition"
			>
				{group.label}
			</a>
		{/each}
	</div>
</nav>

<div class="mx-auto max-w-7xl space-y-24 px-6 py-20 lg:px-8 lg:py-28">
	{#each FEATURE_GROUPS as group, groupIndex (group.id)}
		<section id={group.id} class="scroll-mt-24 space-y-16">
			<div class="flex flex-col gap-3">
				<p class="text-primary text-xs font-mono tracking-widest uppercase">
					{String(groupIndex + 1).padStart(2, '0')} / {group.slugs.length} feature{group.slugs.length === 1 ? '' : 's'}
				</p>
				<h2 class="text-3xl font-bold sm:text-4xl">{group.label}</h2>
				<p class="text-muted-foreground max-w-2xl">{group.description}</p>
			</div>

			<div class="space-y-24">
				{#each featuresBySlugs(group.slugs) as feature, featureIndex (feature.slug)}
					<FeatureRow
						{feature}
						index={featureIndex}
						reverse={featureIndex % 2 === 1}
					/>
				{/each}
			</div>
		</section>
	{/each}
</div>

<section class="bg-card/30 border-border/60 border-y">
	<div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold sm:text-4xl">Still need something we do not list?</h2>
			<p class="text-muted-foreground mt-4">
				We ship based on what shop owners tell us they need. Write in — real humans read every
				email.
			</p>
		</div>
		<div class="mt-10 grid gap-6 md:grid-cols-3">
			{#each EXTRA_CARDS as card (card.title)}
				<div class="border-border/60 bg-card rounded-2xl border p-6">
					<FeatureIcon name={card.icon} />
					<h3 class="mt-4 font-semibold">{card.title}</h3>
					<p class="text-muted-foreground mt-1.5 text-sm">{card.copy}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<FaqSection items={HOME_FAQS.slice(0, 6)} />
<CtaBand />
