<script lang="ts">
	import { PARTNER_LOGOS } from '$lib/content/testimonials.js';
</script>

<section aria-label="Shops using Trading Card Vault" class="border-border/60 border-y">
	<div class="mx-auto max-w-7xl px-6 py-12 lg:px-8">
		<p class="text-muted-foreground mb-8 text-center text-xs tracking-[0.22em] uppercase">
			Trusted by local game shops across North America
		</p>
		<div class="grid grid-cols-2 gap-x-8 gap-y-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
			{#each PARTNER_LOGOS as logo (logo.name)}
				<!-- TODO: Replace with real SVG logos once partners approve. -->
				<div
					class="border-border/50 text-muted-foreground flex h-10 items-center justify-center rounded-md border border-dashed text-center text-[11px] font-medium tracking-wide uppercase"
				>
					{logo.name}
				</div>
			{/each}
		</div>
	</div>
</section>
