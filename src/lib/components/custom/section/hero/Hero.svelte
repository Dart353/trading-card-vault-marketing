<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import ScanLine from '@lucide/svelte/icons/scan-line';
	import ScannerCardMockup from '$lib/components/custom/illustration/scannerCardMockup/ScannerCardMockup.svelte';
	import { SITE } from '$lib/content/site.js';
</script>

<section class="bg-hero-glow relative overflow-hidden">
	<!-- Grid background -->
	<div class="bg-grid pointer-events-none absolute inset-0 opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"></div>

	<div class="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 pt-20 pb-24 sm:pt-28 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-32 lg:pb-28">
		<div class="flex-1 space-y-8">
			<div class="border-primary/30 bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur">
				<ScanLine class="size-3.5" />
				AI card scanning for Magic: The Gathering
			</div>

			<h1 class="text-4xl leading-[1.05] font-bold sm:text-5xl lg:text-6xl">
				Run your card shop like a <span class="text-primary">national retailer</span>.
			</h1>

			<p class="text-muted-foreground max-w-xl text-lg leading-relaxed">
				{SITE.description}
			</p>

			<div class="flex flex-wrap items-center gap-3">
				<Button size="lg" href={SITE.app.signUpUrl}>
					Start free trial
					<ArrowRight class="size-4" />
				</Button>
				<Button size="lg" variant="outline" href={SITE.app.bookDemoUrl}>Book a demo</Button>
			</div>

			<dl class="text-muted-foreground flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
				<div class="flex items-baseline gap-2">
					<dt class="text-foreground font-semibold tabular-nums">14-day</dt>
					<dd>free trial</dd>
				</div>
				<div class="flex items-baseline gap-2">
					<dt class="text-foreground font-semibold tabular-nums">0%</dt>
					<dd>transaction fees</dd>
				</div>
				<div class="flex items-baseline gap-2">
					<dt class="text-foreground font-semibold tabular-nums">&lt; 1 sec</dt>
					<dd>card recognition</dd>
				</div>
			</dl>
		</div>

		<div class="flex-1">
			<ScannerCardMockup />
		</div>
	</div>
</section>
