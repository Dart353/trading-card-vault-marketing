<script lang="ts">
	import PageHero from '$lib/components/custom/section/pageHero/PageHero.svelte';
	import SeoHead from '$lib/components/custom/seo/seoHead/SeoHead.svelte';
	import ArrowRight from '@lucide/svelte/icons/arrow-right';
	import { BLOG_POSTS } from '$lib/content/blog.js';

	function formatDate(isoDate: string) {
		return new Date(isoDate).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<SeoHead
	title="Blog"
	description="Practical writing about running a local game shop — operations, pricing, storefront, and everything in between."
	path="/blog"
	ogEyebrow="Blog"
	ogTitle="Writing for people who run card shops."
/>

<PageHero
	eyebrow="Blog"
	title="Writing for people who run card shops."
	description="Practical posts about inventory, pricing, storefronts, and the boring-but-load-bearing operational details of a modern LGS."
/>

<section class="mx-auto max-w-4xl px-6 py-16 lg:px-8">
	<ul class="divide-border/60 divide-y">
		{#each BLOG_POSTS as post (post.slug)}
			<li class="py-8">
				<article>
					<div class="text-muted-foreground flex items-center gap-3 text-xs tracking-wide uppercase">
						<span>{formatDate(post.publishedAt)}</span>
						<span>·</span>
						<span>{post.readingMinutes} min read</span>
						<span>·</span>
						<span>{post.tags.join(' / ')}</span>
					</div>
					<h2 class="mt-3 text-2xl font-bold sm:text-3xl">
						<a href={`/blog/${post.slug}`} class="hover:text-primary transition">
							{post.title}
						</a>
					</h2>
					<p class="text-muted-foreground mt-3 text-base leading-relaxed">{post.excerpt}</p>
					<a
						href={`/blog/${post.slug}`}
						class="text-primary mt-4 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
					>
						Keep reading <ArrowRight class="size-3.5" />
					</a>
				</article>
			</li>
		{/each}
	</ul>
</section>
