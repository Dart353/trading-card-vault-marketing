<script lang="ts">
	import Logo from '$lib/components/custom/layout/logo/Logo.svelte';
	import { FOOTER_NAV, SITE } from '$lib/content/site.js';

	const currentYear = new Date().getFullYear();
</script>

<footer class="border-border/60 border-t">
	<div class="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-5 lg:gap-12 lg:px-8">
		<div class="lg:col-span-2">
			<Logo />
			<p class="text-muted-foreground mt-4 max-w-sm text-sm">
				The operating system for local game shops. Built in the US for Magic-native retailers.
			</p>
			<p class="text-muted-foreground mt-6 text-xs">
				<a href={`mailto:${SITE.email}`} class="hover:text-foreground">{SITE.email}</a>
			</p>
		</div>

		{#each FOOTER_NAV as column (column.heading)}
			<div>
				<h3 class="text-xs font-semibold tracking-wider uppercase">{column.heading}</h3>
				<ul class="mt-4 space-y-2.5">
					{#each column.links as link (link.href)}
						<li>
							<a
								href={link.href}
								class="text-muted-foreground hover:text-foreground text-sm transition"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>

	<div class="border-border/60 border-t">
		<div
			class="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-xs lg:flex-row lg:items-center lg:justify-between lg:px-8"
		>
			<p>&copy; {currentYear} Trading Card Vault. All rights reserved.</p>
			<p class="text-[11px]">
				Not affiliated with Wizards of the Coast. Magic: The Gathering is a trademark of Wizards of
				the Coast LLC.
			</p>
		</div>
	</div>
</footer>
