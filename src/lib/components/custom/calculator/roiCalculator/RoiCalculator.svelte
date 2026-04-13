<script lang="ts">
	import { Input } from '$lib/components/shadcn/ui/input/index.js';
	import { Label } from '$lib/components/shadcn/ui/label/index.js';
	import TrendingDown from '@lucide/svelte/icons/trending-down';
	import DollarSign from '@lucide/svelte/icons/dollar-sign';
	import Clock from '@lucide/svelte/icons/clock';
	import { SITE } from '$lib/content/site.js';

	// Ballpark assumption: AI scanning + auto-pricing cuts manual-inventory
	// hours by roughly 70%. TODO: validate against pilot-shop telemetry.
	const TIME_SAVINGS_RATIO = 0.7;

	// Pro-plan monthly subscription used for a rough net-savings figure.
	// TODO: refactor to pull from PRICING_TIERS once plans stabilize.
	const PRO_MONTHLY = 99;

	let cardCount = $state(12000);
	let hoursPerWeek = $state(10);
	let hourlyRate = $state(22);

	const hoursSavedPerMonth = $derived(
		Math.round(hoursPerWeek * 4 * TIME_SAVINGS_RATIO)
	);
	const dollarsSavedPerMonth = $derived(Math.round(hoursSavedPerMonth * hourlyRate));
	const netMonthlySavings = $derived(Math.max(dollarsSavedPerMonth - PRO_MONTHLY, 0));
	const yearlyNet = $derived(netMonthlySavings * 12);

	function formatCurrency(value: number) {
		return value.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
			maximumFractionDigits: 0
		});
	}
</script>

<div id="roi" class="border-border/60 bg-card grid gap-10 rounded-3xl border p-8 shadow-xl lg:grid-cols-2 lg:p-12">
	<div class="flex flex-col gap-6">
		<div>
			<p class="text-gold text-xs font-mono tracking-widest uppercase">ROI calculator</p>
			<h2 class="font-display mt-2 text-3xl font-bold">
				How much is spreadsheet inventory costing you?
			</h2>
			<p class="text-muted-foreground mt-3 text-sm leading-relaxed">
				Quick, honest math. Plug in your numbers and we will show you what Trading Card Vault would
				have saved you last month.
			</p>
		</div>

		<div class="space-y-5">
			<div>
				<Label for="roi-cards">Cards in your active inventory</Label>
				<Input
					id="roi-cards"
					type="number"
					min="0"
					step="100"
					bind:value={cardCount}
					class="mt-1.5"
				/>
			</div>
			<div>
				<Label for="roi-hours">
					Hours per week your team spends on inventory management
				</Label>
				<Input
					id="roi-hours"
					type="number"
					min="0"
					step="0.5"
					bind:value={hoursPerWeek}
					class="mt-1.5"
				/>
			</div>
			<div>
				<Label for="roi-rate">Average fully-loaded staff hourly rate ($)</Label>
				<Input
					id="roi-rate"
					type="number"
					min="0"
					step="1"
					bind:value={hourlyRate}
					class="mt-1.5"
				/>
			</div>
		</div>

		<p class="text-muted-foreground text-[11px]">
			Assumes AI scanning + auto-pricing cuts manual hours by ~70%. Net savings subtracts the Pro
			plan at ${PRO_MONTHLY}/mo. Your mileage will vary — this is a back-of-the-napkin.
		</p>
	</div>

	<div class="flex flex-col gap-4">
		<div class="border-border/60 bg-background/70 rounded-2xl border p-6">
			<div class="flex items-center gap-2">
				<Clock class="text-primary size-4" />
				<span class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
					Hours saved / month
				</span>
			</div>
			<div class="mt-2 text-4xl font-bold tabular-nums">{hoursSavedPerMonth}</div>
			<p class="text-muted-foreground mt-1 text-xs">
				{formatCurrency(cardCount)} cards, {hoursPerWeek} hrs/week input
			</p>
		</div>

		<div class="border-border/60 bg-background/70 rounded-2xl border p-6">
			<div class="flex items-center gap-2">
				<DollarSign class="text-primary size-4" />
				<span class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
					Labor saved / month
				</span>
			</div>
			<div class="mt-2 text-4xl font-bold tabular-nums">
				{formatCurrency(dollarsSavedPerMonth)}
			</div>
		</div>

		<div class="border-primary/60 from-primary/10 to-card rounded-2xl border bg-gradient-to-br p-6 shadow-lg">
			<div class="flex items-center gap-2">
				<TrendingDown class="text-primary size-4" />
				<span class="text-muted-foreground text-xs font-medium tracking-wide uppercase">
					Net savings (vs. Pro plan)
				</span>
			</div>
			<div class="mt-2 text-5xl font-bold tabular-nums">
				{formatCurrency(netMonthlySavings)}
				<span class="text-muted-foreground text-base font-normal">/mo</span>
			</div>
			<p class="text-muted-foreground mt-1 text-sm">
				≈ <span class="text-foreground font-semibold">{formatCurrency(yearlyNet)}</span> in the
				first 12 months.
			</p>
		</div>

		<a
			href={SITE.app.signUpUrl}
			class="text-primary mt-2 text-center text-sm font-medium hover:underline"
		>
			Start a free 14-day trial →
		</a>
	</div>
</div>
