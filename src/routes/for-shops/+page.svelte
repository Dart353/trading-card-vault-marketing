<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import Testimonials from '$lib/components/custom/section/testimonials/Testimonials.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import FeatureIcon from '$lib/components/custom/icon/featureIcon/FeatureIcon.svelte';
	import RoiCalculator from '$lib/components/custom/calculator/roiCalculator/RoiCalculator.svelte';
	import { SITE } from '$lib/content/site.js';

	interface PainPoint {
		icon: 'scan' | 'tag' | 'warehouse' | 'store' | 'clipboardCheck' | 'users';
		title: string;
		before: string;
		after: string;
	}

	const PAIN_POINTS: PainPoint[] = [
		{
			icon: 'scan',
			title: 'Getting cards in the system',
			before:
				'One staffer, one keyboard, eight hours of hunt-and-peck. Typos everywhere. The Sharpie on the binder spine is the source of truth.',
			after:
				'Scan a stack in front of the camera at close. The phone catches the set and collector number. The Sharpie retires.'
		},
		{
			icon: 'tag',
			title: 'Keeping prices honest',
			before:
				'Friday night someone undercuts your rare. By Monday you still have not updated it. Customers notice before you do.',
			after:
				'Prices refresh against Scryfall automatically. Set manual holds when you want to, but stop babysitting spreadsheets.'
		},
		{
			icon: 'warehouse',
			title: 'Two locations, one brain',
			before:
				'Customer asks if you have it at the other shop. You call the other shop. Then you call back. Then you call again.',
			after:
				'Every binder, case, and drawer across every location shows up in one search. Pick emails tell staff exactly where to look.'
		},
		{
			icon: 'store',
			title: 'Selling online without the skim',
			before:
				'TCGPlayer takes a cut. Your storefront on TCGPlayer competes with a thousand others. Your brand disappears.',
			after:
				'Embed the <card-vault-search> widget on your own domain. Customers check out on your URL. You keep the margin and the relationship.'
		},
		{
			icon: 'clipboardCheck',
			title: 'Fulfilling online orders',
			before:
				'Paper pick list. "Maria, do you still have that Ragavan out?" An hour finding one card.',
			after:
				'Order states move automatically. Pick emails route to the right shop with the exact slot. Customers get honest updates without a phone call.'
		},
		{
			icon: 'users',
			title: 'Onboarding new staff',
			before:
				'An eight-page manual, a shared Google login, and a prayer that the new hire does not nuke the spreadsheet.',
			after:
				'Invite them. Assign their role and the shops they work. They are scanning new stock in under ten minutes.'
		}
	];
</script>

<SeoHead
	title="For local game shop owners"
	description="The tools and workflows a national retailer uses, sized for one-to-five-location LGS. Honest numbers, honest tradeoffs, no SaaS fluff."
	path="/for-shops"
/>

<PageHero
	eyebrow="For LGS owners"
	title="The tools of a national retailer, for your one-to-five-location LGS."
	description="We built Trading Card Vault alongside working shop owners. Every workflow comes from a real Friday night behind the counter, not a product manager's whiteboard."
/>

<section class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">Six daily frustrations, six honest fixes.</h2>
		<p class="text-muted-foreground mt-3">
			If three or more of these sound like your shop, you are going to get along with us.
		</p>
	</div>

	<div class="mt-12 grid gap-6 md:grid-cols-2">
		{#each PAIN_POINTS as point (point.title)}
			<div class="border-border/60 bg-card rounded-2xl border p-6">
				<div class="flex items-start gap-4">
					<FeatureIcon name={point.icon} />
					<div>
						<h3 class="text-lg font-semibold">{point.title}</h3>
					</div>
				</div>

				<dl class="mt-5 space-y-4 text-sm">
					<div>
						<dt class="text-muted-foreground text-[10px] font-semibold tracking-widest uppercase">
							Before
						</dt>
						<dd class="text-muted-foreground mt-1 leading-relaxed">{point.before}</dd>
					</div>
					<div>
						<dt class="text-gold text-[10px] font-semibold tracking-widest uppercase">
							After
						</dt>
						<dd class="mt-1 leading-relaxed">{point.after}</dd>
					</div>
				</dl>
			</div>
		{/each}
	</div>
</section>

<section class="bg-card/40 border-border/60 border-y">
	<div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
		<RoiCalculator />
	</div>
</section>

<Testimonials />

<section class="mx-auto max-w-5xl px-6 py-20 lg:px-8">
	<div class="border-border/60 bg-card rounded-3xl border p-10 text-center lg:p-16">
		<h2 class="font-display text-3xl font-bold">Not sure where to start?</h2>
		<p class="text-muted-foreground mx-auto mt-4 max-w-xl">
			Book a 20-minute call with a member of our team — most of us have worked at a card shop. We
			will walk you through the product with your actual inventory in mind.
		</p>
		<div class="mt-8 flex flex-wrap justify-center gap-3">
			<Button size="lg" href={SITE.app.bookDemoUrl}>Book a 20-min demo</Button>
			<Button size="lg" variant="outline" href="/contact">Write to us</Button>
		</div>
	</div>
</section>

<CtaBand />
