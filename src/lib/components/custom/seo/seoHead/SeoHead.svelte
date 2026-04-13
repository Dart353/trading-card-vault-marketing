<script lang="ts">
	import { SITE } from '$lib/content/site.js';

	interface SeoHeadProps {
		title: string;
		description?: string;
		path: string;
		image?: string;
		type?: 'website' | 'article' | 'product';
		jsonLd?: Record<string, unknown> | Record<string, unknown>[];
	}

	const {
		title,
		description = SITE.description,
		path,
		image = '/og-default.png',
		type = 'website',
		jsonLd
	}: SeoHeadProps = $props();

	const canonical = $derived(`${SITE.url}${path}`);
	const absoluteImage = $derived(image.startsWith('http') ? image : `${SITE.url}${image}`);
	const fullTitle = $derived(title.includes(SITE.name) ? title : `${title} · ${SITE.name}`);
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

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={fullTitle} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={absoluteImage} />

	{#if jsonLdString}
		{@html `<script type="application/ld+json">${jsonLdString}<\/script>`}
	{/if}
</svelte:head>
