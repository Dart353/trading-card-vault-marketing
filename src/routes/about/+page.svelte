<script lang="ts">
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';

	interface TeamMember {
		initials: string;
		name: string;
		role: string;
		bio: string;
	}

	// TODO: Replace with real bios and headshots before launch. The team
	// member cards deliberately use initials instead of avatars until then.
	const TEAM: TeamMember[] = [
		{
			initials: 'AK',
			name: 'Placeholder — Founder',
			role: 'Founder & CEO',
			bio: 'Twenty years behind a card-shop counter. Tired of watching local game shops lose to marketplaces that do not care about them.'
		},
		{
			initials: 'JM',
			name: 'Placeholder — Engineering',
			role: 'Head of Engineering',
			bio: 'Retail-systems engineer. Previously built inventory tooling for a national sports-card chain.'
		},
		{
			initials: 'RN',
			name: 'Placeholder — Design',
			role: 'Head of Product & Design',
			bio: 'Modern-format grinder. Spends weekends at FNM watching shop owners use our product in the wild.'
		}
	];

	const TIMELINE = [
		{
			year: '2024',
			title: 'Started in a back room in Minneapolis',
			body:
				'A shop owner and a retail-systems engineer sketched the first version on the back of a bulk-box lid after a Friday-night Modern event.'
		},
		{
			year: '2025',
			title: 'Private beta with seven shops',
			body:
				'Rolled Trading Card Vault out to seven LGS across four states. Rewrote the scanner three times based on what we saw at the counter.'
		},
		{
			year: '2026',
			title: 'Opening to every game shop',
			body:
				'Public launch of the storefront widget, Claude vision scanning, and multi-shop inventory. Pokémon and Lorcana support on the near-term roadmap.'
		}
	];
</script>

<SeoHead
	title="About"
	description="Trading Card Vault was built by and for local game shops. Meet the team and the mission."
	path="/about"
	ogEyebrow="About"
	ogTitle="Every local game shop deserves the tools of a national retailer."
/>

<PageHero
	eyebrow="About"
	title="Give every local game shop the tools of a national retailer."
	description="Local game shops are the beating heart of the Magic community. They host FNM, they teach new players, they take a flier on the weird commander deck. They deserve software that treats their work with the same care."
/>

<section class="mx-auto max-w-4xl px-6 py-16 lg:px-8">
	<div class="prose prose-invert max-w-none">
		<h2 class="font-display text-3xl font-bold">Why we built this.</h2>
		<p class="text-muted-foreground mt-4 text-base leading-relaxed">
			The tools a national retailer has — real inventory systems, real pricing feeds, real
			storefronts on their own domain — were, until recently, completely out of reach for the
			typical 1-to-5-location LGS. The choice was either to build it yourself or pay a marketplace
			a large slice of every sale for something that still did not feel like yours.
		</p>
		<p class="text-muted-foreground mt-4 text-base leading-relaxed">
			Trading Card Vault is what happens when a working shop owner and a retail-systems engineer
			decide that third option is bad enough to fix. We are Magic-native, shop-native, and we are
			here to make the LGS ecosystem healthier.
		</p>
	</div>
</section>

<section class="border-border/60 border-y bg-card/40">
	<div class="mx-auto max-w-4xl px-6 py-16 lg:px-8">
		<h2 class="font-display text-3xl font-bold">How we got here.</h2>
		<ol class="mt-10 space-y-8">
			{#each TIMELINE as event (event.year)}
				<li class="grid gap-2 md:grid-cols-[120px_1fr] md:gap-8">
					<div class="text-primary font-display text-2xl font-semibold">{event.year}</div>
					<div>
						<h3 class="text-lg font-semibold">{event.title}</h3>
						<p class="text-muted-foreground mt-1 text-sm">{event.body}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="mx-auto max-w-5xl px-6 py-20 lg:px-8">
	<h2 class="font-display text-3xl font-bold">The team.</h2>
	<p class="text-muted-foreground mt-3">A few of the people building this with you.</p>

	<div class="mt-10 grid gap-6 md:grid-cols-3">
		{#each TEAM as member (member.name)}
			<div class="border-border/60 bg-card rounded-2xl border p-6">
				<div class="bg-primary/20 text-primary inline-flex size-14 items-center justify-center rounded-full text-lg font-bold">
					{member.initials}
				</div>
				<h3 class="mt-4 font-semibold">{member.name}</h3>
				<p class="text-muted-foreground text-xs tracking-wider uppercase">{member.role}</p>
				<p class="text-muted-foreground mt-3 text-sm leading-relaxed">{member.bio}</p>
			</div>
		{/each}
	</div>
</section>

<CtaBand />
