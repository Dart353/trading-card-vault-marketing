<script lang="ts">
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from '$lib/components/shadcn/ui/sonner/index.js';
	import SiteHeader from '$lib/components/custom/layout/siteHeader/SiteHeader.svelte';
	import SiteFooter from '$lib/components/custom/layout/siteFooter/SiteFooter.svelte';

	interface LayoutProps {
		children?: import('svelte').Snippet;
	}

	const { children }: LayoutProps = $props();
</script>

<!--
	TODO: Analytics. Drop in Plausible (or your preferred privacy-friendly analytics)
	before launch. Example:
	<script defer data-domain="tcvault.app" src="https://plausible.io/js/script.js"><\/script>
-->

<ModeWatcher defaultMode="dark" />
<Toaster position="top-right" />

<div class="flex min-h-screen flex-col">
	<SiteHeader />
	<main class="flex-1">
		{@render children?.()}
	</main>
	<SiteFooter />
</div>
