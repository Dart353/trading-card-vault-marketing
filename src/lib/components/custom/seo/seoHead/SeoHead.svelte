<script lang="ts">
	import { SITE } from '$lib/content/site.js';

	interface SeoHeadProps {
		title: string;
		description?: string;
		path: string;
		/**
		 * Absolute URL or site-relative path. If omitted, an on-the-fly OG
		 * image is generated from `ogTitle` (or `title`) and `ogEyebrow`.
		 */
		image?: string;
		/** Short text drawn above the title on the generated OG image. */
		ogEyebrow?: string;
		/** Override the title used on the generated OG image (keeps the `<title>` tag shorter / cleaner). */
		ogTitle?: string;
		type?: 'website' | 'article' | 'product';
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	const {
		title,
		description = SITE.description,
		path,
		image,
		ogEyebrow,
		ogTitle,
		type = 'website',
		jsonLd
	}: SeoHeadProps = $props();

	const canonical = $derived(`${SITE.url}${path}`);
	const fullTitle = $derived(title.includes(SITE.name) ? title : `${title} · ${SITE.name}`);

	const resolvedImage = $derived.by(() => {
		if (image) return image;
		const params = new URLSearchParams();
		params.set('title', ogTitle ?? title);
		if (ogEyebrow) params.set('eyebrow', ogEyebrow);
		return `/og?${params.toString()}`;
	});

	const absoluteImage = $derived(
		resolvedImage.startsWith('http') ? resolvedImage : `${SITE.url}${resolvedImage}`
	);

	const jsonLdString = $derived(jsonLd ? JSON.stringify(jsonLd) : null);
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />

	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:type" content={type} />
	<meta property="og:image" content={absoluteImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={fullTitle} />
	<meta property="og:locale" content="en_US" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImage} />
	<meta name="twitter:image:alt" content={fullTitle} />

	{#if jsonLdString}
		{@html `<script type="application/ld+json">${jsonLdString}<\/script>`}
	{/if}
</svelte:head>
