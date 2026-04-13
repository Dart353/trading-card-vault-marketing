<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import * as Tabs from '$lib/components/shadcn/ui/tabs/index.js';
	import Copy from '@lucide/svelte/icons/copy';
	import Check from '@lucide/svelte/icons/check';
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import { SITE } from '$lib/content/site.js';

	const WIDGET_SCRIPT_URL = 'https://admin.tcvault.app/widget/card-vault-widget.js';
	// TODO: This is a public demo key. Confirm it is scoped to read-only
	// public-catalog endpoints and is rotatable before launch — it will be
	// indexed in search-engine caches.
	const WIDGET_API_KEY = '721f98c31023d4c279f38d4cb3f8e9e5eeee1d70c8fff991c5ce6639bf57fa45';
	const WIDGET_MARKUP = `<card-vault-search api-key="${WIDGET_API_KEY}"></card-vault-search>`;

	let isWidgetReady = $state(false);

	onMount(() => {
		if (typeof customElements !== 'undefined' && customElements.get('card-vault-search')) {
			isWidgetReady = true;
			return;
		}

		const existing = document.querySelector(`script[src="${WIDGET_SCRIPT_URL}"]`);
		if (existing) {
			waitForDefinition();
			return;
		}

		const script = document.createElement('script');
		script.src = WIDGET_SCRIPT_URL;
		script.async = true;
		script.onload = waitForDefinition;
		script.onerror = () => {
			console.error('[card-vault-widget] Failed to load widget script');
		};
		document.head.appendChild(script);
	});

	function waitForDefinition() {
		if (typeof customElements === 'undefined') return;
		customElements.whenDefined('card-vault-search').then(() => {
			isWidgetReady = true;
		});
	}

	const HTML_SNIPPET = `<script src="${WIDGET_SCRIPT_URL}"><\/script>
<card-vault-search api-key="${WIDGET_API_KEY}"></card-vault-search>`;

	const WORDPRESS_SNIPPET = `[card_vault_search api-key="${WIDGET_API_KEY}"]`;

	const SHOPIFY_SNIPPET = `<!-- In your Shopify theme: sections/card-vault.liquid -->
{{ '${WIDGET_SCRIPT_URL}' | script_tag }}
<card-vault-search api-key="${WIDGET_API_KEY}"></card-vault-search>`;

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
	<div class="border-border/60 bg-card relative overflow-hidden rounded-3xl border shadow-xl">
		<div class="border-border/60 flex items-center gap-2 border-b px-4 py-3 text-xs">
			<div class="flex gap-1.5">
				<span class="size-2.5 rounded-full bg-rose-400/70"></span>
				<span class="size-2.5 rounded-full bg-amber-400/70"></span>
				<span class="size-2.5 rounded-full bg-emerald-400/70"></span>
			</div>
			<div
				class="bg-muted text-muted-foreground mx-auto rounded px-3 py-1 font-mono tracking-wider"
			>
				yourshop.com/store
			</div>
		</div>

		<!--
			Live <card-vault-search> web component. The script is injected on
			mount; until customElements upgrades it, we render a small loader
			so the page does not look broken.
		-->
		<div class="relative min-h-[520px] p-4 sm:p-6 lg:p-8">
			{#if !isWidgetReady}
				<div
					class="text-muted-foreground absolute inset-0 flex flex-col items-center justify-center gap-3 text-sm"
				>
					<div
						class="border-primary/60 size-6 animate-spin rounded-full border-2 border-t-transparent"
					></div>
					<span>Loading live storefront…</span>
				</div>
			{/if}
			{@html WIDGET_MARKUP}
		</div>
	</div>

	<p class="text-muted-foreground mt-3 text-center text-xs">
		Live inventory served by Trading Card Vault — this is the same widget you embed on your shop's
		site.
	</p>
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
