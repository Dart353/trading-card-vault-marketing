<script lang="ts">
	import { cn } from '$lib/utils/utils.js';

	interface LogoProps {
		class?: string;
	}

	const { class: className }: LogoProps = $props();
</script>

<a href="/" class={cn('flex items-center gap-2 font-semibold', className)}>
	<span class="relative flex size-8 items-center justify-center">
		<span class="bg-primary absolute inset-0 rounded-[9px]"></span>
		<svg viewBox="0 0 24 24" class="text-primary-foreground relative size-5" aria-hidden="true">
			<path
				d="M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 1-4-4V4z"
				fill="currentColor"
				opacity="0.35"
			/>
			<path
				d="M3 2h10a4 4 0 0 1 4 4v12H7a4 4 0 0 1-4-4V2z"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linejoin="round"
			/>
			<path d="M7 7h6M7 11h4" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
		</svg>
	</span>
	<span class="font-display text-[17px] tracking-tight">Trading Card Vault</span>
</a>
