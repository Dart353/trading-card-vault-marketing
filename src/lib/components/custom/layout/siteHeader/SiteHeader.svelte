<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import * as Sheet from '$lib/components/shadcn/ui/sheet/index.js';
	import Menu from '@lucide/svelte/icons/menu';
	import Logo from '$lib/components/custom/layout/logo/Logo.svelte';
	import ThemeToggle from '$lib/components/custom/layout/themeToggle/ThemeToggle.svelte';
	import { PRIMARY_NAV, SITE } from '$lib/content/site.js';
	import { page } from '$app/state';

	let isMobileNavOpen = $state(false);

	function closeMobileNav() {
		isMobileNavOpen = false;
	}
</script>

<header
	class="border-border/60 bg-background/70 sticky top-0 z-40 border-b backdrop-blur-md supports-[backdrop-filter]:bg-background/60"
>
	<div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
		<Logo />

		<nav class="hidden items-center gap-1 lg:flex" aria-label="Primary">
			{#each PRIMARY_NAV as link (link.href)}
				<a
					href={link.href}
					class="text-muted-foreground hover:text-foreground rounded-md px-3 py-2 text-sm font-medium transition aria-[current=page]:text-foreground"
					aria-current={page.url.pathname === link.href ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-2">
			<ThemeToggle />
			<div class="hidden items-center gap-2 lg:flex">
				<Button href={SITE.app.signInUrl} variant="ghost">Sign in</Button>
				<Button href={SITE.app.signUpUrl}>Start free</Button>
			</div>

			<Sheet.Root bind:open={isMobileNavOpen}>
				<Sheet.Trigger
					class="text-muted-foreground hover:text-foreground inline-flex size-9 items-center justify-center rounded-md lg:hidden"
					aria-label="Open menu"
				>
					<Menu class="size-5" />
				</Sheet.Trigger>
				<Sheet.Content side="right" class="w-80 max-w-full">
					<Sheet.Header>
						<Sheet.Title>Menu</Sheet.Title>
					</Sheet.Header>
					<nav class="mt-6 flex flex-col gap-1 px-2" aria-label="Mobile">
						{#each PRIMARY_NAV as link (link.href)}
							<a
								href={link.href}
								onclick={closeMobileNav}
								class="hover:bg-muted rounded-md px-3 py-2 text-base font-medium"
							>
								{link.label}
							</a>
						{/each}
					</nav>
					<div class="mt-6 flex flex-col gap-2 px-4">
						<Button variant="outline" href={SITE.app.signInUrl} onclick={closeMobileNav}>Sign in</Button>
						<Button href={SITE.app.signUpUrl} onclick={closeMobileNav}>Start free trial</Button>
					</div>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>
</header>
