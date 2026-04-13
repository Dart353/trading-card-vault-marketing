<script lang="ts">
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';

	// TODO: Starter terms only. Replace with counsel-reviewed final copy.
	const LAST_UPDATED = '2026-04-01';
</script>

<SeoHead
	title="Terms of Service"
	description="The terms under which shops subscribe to and use Trading Card Vault."
	path="/legal/terms"
	ogEyebrow="Legal"
	ogTitle="Terms of Service"
/>

<PageHero eyebrow="Legal" title="Terms of Service" />

<article class="prose prose-invert mx-auto max-w-3xl px-6 py-16 lg:px-8">
	<p class="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>

	<h2 class="mt-10 text-2xl font-bold">1. Agreement</h2>
	<p class="text-muted-foreground mt-3">
		By creating a Trading Card Vault account or using our service you agree to these Terms. If you
		are entering these Terms on behalf of a business, you represent that you have authority to bind
		that business.
	</p>

	<h2 class="mt-8 text-2xl font-bold">2. The service</h2>
	<p class="text-muted-foreground mt-3">
		Trading Card Vault is a cloud-hosted inventory, pricing, and storefront product for trading
		card retailers. Features may change over time; we will provide reasonable notice of material
		changes that affect paid subscriptions.
	</p>

	<h2 class="mt-8 text-2xl font-bold">3. Accounts</h2>
	<p class="text-muted-foreground mt-3">
		You are responsible for the activity of every user you invite to your account and for keeping
		your credentials secure. Tell us immediately if you suspect unauthorized access.
	</p>

	<h2 class="mt-8 text-2xl font-bold">4. Fees and billing</h2>
	<p class="text-muted-foreground mt-3">
		Paid plans are billed in advance on a monthly or annual basis. Fees are non-refundable except
		where required by law. You may cancel at any time; cancellation takes effect at the end of the
		then-current billing period.
	</p>

	<h2 class="mt-8 text-2xl font-bold">5. Acceptable use</h2>
	<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
		<li>Do not use Trading Card Vault to sell counterfeit or stolen goods.</li>
		<li>Do not interfere with or attempt to gain unauthorized access to the service.</li>
		<li>Comply with all applicable laws, including tax and consumer-protection regulations.</li>
	</ul>

	<h2 class="mt-8 text-2xl font-bold">6. Content and data</h2>
	<p class="text-muted-foreground mt-3">
		You own your inventory, customer, and order data. You grant us a limited license to host,
		process, and display that data as necessary to provide the service. You can export your data at
		any time and we will delete it 90 days after cancellation.
	</p>

	<h2 class="mt-8 text-2xl font-bold">7. Third-party services</h2>
	<p class="text-muted-foreground mt-3">
		Trading Card Vault integrates with third-party services (for example, Scryfall for pricing data
		and payments processors). Those services have their own terms and we are not responsible for
		their availability or conduct.
	</p>

	<h2 class="mt-8 text-2xl font-bold">8. Disclaimers and liability</h2>
	<p class="text-muted-foreground mt-3">
		The service is provided &ldquo;as is&rdquo;. To the fullest extent permitted by law, our total
		liability for any claim arising out of these Terms is capped at the fees you paid in the
		twelve months preceding the claim.
	</p>

	<h2 class="mt-8 text-2xl font-bold">9. Changes</h2>
	<p class="text-muted-foreground mt-3">
		We may update these Terms from time to time. Material changes will be communicated to account
		owners by email. Continued use after changes take effect constitutes acceptance.
	</p>

	<h2 class="mt-8 text-2xl font-bold">10. Governing law</h2>
	<p class="text-muted-foreground mt-3">
		TODO: Confirm governing-law jurisdiction with counsel (Minnesota / Delaware / elsewhere).
	</p>

	<div class="text-muted-foreground border-border mt-12 rounded-lg border border-dashed p-4 text-xs">
		<strong class="text-foreground">TODO:</strong> Replace this starter draft with counsel-reviewed
		final copy before launch. Do not rely on this document as a contract.
	</div>
</article>
