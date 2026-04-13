<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import Check from '@lucide/svelte/icons/check';
	import { cn } from '$lib/utils/utils.js';
	import { PRICING_TIERS } from '$lib/content/pricing.js';
</script>

<section class="border-border/60 bg-card/30 border-y">
	<div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
		<div class="mx-auto max-w-2xl text-center">
			<h2 class="text-3xl font-bold sm:text-4xl">Pricing that scales with your shop.</h2>
			<p class="text-muted-foreground mt-4 text-base">
				Flat subscription — we never take a cut of your sales.
			</p>
		</div>

		<div class="mt-14 grid gap-6 lg:grid-cols-3">
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
					<h3 class="text-xl font-semibold">{tier.name}</h3>
					<p class="text-muted-foreground mt-1 text-sm">{tier.tagline}</p>
					<div class="mt-6 flex items-baseline gap-1">
						<span class="text-4xl font-bold tabular-nums">{tier.price}</span>
						{#if tier.priceSuffix}
							<span class="text-muted-foreground text-sm">{tier.priceSuffix}</span>
						{/if}
					</div>

					<ul class="mt-6 flex-1 space-y-2.5">
						{#each tier.features.slice(0, 5) as feature (feature)}
							<li class="flex gap-2 text-sm">
								<Check class="text-primary mt-0.5 size-4 shrink-0" />
								<span>{feature}</span>
							</li>
						{/each}
					</ul>

					<div class="mt-8">
						<Button
							class="w-full"
							variant={tier.featured ? 'default' : 'outline'}
							href={tier.ctaHref}
						>
							{tier.ctaLabel}
						</Button>
					</div>
				</div>
			{/each}
		</div>

		<p class="text-muted-foreground mt-10 text-center text-sm">
			Need a side-by-side? <a href="/pricing" class="text-foreground underline">See full pricing and
				feature comparison →</a>
		</p>
	</div>
</section>
