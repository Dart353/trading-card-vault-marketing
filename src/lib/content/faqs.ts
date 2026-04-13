export interface Faq {
	question: string;
	answer: string;
}

export const HOME_FAQS: Faq[] = [
	{
		question: 'Does the AI scanner work in card sleeves?',
		answer:
			'Yes. The scanner is trained on real shop conditions — sleeved, lightly glared, held at an angle. If confidence is low we show the top three matches and let you pick.'
	},
	{
		question: 'Is this just for Magic: The Gathering?',
		answer:
			'For now, yes — the pricing integration and card recognition are Magic-native via Scryfall. The data model and scanner pipeline are TCG-agnostic, and Pokémon and Lorcana are on the near-term roadmap.'
	},
	{
		question: 'Do my customers need a Trading Card Vault account to buy from my shop?',
		answer:
			'No. The storefront widget embeds on your domain and supports guest checkout. Your customers never see our branding unless you choose to show it.'
	},
	{
		question: 'How does pricing stay accurate?',
		answer:
			'We refresh Scryfall data nightly and let you trigger an on-demand repull per card. You can also set manual overrides when you want to hold a price against the market.'
	},
	{
		question: 'Can I migrate inventory from Crystal Commerce or TCGPlayer?',
		answer:
			'Yes. Bulk CSV import handles tens of thousands of rows asynchronously, with column mapping for common export formats. We have helper docs for each major competitor.'
	},
	{
		question: 'What happens to my inventory data if I cancel?',
		answer:
			'You own it. Full CSV export is available on every plan, and we retain your data for 90 days after cancellation in case you change your mind.'
	},
	{
		question: 'Do you integrate with in-store POS systems?',
		answer:
			'API access (Enterprise) lets you wire Trading Card Vault into any POS that supports webhooks. Native integrations with Square and Shopify POS are on the roadmap.'
	},
	{
		question: 'How is this different from TCGPlayer or Collectr?',
		answer:
			'TCGPlayer locks you into their marketplace and takes a cut. Collectr targets individual collectors. Trading Card Vault is built for the shop owner: your domain, your checkout, your margin — with multi-location and team controls from day one.'
	}
];
