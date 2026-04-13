<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import Check from '@lucide/svelte/icons/check';
	import Minus from '@lucide/svelte/icons/minus';
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import FaqSection from '$lib/components/custom/section/faqSection/FaqSection.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import { cn } from '$lib/utils/utils.js';
	import { PRICING_TIERS, PRICING_FAQS } from '$lib/content/pricing.js';
	import { SITE } from '$lib/content/site.js';

	interface ComparisonRow {
		label: string;
		values: [string | boolean, string | boolean, string | boolean];
	}

	const COMPARISON: { section: string; rows: ComparisonRow[] }[] = [
		{
			section: 'Inventory',
			rows: [
				{ label: 'Shops', values: ['1', '5', 'Unlimited'] },
				{ label: 'Cards in inventory', values: ['5,000', 'Unlimited', 'Unlimited'] },
				{ label: 'Storage locations per shop', values: ['Unlimited', 'Unlimited', 'Unlimited'] },
				{ label: 'Bulk CSV import / export', values: [true, true, true] }
			]
		},
		{
			section: 'Scanning & pricing',
			rows: [
				{ label: 'Manual card entry', values: [true, true, true] },
				{ label: 'Scryfall live pricing', values: [true, true, true] },
				{ label: 'AI card scanner (Claude vision)', values: [false, true, true] },
				{ label: 'Custom price overrides', values: [true, true, true] }
			]
		},
		{
			section: 'Storefront widget',
			rows: [
				{ label: 'Embeddable <card-vault-search>', values: [false, true, true] },
				{ label: 'Custom branding', values: [false, true, true] },
				{ label: 'Guest checkout', values: [false, true, true] }
			]
		},
		{
			section: 'Team & access',
			rows: [
				{ label: 'User roles (Owner / Admin / Member)', values: [true, true, true] },
				{ label: 'Email verification', values: [true, true, true] },
				{ label: 'SSO (SAML / Okta / Google Workspace)', values: [false, false, true] },
				{ label: 'Audit log', values: [false, false, true] }
			]
		},
		{
			section: 'Support',
			rows: [
				{ label: 'Community email', values: [true, false, false] },
				{ label: 'Priority email (<24h)', values: [false, true, true] },
				{ label: 'Dedicated CSM', values: [false, false, true] },
				{ label: 'API access + webhooks', values: [false, false, true] }
			]
		}
	];

	const productSchemas = PRICING_TIERS.map((tier) => ({
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: `${SITE.name} — ${tier.name}`,
		description: tier.description,
		offers: {
			'@type': 'Offer',
			price: tier.price === 'Custom' ? undefined : tier.price.replace('$', ''),
			priceCurrency: tier.price === 'Custom' ? undefined : 'USD',
			availability: 'https://schema.org/InStock'
		}
	}));
</script>

<SeoHead
	title="Pricing"
	description="Simple, flat pricing for local game shops. Starter, Pro, or Enterprise — no transaction fees, no skim."
	path="/pricing"
	jsonLd={productSchemas}
/>

<PageHero
	eyebrow="Pricing"
	title="Flat pricing. No transaction fees."
	description="Pick the tier that matches your shop today. Upgrade in a click when you open the second location. We never take a cut of your sales."
/>

<section class="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
	<div class="grid gap-6 lg:grid-cols-3">
		{#each PRICING_TIERS as tier (tier.id)}
			<div
				class={cn(
					'border-border/60 bg-card relative flex flex-col rounded-2xl border p-8 shadow-sm',
					tier.featured && 'border-primary ring-primary/40 shadow-xl ring-2'
				)}
			>
				{#if tier.featured}
					<div
						class="bg-primary text-primary-foreground absolute -top-3 right-6 rounded-full px-3 py-0.5 text-[10px] font-semibold tracking-wider uppercase"
					>
						Most popular
					</div>
				{/if}
				<h2 class="text-xl font-semibold">{tier.name}</h2>
				<p class="text-muted-foreground mt-1 text-sm">{tier.tagline}</p>
				<div class="mt-6 flex items-baseline gap-1">
					<span class="text-4xl font-bold tabular-nums">{tier.price}</span>
					{#if tier.priceSuffix}
						<span class="text-muted-foreground text-sm">{tier.priceSuffix}</span>
					{/if}
				</div>
				<p class="text-muted-foreground mt-4 text-sm">{tier.description}</p>

				<ul class="mt-6 flex-1 space-y-2.5">
					{#each tier.features as feature (feature)}
						<li class="flex gap-2 text-sm">
							<Check class="text-primary mt-0.5 size-4 shrink-0" />
							<span>{feature}</span>
						</li>
					{/each}
				</ul>

				<div class="mt-8">
					<Button class="w-full" variant={tier.featured ? 'default' : 'outline'} href={tier.ctaHref}>
						{tier.ctaLabel}
					</Button>
				</div>
			</div>
		{/each}
	</div>

	<p class="text-muted-foreground mt-6 text-center text-xs">
		All plans include a 14-day free trial. Prices in USD. Pricing subject to change.
	</p>
</section>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
	<div class="mx-auto mb-10 max-w-2xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Compare every feature.</h2>
		<p class="text-muted-foreground mt-3">
			What you get in each tier, line by line.
		</p>
	</div>

	<div class="border-border/60 overflow-hidden rounded-2xl border">
		<table class="w-full text-left text-sm">
			<thead class="bg-muted/60">
				<tr>
					<th scope="col" class="w-2/5 px-6 py-4 text-xs font-semibold tracking-wider uppercase">
						Feature
					</th>
					{#each PRICING_TIERS as tier (tier.id)}
						<th
							scope="col"
							class={cn(
								'w-1/5 px-4 py-4 text-xs font-semibold tracking-wider uppercase',
								tier.featured && 'text-primary'
							)}
						>
							{tier.name}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody>
				{#each COMPARISON as group (group.section)}
					<tr class="bg-card/70">
						<th
							scope="rowgroup"
							colspan={PRICING_TIERS.length + 1}
							class="text-muted-foreground px-6 pt-5 pb-2 text-left text-[11px] font-semibold tracking-widest uppercase"
						>
							{group.section}
						</th>
					</tr>
					{#each group.rows as row (row.label)}
						<tr class="border-border/60 border-t">
							<th scope="row" class="px-6 py-3.5 text-left font-medium">{row.label}</th>
							{#each row.values as value, valueIndex (valueIndex)}
								<td class="px-4 py-3.5">
									{#if typeof value === 'boolean'}
										{#if value}
											<Check class="text-primary size-4" />
										{:else}
											<Minus class="text-muted-foreground/60 size-4" />
										{/if}
									{:else}
										<span class="text-foreground">{value}</span>
									{/if}
								</td>
							{/each}
						</tr>
					{/each}
				{/each}
			</tbody>
		</table>
	</div>
</section>

<FaqSection
	title="Billing, trials, and cancellations"
	subtitle="Practical answers to the boring questions."
	items={PRICING_FAQS}
/>

<CtaBand />
