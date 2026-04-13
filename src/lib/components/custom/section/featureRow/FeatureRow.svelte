<script lang="ts">
	import Check from '@lucide/svelte/icons/check';
	import FeatureIcon from '$lib/components/custom/icon/featureIcon/FeatureIcon.svelte';
	import CardImage from '$lib/components/custom/illustration/cardImage/CardImage.svelte';
	import { cn } from '$lib/utils/utils.js';
	import type { Feature } from '$lib/content/features.js';
	import { FEATURED_CARDS } from '$lib/content/cards.js';

	interface FeatureRowProps {
		feature: Feature;
		reverse?: boolean;
		index: number;
	}

	const { feature, reverse = false, index }: FeatureRowProps = $props();

	// Rotate through the featured cards so each row shows a different trio.
	const cardTrio = $derived(
		[0, 1, 2].map(
			(offset) => FEATURED_CARDS[(index * 2 + offset) % FEATURED_CARDS.length]
		)
	);
</script>

<div
	class={cn(
		'grid items-center gap-10 lg:grid-cols-2 lg:gap-16',
		reverse && 'lg:[&>div:first-child]:order-2'
	)}
>
	<div>
		<FeatureIcon name={feature.icon} />
		<p class="text-muted-foreground mt-4 text-xs font-mono tracking-widest uppercase">
			{String(index + 1).padStart(2, '0')} / {feature.group}
		</p>
		<h3 class="mt-2 text-3xl font-bold">{feature.title}</h3>
		<p class="text-primary mt-2 text-sm font-medium italic">{feature.tagline}</p>
		<p class="text-muted-foreground mt-4 text-base leading-relaxed">{feature.description}</p>
		<ul class="mt-6 space-y-3">
			{#each feature.bullets as bullet (bullet)}
				<li class="flex gap-3 text-sm">
					<Check class="text-primary mt-0.5 size-4 shrink-0" />
					<span>{bullet}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!--
		Stylized "app screenshot" frame holding a trio of real Magic cards
		served from Scryfall's CDN. TODO: swap the outer frame to a true
		product screenshot once design exports are available.
	-->
	<div
		class="border-border/60 from-primary/10 bg-card relative aspect-[4/3] overflow-hidden rounded-2xl border bg-gradient-to-br to-transparent p-6 shadow-lg"
	>
		<div class="bg-grid absolute inset-0 opacity-40"></div>
		<div class="relative flex h-full flex-col justify-between gap-4">
			<div class="flex items-center justify-between">
				<div class="bg-background/60 text-muted-foreground rounded-md px-2 py-1 font-mono text-[10px] tracking-wider uppercase backdrop-blur">
					{feature.slug}
				</div>
				<div class="flex gap-1.5">
					<span class="size-2 rounded-full bg-rose-400/70"></span>
					<span class="size-2 rounded-full bg-amber-400/70"></span>
					<span class="size-2 rounded-full bg-emerald-400/70"></span>
				</div>
			</div>

			<div class="grid grid-cols-3 gap-3">
				{#each cardTrio as card, cardIndex (card.scryfallId)}
					<div class="flex flex-col gap-1.5">
						<CardImage
							{card}
							size="small"
							class={cn(
								'ring-border/60 shadow-lg',
								cardIndex === 1 && '-translate-y-2'
							)}
						/>
						<div class="text-muted-foreground flex items-center justify-between px-0.5 text-[10px]">
							<span class="font-mono tracking-wider uppercase">{card.set}</span>
							<span class="text-foreground font-semibold tabular-nums">${card.priceUsd}</span>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
