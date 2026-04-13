<script lang="ts">
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import ContactForm from '$lib/components/custom/form/contactForm/ContactForm.svelte';
	import Mail from '@lucide/svelte/icons/mail';
	import Calendar from '@lucide/svelte/icons/calendar';
	import MapPin from '@lucide/svelte/icons/map-pin';
	import { SITE } from '$lib/content/site.js';

	interface ContactPageProps {
		data: {
			form: import('sveltekit-superforms').SuperValidated<
				import('sveltekit-superforms').Infer<typeof import('$schema/contactSchema').contactSchema>
			>;
		};
	}

	const { data }: ContactPageProps = $props();
</script>

<SeoHead
	title="Contact"
	description="Questions, demo requests, or feedback — write us or book a 20-minute call."
	path="/contact"
	ogEyebrow="Contact"
	ogTitle="Talk to someone who knows card shops."
/>

<PageHero
	eyebrow="Contact"
	title="Talk to someone who knows card shops."
	description="Demo requests, pricing questions, feature feedback — they all come to the same small inbox. You'll hear back within one business day."
/>

<section class="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_320px] lg:gap-16 lg:px-8">
	<div>
		<h2 class="text-2xl font-bold">Write us a note</h2>
		<p class="text-muted-foreground mt-2 text-sm">
			No form-fill tax, no "we'll route you to sales". A real person reads every message.
		</p>
		<div class="mt-8">
			<ContactForm data={data.form} />
		</div>
	</div>

	<aside class="space-y-6">
		<div class="border-border/60 bg-card rounded-2xl border p-6">
			<Mail class="text-primary size-5" />
			<h3 class="mt-3 text-sm font-semibold tracking-wider uppercase">Email</h3>
			<a href={`mailto:${SITE.email}`} class="mt-2 block text-base hover:underline">
				{SITE.email}
			</a>
		</div>

		<div class="border-border/60 bg-card rounded-2xl border p-6">
			<Calendar class="text-primary size-5" />
			<h3 class="mt-3 text-sm font-semibold tracking-wider uppercase">Book a demo</h3>
			<p class="text-muted-foreground mt-2 text-sm">
				A 20-minute walkthrough with your inventory in mind.
			</p>
			<a
				href={SITE.app.bookDemoUrl}
				class="text-primary mt-3 inline-block text-sm font-medium hover:underline"
			>
				Pick a time →
			</a>
		</div>

		<div class="border-border/60 bg-card rounded-2xl border p-6">
			<MapPin class="text-primary size-5" />
			<h3 class="mt-3 text-sm font-semibold tracking-wider uppercase">Where we are</h3>
			<p class="text-muted-foreground mt-2 text-sm">
				Minneapolis, MN · Remote-first across US &amp; Canada
			</p>
		</div>
	</aside>
</section>
