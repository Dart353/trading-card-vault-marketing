<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import Copy from '@lucide/svelte/icons/copy';
	import Check from '@lucide/svelte/icons/check';
	import CardImage from '$lib/components/custom/illustration/cardImage/CardImage.svelte';
	import { FEATURED_CARDS } from '$lib/content/cards.js';

	const SNIPPET = `<!-- Embed these two lines on any page of your shop's website -->
<script src="https://admin.tcvault.app/widget/card-vault-widget.js"><\/script>
<card-vault-search api-key="721f98c31023d4c279f38d4cb3f8e9e5eeee1d70c8fff991c5ce6639bf57fa45"></card-vault-search>`;

	let isCopied = $state(false);

	async function onCopy() {
		try {
			await navigator.clipboard.writeText(SNIPPET);
			isCopied = true;
			setTimeout(() => (isCopied = false), 1800);
		} catch (error) {
			console.error('Clipboard copy failed', error);
		}
	}
</script>

<section class="border-border/60 overflow-hidden border-y bg-card/40">
	<div class="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
		<div class="min-w-0">
			<p class="text-gold text-xs font-mono tracking-widest uppercase">Embeddable storefront</p>
			<h2 class="mt-2 text-3xl font-bold sm:text-4xl">
				One line of HTML. Your inventory, on your domain.
			</h2>
			<p class="text-muted-foreground mt-4 text-base">
				The <code class="text-foreground bg-muted rounded px-1.5 py-0.5 text-sm">&lt;card-vault-search&gt;</code>
				web component embeds your live inventory into any site — Wix, Squarespace, Shopify, WordPress,
				or hand-rolled HTML. Customers browse, filter, add to cart, and check out without ever leaving
				your URL.
			</p>

			<div class="border-border/70 bg-background mt-8 overflow-hidden rounded-xl border">
				<div class="border-border/70 text-muted-foreground flex items-center justify-between border-b px-4 py-2 text-[11px] font-mono tracking-wider uppercase">
					<span>index.html</span>
					<button
						type="button"
						onclick={onCopy}
						class="hover:text-foreground inline-flex items-center gap-1.5 transition"
					>
						{#if isCopied}
							<Check class="size-3.5" />
							Copied
						{:else}
							<Copy class="size-3.5" />
							Copy
						{/if}
					</button>
				</div>
				<pre class="overflow-x-auto p-4 text-xs leading-relaxed"><code>{SNIPPET}</code></pre>
			</div>

			<div class="mt-6 flex flex-wrap gap-3">
				<Button href="/widget" variant="default">See the widget in action</Button>
				<Button href="/widget#customize" variant="ghost">Customize</Button>
			</div>
		</div>

		<!-- Mock widget preview -->
		<div class="border-border/60 bg-background min-w-0 overflow-hidden rounded-2xl border p-5 shadow-xl">
			<div class="border-border/60 flex items-center gap-2 border-b pb-3">
				<div class="flex gap-1.5">
					<span class="size-2.5 rounded-full bg-rose-400/70"></span>
					<span class="size-2.5 rounded-full bg-amber-400/70"></span>
					<span class="size-2.5 rounded-full bg-emerald-400/70"></span>
				</div>
				<div class="bg-muted text-muted-foreground mx-auto rounded px-3 py-0.5 text-[11px] font-mono">
					yourshop.com/store
				</div>
			</div>

			<div class="pt-5">
				<div class="mb-4 flex flex-wrap gap-2">
					<span class="bg-primary text-primary-foreground rounded-full px-3 py-1 text-xs font-medium">All sets</span>
					<span class="border-border bg-card rounded-full border px-3 py-1 text-xs">NM</span>
					<span class="border-border bg-card rounded-full border px-3 py-1 text-xs">Foil</span>
					<span class="border-border bg-card rounded-full border px-3 py-1 text-xs">Mythic</span>
				</div>
				<div class="grid grid-cols-3 gap-3">
					{#each FEATURED_CARDS as card (card.scryfallId)}
						<div class="border-border/60 bg-card min-w-0 rounded-lg border p-2 text-xs">
							<div class="mb-2">
								<CardImage {card} size="small" class="shadow-none" />
							</div>
							<div class="truncate font-medium">{card.name}</div>
							<div class="text-muted-foreground flex items-center justify-between gap-2">
								<span class="truncate font-mono text-[10px] tracking-wider uppercase">{card.set}</span>
								<span class="text-foreground font-semibold tabular-nums">${card.priceUsd}</span>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
