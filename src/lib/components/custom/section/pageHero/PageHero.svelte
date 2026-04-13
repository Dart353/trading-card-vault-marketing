<script lang="ts">
	interface PageHeroProps {
		eyebrow?: string;
		title: string;
		description?: string;
	}

	const { eyebrow, title, description }: PageHeroProps = $props();
</script>

<section class="bg-hero-glow relative overflow-hidden">
	<div class="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"></div>
	<div class="relative mx-auto max-w-4xl px-6 pt-20 pb-16 text-center lg:px-8 lg:pt-28 lg:pb-20">
		{#if eyebrow}
			<p class="text-primary mb-4 text-xs font-mono tracking-widest uppercase">{eyebrow}</p>
		{/if}
		<h1 class="text-4xl font-bold sm:text-5xl lg:text-6xl">{title}</h1>
		{#if description}
			<p class="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
				{description}
			</p>
		{/if}
	</div>
</section>
