<script lang="ts">
	import * as Accordion from '$lib/components/shadcn/ui/accordion/index.js';
	import type { Faq } from '$lib/content/faqs.js';

	interface FaqSectionProps {
		title?: string;
		subtitle?: string;
		items: Faq[];
	}

	const {
		title = 'Frequently asked questions',
		subtitle = 'If your question is not answered below, email hello@tcvault.app — a human who has worked at a card shop will respond.',
		items
	}: FaqSectionProps = $props();
</script>

<section class="mx-auto max-w-3xl px-6 py-20 lg:px-8 lg:py-28">
	<div class="text-center">
		<h2 class="text-3xl font-bold sm:text-4xl">{title}</h2>
		<p class="text-muted-foreground mx-auto mt-4 max-w-xl text-base">{subtitle}</p>
	</div>

	<Accordion.Root type="single" class="mt-10">
		{#each items as item, itemIndex (item.question)}
			<Accordion.Item value={`faq-${itemIndex}`}>
				<Accordion.Trigger class="text-left text-base font-medium">
					{item.question}
				</Accordion.Trigger>
				<Accordion.Content class="text-muted-foreground text-sm leading-relaxed">
					{item.answer}
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</section>
