<script lang="ts">
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';

	// TODO: This is starter copy only. Have counsel review and replace
	// before production launch. Confirm data residency, retention windows,
	// sub-processor list, and GDPR / CCPA applicability.
	const LAST_UPDATED = '2026-04-01';
</script>

<SeoHead
	title="Privacy Policy"
	description="How Trading Card Vault collects, uses, and protects the personal information of shop owners, staff, and customers."
	path="/legal/privacy"
/>

<PageHero
	eyebrow="Legal"
	title="Privacy Policy"
	description="How we handle personal information about shop owners, staff, and the customers who buy through shops on our platform."
/>

<article class="prose prose-invert mx-auto max-w-3xl px-6 py-16 lg:px-8">
	<p class="text-muted-foreground text-sm">Last updated: {LAST_UPDATED}</p>

	<h2 class="mt-10 text-2xl font-bold">1. Who we are</h2>
	<p class="text-muted-foreground mt-3">
		Trading Card Vault (&ldquo;we&rdquo;, &ldquo;us&rdquo;) provides inventory and storefront
		software to trading card shops. We are the data controller for the account and billing data of
		the shop owners who subscribe to our product, and a data processor for the customer data that
		our shops collect through our platform.
	</p>

	<h2 class="mt-8 text-2xl font-bold">2. What we collect</h2>
	<ul class="text-muted-foreground mt-3 list-disc space-y-2 pl-6">
		<li>Account information — name, email, password hash, shop name.</li>
		<li>Billing information — handled by our payments processor; we do not store card numbers.</li>
		<li>Product usage — basic telemetry (page loads, feature usage, error logs) for reliability.</li>
		<li>Inventory data and customer orders — on behalf of the shop that owns the account.</li>
	</ul>

	<h2 class="mt-8 text-2xl font-bold">3. How we use it</h2>
	<p class="text-muted-foreground mt-3">
		We use this information to provide the Trading Card Vault service, deliver transactional emails
		about your account and orders, respond to support requests, and improve the product. We do not
		sell personal information to third parties.
	</p>

	<h2 class="mt-8 text-2xl font-bold">4. Sub-processors</h2>
	<p class="text-muted-foreground mt-3">
		TODO: Insert current sub-processor list (hosting provider, transactional email, error tracking,
		payments) and the purpose each serves.
	</p>

	<h2 class="mt-8 text-2xl font-bold">5. Your rights</h2>
	<p class="text-muted-foreground mt-3">
		You can request access to, correction of, or deletion of your personal information at any time
		by emailing <a href="mailto:privacy@tcvault.app" class="underline">privacy@tcvault.app</a>. If
		you are in the EEA or UK, you may have additional rights under GDPR; if you are in California,
		under CCPA.
	</p>

	<h2 class="mt-8 text-2xl font-bold">6. Retention</h2>
	<p class="text-muted-foreground mt-3">
		We keep account and inventory data for as long as your subscription is active, plus 90 days
		after cancellation so you can restore the account if you change your mind. Billing records are
		retained as required by applicable law.
	</p>

	<h2 class="mt-8 text-2xl font-bold">7. Changes to this policy</h2>
	<p class="text-muted-foreground mt-3">
		We will post material changes to this policy here and notify account owners by email. Continued
		use of Trading Card Vault after changes take effect constitutes acceptance of the revised
		policy.
	</p>

	<h2 class="mt-8 text-2xl font-bold">8. Contact</h2>
	<p class="text-muted-foreground mt-3">
		Questions about privacy? Email <a href="mailto:privacy@tcvault.app" class="underline">privacy@tcvault.app</a>.
	</p>

	<div class="text-muted-foreground border-border mt-12 rounded-lg border border-dashed p-4 text-xs">
		<strong class="text-foreground">TODO:</strong> Replace this starter policy with counsel-reviewed
		final copy before launch. Do not rely on this document for compliance.
	</div>
</article>
