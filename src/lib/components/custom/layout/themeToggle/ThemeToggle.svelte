<script lang="ts">
	import Sun from '@lucide/svelte/icons/sun';
	import Moon from '@lucide/svelte/icons/moon';
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import { mode, toggleMode } from 'mode-watcher';

	function onToggle() {
		toggleMode();
	}
</script>

<Button
	variant="ghost"
	size="icon"
	onclick={onToggle}
	aria-label="Toggle color scheme"
	class="text-muted-foreground hover:text-foreground"
>
	{#if mode.current === 'dark'}
		<Sun class="size-4" />
	{:else}
		<Moon class="size-4" />
	{/if}
</Button>
