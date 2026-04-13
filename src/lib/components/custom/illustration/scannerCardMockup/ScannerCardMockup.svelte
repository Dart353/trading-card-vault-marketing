<script lang="ts">
	import Sparkles from '@lucide/svelte/icons/sparkles';
	import CheckCircle2 from '@lucide/svelte/icons/circle-check-big';
	import CardImage from '$lib/components/custom/illustration/cardImage/CardImage.svelte';
	import { FEATURED_CARDS } from '$lib/content/cards.js';

	const primaryCard = FEATURED_CARDS[2];
	const secondaryCard = FEATURED_CARDS[0];
</script>

<!--
	Hero illustration. Mixes a real Magic card image (served from Scryfall's
	image CDN) with stylized overlays — scanner beam, detection chip, and a
	secondary floating card behind the primary.
-->
<div class="relative mx-auto w-full max-w-md">
	<div class="bg-primary/25 absolute -inset-8 -z-10 rounded-[32px] blur-3xl"></div>

	<div
		class="card-float pointer-events-none absolute top-6 -right-12 w-[60%] rotate-[9deg] opacity-80 blur-[0.3px]"
	>
		<CardImage card={secondaryCard} loading="eager" class="ring-border/60" />
	</div>

	<div class="card-float relative">
		<CardImage card={primaryCard} loading="eager" class="ring-border/80" />

		<div class="pointer-events-none absolute inset-0 overflow-hidden rounded-[5%]">
			<div
				class="scanner-beam from-primary/0 via-primary to-primary/0 absolute inset-x-0 top-0 h-[28%] bg-gradient-to-b opacity-90 mix-blend-screen"
			></div>
		</div>

		<div class="pointer-events-none absolute inset-[6%]">
			<div class="relative h-full w-full">
				<span class="border-primary absolute top-0 left-0 size-6 rounded-tl border-t-2 border-l-2"></span>
				<span class="border-primary absolute top-0 right-0 size-6 rounded-tr border-t-2 border-r-2"></span>
				<span class="border-primary absolute bottom-0 left-0 size-6 rounded-bl border-b-2 border-l-2"></span>
				<span class="border-primary absolute right-0 bottom-0 size-6 rounded-br border-r-2 border-b-2"></span>
			</div>
		</div>
	</div>

	<div
		class="border-border/60 bg-background/90 absolute -right-3 -bottom-3 flex items-center gap-2 rounded-xl border px-3 py-2 shadow-xl backdrop-blur"
	>
		<CheckCircle2 class="size-4 text-emerald-400" />
		<div class="flex flex-col leading-tight">
			<span class="text-xs font-semibold">{primaryCard.name}</span>
			<span class="text-muted-foreground font-mono text-[10px] tracking-wider uppercase">
				{primaryCard.set} · {primaryCard.collectorNumber} · 97%
			</span>
		</div>
	</div>

	<div
		class="border-border/60 bg-background/90 absolute -top-4 -left-4 flex items-center gap-2 rounded-xl border px-3 py-2 shadow-xl backdrop-blur"
	>
		<Sparkles class="text-primary size-4" />
		<div class="flex flex-col leading-tight">
			<span class="text-xs font-semibold">+1 added</span>
			<span class="text-muted-foreground text-[10px]">NM · Main binder</span>
		</div>
	</div>

	<div
		class="border-border/60 bg-background/90 absolute top-1/2 -right-6 flex items-center gap-2 rounded-xl border px-3 py-2 shadow-xl backdrop-blur"
	>
		<span class="text-muted-foreground text-[10px] tracking-widest uppercase">Scryfall</span>
		<span class="font-semibold tabular-nums">${primaryCard.priceUsd}</span>
	</div>
</div>
