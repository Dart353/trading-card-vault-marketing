<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { SITE } from '$lib/content/site.js';
</script>

<section class="relative overflow-hidden">
	<div class="bg-primary/20 absolute -inset-x-4 -bottom-20 h-64 rounded-full blur-3xl"></div>
	<div class="relative mx-auto max-w-5xl px-6 py-20 lg:px-8 lg:py-28">
		<div
			class="border-border/60 from-primary/10 via-card to-card overflow-hidden rounded-3xl border bg-gradient-to-br px-8 py-14 text-center shadow-xl lg:px-16"
		>
			<h2 class="font-display text-3xl font-bold sm:text-4xl">
				Stop hand-keying binders. Start selling tonight.
			</h2>
			<p class="text-muted-foreground mx-auto mt-4 max-w-2xl text-base">
				Import your existing inventory in minutes, embed the storefront widget on your domain by
				dinner, and scan new stock straight from your phone at close.
			</p>
			<div class="mt-8 flex flex-wrap justify-center gap-3">
				<Button size="lg" href={SITE.app.signUpUrl}>
					Start free trial
					<ArrowRight class="size-4" />
				</Button>
				<Button size="lg" variant="outline" href={SITE.app.bookDemoUrl}>Book a demo</Button>
			</div>
		</div>
	</div>
</section>
