<script lang="ts">
	import FeatureIcon from '$lib/components/custom/icon/featureIcon/FeatureIcon.svelte';
	import { VALUE_PROPS } from '$lib/content/features.js';
</script>

<section class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Three workflows. One system.</h2>
		<p class="text-muted-foreground mt-4 text-base">
			Trading Card Vault is not a spreadsheet with a web wrapper. Every stage of your day — scanning,
			pricing, and selling — is a first-class part of the product.
		</p>
	</div>

	<div class="mt-14 grid gap-6 md:grid-cols-3">
		{#each VALUE_PROPS as prop (prop.title)}
			<div class="border-border/60 bg-card rounded-2xl border p-8">
				<FeatureIcon name={prop.icon} />
				<h3 class="mt-5 text-xl font-semibold">{prop.title}</h3>
				<p class="text-muted-foreground mt-2 text-sm leading-relaxed">{prop.description}</p>
			</div>
		{/each}
	</div>
</section>
