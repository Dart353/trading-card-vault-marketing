<script lang="ts">
	import Quote from '@lucide/svelte/icons/quote';
	import { TESTIMONIALS } from '$lib/content/testimonials.js';
</script>

<section class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Shop owners, not marketing copy.</h2>
		<p class="text-muted-foreground mt-4 text-base">
			The people running the LGS down the street are the ones building this product with us.
		</p>
	</div>

	<div class="mt-14 grid gap-6 md:grid-cols-3">
		{#each TESTIMONIALS as testimonial (testimonial.author)}
			<figure
				class="border-border/60 bg-card flex h-full flex-col rounded-2xl border p-8 shadow-sm"
			>
				<Quote class="text-primary/70 size-6" />
				<blockquote class="mt-4 flex-1 text-base leading-relaxed">
					&ldquo;{testimonial.quote}&rdquo;
				</blockquote>
				<figcaption class="border-border/60 mt-6 border-t pt-4">
					<div class="font-semibold">{testimonial.author}</div>
					<div class="text-muted-foreground text-xs">
						{testimonial.title} · {testimonial.shop}, {testimonial.location}
					</div>
				</figcaption>
			</figure>
		{/each}
	</div>
</section>
