<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import * as Tabs from '$lib/components/shadcn/ui/tabs/index.js';
	import Copy from '@lucide/svelte/icons/copy';
	import Check from '@lucide/svelte/icons/check';
	import Search from '@lucide/svelte/icons/search';
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import CardImage from '$lib/components/custom/illustration/cardImage/CardImage.svelte';
	import { FEATURED_CARDS } from '$lib/content/cards.js';
	import { SITE } from '$lib/content/site.js';

	const HTML_SNIPPET = `<script src="https://cdn.tcvault.app/widget.js" async><\/script>
<card-vault-search
  shop="your-shop-slug"
  theme="dark"
  accent="#3A6FF1"
></card-vault-search>`;

	const WORDPRESS_SNIPPET = `[card_vault_search shop="your-shop-slug" theme="dark"]`;

	const SHOPIFY_SNIPPET = `<!-- In your Shopify theme: sections/card-vault.liquid -->
{{ 'https://cdn.tcvault.app/widget.js' | script_tag: defer: true }}
<card-vault-search shop="{{ shop.permanent_domain | split: '.' | first }}" theme="dark"></card-vault-search>`;

	let selectedFilter = $state('All sets');
	const FILTERS = ['All sets', 'Modern Horizons', 'LOTR', 'NM only', 'Mythic'];

	let searchTerm = $state('');

	const visibleCards = $derived(
		searchTerm.trim().length === 0
			? FEATURED_CARDS
			: FEATURED_CARDS.filter((card) =>
					card.name.toLowerCase().includes(searchTerm.toLowerCase())
				)
	);

	let copiedKey: string | null = $state(null);

	async function onCopy(key: string, snippet: string) {
		try {
			await navigator.clipboard.writeText(snippet);
			copiedKey = key;
			setTimeout(() => (copiedKey = null), 1800);
		} catch (error) {
			console.error('Clipboard copy failed', error);
		}
	}
</script>

<SeoHead
	title="Storefront widget"
	description="Embed your live Trading Card Vault inventory on your own website with one line of HTML. No marketplace skim, no redirect, no lost brand."
	path="/widget"
	ogEyebrow="Embeddable storefront"
	ogTitle="Your inventory, on your domain. One line of HTML."
/>

<PageHero
	eyebrow="Embeddable storefront"
	title="Your inventory, on your domain. One line of HTML."
	description="The <card-vault-search> web component drops into any website — Wix, Squarespace, Shopify, WordPress, or hand-rolled HTML — and gives your customers a modern buying experience on your URL, not TCGPlayer's."
/>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
	<div class="border-border/60 bg-card overflow-hidden rounded-3xl border shadow-xl">
		<div class="border-border/60 flex items-center gap-2 border-b px-4 py-3 text-xs">
			<div class="flex gap-1.5">
				<span class="size-2.5 rounded-full bg-rose-400/70"></span>
				<span class="size-2.5 rounded-full bg-amber-400/70"></span>
				<span class="size-2.5 rounded-full bg-emerald-400/70"></span>
			</div>
			<div class="bg-muted text-muted-foreground mx-auto rounded px-3 py-1 font-mono tracking-wider">
				manaleakgames.com/store
			</div>
		</div>

		<div class="grid gap-0 lg:grid-cols-[260px_1fr]">
			<aside class="border-border/60 bg-background/40 border-r p-6">
				<h2 class="text-muted-foreground text-xs font-semibold tracking-widest uppercase">
					Filters
				</h2>
				<div class="mt-4 space-y-1.5">
					{#each FILTERS as filter (filter)}
						<button
							type="button"
							onclick={() => (selectedFilter = filter)}
							class={`block w-full rounded-md px-3 py-1.5 text-left text-sm transition ${selectedFilter === filter ? 'bg-primary text-primary-foreground' : 'hover:bg-muted text-muted-foreground'}`}
						>
							{filter}
						</button>
					{/each}
				</div>

				<h2 class="text-muted-foreground mt-8 text-xs font-semibold tracking-widest uppercase">
					Condition
				</h2>
				<ul class="text-muted-foreground mt-3 space-y-2 text-sm">
					{#each ['NM', 'LP', 'MP', 'HP'] as condition (condition)}
						<li class="flex items-center gap-2">
							<span class="border-border size-3.5 rounded border"></span>
							{condition}
						</li>
					{/each}
				</ul>
			</aside>

			<div class="p-6 lg:p-8">
				<div class="relative">
					<Search class="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
					<input
						type="search"
						bind:value={searchTerm}
						placeholder="Search for a card, set, or artist…"
						class="border-border/60 bg-background focus-visible:ring-ring/60 w-full rounded-lg border py-2.5 pr-4 pl-10 text-sm outline-none focus-visible:ring-2"
					/>
				</div>

				<p class="text-muted-foreground mt-3 text-xs">
					{visibleCards.length} result{visibleCards.length === 1 ? '' : 's'} — live inventory refresh
				</p>

				<div class="mt-5 grid grid-cols-2 gap-4 md:grid-cols-3">
					{#each visibleCards as card (card.scryfallId)}
						<div class="border-border/60 bg-card group rounded-xl border p-3 transition hover:shadow-lg">
							<CardImage {card} size="small" class="shadow-none transition group-hover:scale-[1.02]" />
							<div class="mt-2.5">
								<div class="truncate text-sm font-medium">{card.name}</div>
								<div class="text-muted-foreground flex items-center justify-between text-xs">
									<span class="font-mono tracking-wider uppercase">{card.set} · {card.collectorNumber}</span>
									<span class="text-foreground font-semibold tabular-nums">${card.priceUsd}</span>
								</div>
								<button
									type="button"
									class="bg-primary text-primary-foreground mt-3 w-full rounded-md py-1.5 text-xs font-medium hover:bg-primary/90"
								>
									Add to cart
								</button>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<section id="customize" class="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 lg:px-8">
	<div class="grid gap-12 lg:grid-cols-2 lg:gap-16">
		<div>
			<p class="text-primary text-xs font-mono tracking-widest uppercase">Copy, paste, ship</p>
			<h2 class="mt-2 text-3xl font-bold sm:text-4xl">Drop-in embed for every platform.</h2>
			<p class="text-muted-foreground mt-4 text-base">
				Pick the flavor that matches your stack. The widget bundle is under 60kb gzipped, loads
				async, and never blocks your page.
			</p>

			<ul class="text-muted-foreground mt-6 space-y-3 text-sm">
				{#each [
					'Themeable — match your brand colors and fonts',
					'Accessible — WCAG AA keyboard and screen-reader support',
					'Searchable — full-text with set, rarity, condition, foil, and language filters',
					'Cart-aware — persists across pages, checks out on your domain'
				] as point (point)}
					<li class="flex gap-3">
						<Check class="text-primary mt-0.5 size-4 shrink-0" />
						<span>{point}</span>
					</li>
				{/each}
			</ul>
		</div>

		<div>
			<Tabs.Root value="html">
				<Tabs.List class="mb-3">
					<Tabs.Trigger value="html">HTML</Tabs.Trigger>
					<Tabs.Trigger value="wordpress">WordPress</Tabs.Trigger>
					<Tabs.Trigger value="shopify">Shopify</Tabs.Trigger>
				</Tabs.List>

				{#each [
					{ key: 'html', label: 'index.html', code: HTML_SNIPPET },
					{ key: 'wordpress', label: 'page.php', code: WORDPRESS_SNIPPET },
					{ key: 'shopify', label: 'card-vault.liquid', code: SHOPIFY_SNIPPET }
				] as tab (tab.key)}
					<Tabs.Content value={tab.key}>
						<div class="border-border/70 bg-background overflow-hidden rounded-xl border">
							<div class="border-border/70 text-muted-foreground flex items-center justify-between border-b px-4 py-2 text-[11px] font-mono tracking-wider uppercase">
								<span>{tab.label}</span>
								<button
									type="button"
									onclick={() => onCopy(tab.key, tab.code)}
									class="hover:text-foreground inline-flex items-center gap-1.5 transition"
								>
									{#if copiedKey === tab.key}
										<Check class="size-3.5" />
										Copied
									{:else}
										<Copy class="size-3.5" />
										Copy
									{/if}
								</button>
							</div>
							<pre class="overflow-x-auto p-4 text-xs leading-relaxed"><code>{tab.code}</code></pre>
						</div>
					</Tabs.Content>
				{/each}
			</Tabs.Root>
		</div>
	</div>
</section>

<section class="bg-card/40 border-border/60 border-y">
	<div class="mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
		<div class="text-center">
			<p class="text-gold text-xs font-mono tracking-widest uppercase">Compared to the marketplaces</p>
			<h2 class="mt-2 text-3xl font-bold sm:text-4xl">
				Why give customers a better buying experience than TCGPlayer?
			</h2>
		</div>

		<div class="mt-10 overflow-hidden rounded-2xl border border-border/60">
			<table class="w-full text-left text-sm">
				<thead class="bg-muted/60 text-xs tracking-widest uppercase">
					<tr>
						<th class="px-6 py-3">What the customer sees</th>
						<th class="px-6 py-3">TCGPlayer storefront</th>
						<th class="text-primary px-6 py-3">&lt;card-vault-search&gt;</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ q: 'Your URL', tcg: "No. You're tcgplayer.com/store/your-shop.", tcv: 'Yes. yourshop.com/anywhere.' },
						{ q: 'Your brand', tcg: 'One of a thousand shops on a marketplace page.', tcv: 'Your fonts, your colors, your photography.' },
						{ q: 'Your margin', tcg: 'Marketplace fee per sale.', tcv: 'Flat subscription. 0% transaction fee.' },
						{ q: 'Your relationship with the customer', tcg: 'Marketplace owns the receipt.', tcv: 'Customer buys from you directly.' }
					] as row, rowIndex (row.q)}
						<tr class={rowIndex > 0 ? 'border-border/60 border-t' : ''}>
							<th scope="row" class="px-6 py-4 text-left font-medium">{row.q}</th>
							<td class="text-muted-foreground px-6 py-4">{row.tcg}</td>
							<td class="px-6 py-4">{row.tcv}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="mt-10 text-center">
			<Button size="lg" href={SITE.app.signUpUrl}>Try the widget on your shop</Button>
		</div>
	</div>
</section>

<CtaBand />
