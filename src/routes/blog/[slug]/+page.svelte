<script lang="ts">
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import CtaBand from '$lib/components/custom/section/ctaBand/CtaBand.svelte';
	import ArrowLeft from '@lucide/svelte/icons/arrow-left';
	import type { BlogPost } from '$lib/content/blog.js';

	interface BlogPostPageProps {
		data: { post: BlogPost };
	}

	const { data }: BlogPostPageProps = $props();

	const post = $derived(data.post);

	function formatDate(isoDate: string) {
		return new Date(isoDate).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}

	const articleSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: post.title,
		author: { '@type': 'Organization', name: post.author },
		datePublished: post.publishedAt
	});
</script>

<SeoHead
	title={post.title}
	description={post.excerpt}
	path={`/blog/${post.slug}`}
	type="article"
	ogEyebrow={`${post.tags[0] ?? 'Blog'} · ${post.readingMinutes} min read`}
	ogTitle={post.title}
	jsonLd={articleSchema}
/>

<article class="mx-auto max-w-3xl px-6 py-16 lg:px-8 lg:py-24">
	<a
		href="/blog"
		class="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm"
	>
		<ArrowLeft class="size-3.5" />
		All posts
	</a>

	<header class="mt-6 space-y-4">
		<div class="text-muted-foreground flex flex-wrap items-center gap-3 text-xs tracking-wide uppercase">
			<span>{formatDate(post.publishedAt)}</span>
			<span>·</span>
			<span>{post.readingMinutes} min read</span>
			<span>·</span>
			<span>{post.tags.join(' / ')}</span>
		</div>
		<h1 class="font-display text-4xl leading-tight font-bold sm:text-5xl">{post.title}</h1>
		<p class="text-muted-foreground text-lg">{post.excerpt}</p>
	</header>

	<div class="mt-10 space-y-6 text-base leading-relaxed">
		{#each post.content as block, blockIndex (blockIndex)}
			{#if block.type === 'h2' && block.text}
				<h2 class="font-display mt-10 text-2xl font-bold">{block.text}</h2>
			{:else if block.type === 'p' && block.text}
				<p class="text-muted-foreground">{block.text}</p>
			{:else if block.type === 'ul' && block.items}
				<ul class="text-muted-foreground list-disc space-y-2 pl-6">
					{#each block.items as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			{/if}
		{/each}
	</div>

	<footer class="border-border/60 mt-16 border-t pt-6 text-sm">
		<p class="text-muted-foreground">Written by {post.author}</p>
	</footer>
</article>

<CtaBand />
