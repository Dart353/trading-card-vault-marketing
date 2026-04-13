<script lang="ts">
	import { cn } from '$lib/utils/utils.js';
	import type { CardPrinting } from '$lib/content/cards.js';

	interface CardImageProps {
		card: CardPrinting;
		size?: 'small' | 'normal';
		class?: string;
		loading?: 'lazy' | 'eager';
	}

	const { card, size = 'normal', class: className, loading = 'lazy' }: CardImageProps = $props();

	const src = $derived(size === 'small' ? card.imageSmall : card.imageNormal);
</script>

<img
	src={src}
	alt={`${card.name} (${card.set} ${card.collectorNumber})`}
	{loading}
	decoding="async"
	class={cn(
		'aspect-[488/680] w-full rounded-[5%] object-cover shadow-lg ring-1 ring-black/40',
		className
	)}
/>
