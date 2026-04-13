export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	author: string;
	publishedAt: string;
	readingMinutes: number;
	tags: string[];
	// Rendered as simple paragraphs/headings in the component. TODO: swap
	// to an MDsveX pipeline if we start publishing heavier technical posts.
	content: { type: 'h2' | 'p' | 'ul'; text?: string; items?: string[] }[];
}

export const BLOG_POSTS: BlogPost[] = [
	{
		slug: 'inventory-10000-magic-cards-weekend',
		title: 'How to inventory 10,000 Magic cards in a weekend',
		excerpt:
			'The playbook a pilot-shop used to migrate 14 years of binders onto Trading Card Vault in 42 hours — without closing the doors.',
		author: 'The Trading Card Vault Team',
		publishedAt: '2026-03-18',
		readingMinutes: 6,
		tags: ['Operations', 'Migration'],
		content: [
			{
				type: 'p',
				text: 'We recently helped an LGS in Ann Arbor migrate roughly 14,000 distinct Magic cards — across a main display case, two binders, and a legacy spreadsheet — onto Trading Card Vault in a single weekend. Here is exactly how we did it, minus the parts where we ate pizza.'
			},
			{ type: 'h2', text: '1. Stage before you scan' },
			{
				type: 'p',
				text: 'The single biggest lever is physical workflow. Break the stacks into condition piles first (NM, LP, MP, HP), then by container. Do not mix binders. Your scanner will cook faster when every card in the stack shares the same destination fields.'
			},
			{ type: 'h2', text: '2. Use the camera-to-inventory mode' },
			{
				type: 'p',
				text: 'Quick Add remembers your last-used condition and location. For a stack of NM cards all going into the "Modern binder — page 12", that means four taps per card after the first one: confirm name, confirm quantity, save.'
			},
			{ type: 'h2', text: '3. Import your existing spreadsheet' },
			{
				type: 'p',
				text: 'Whatever you were tracking in Google Sheets before — paste it into the Bulk Import flow. The column mapper catches the common shapes from TCGPlayer, Crystal Commerce, and Dragon Shield out of the box. Thousands of rows migrate in the background while you keep scanning.'
			},
			{ type: 'h2', text: '4. Spot-check the pricing before you go live' },
			{
				type: 'p',
				text: 'Scryfall pricing is accurate, but your shop might want to hold the line on a few specific SKUs (store favorites, locked-in pre-orders, reserved list). Use custom price overrides on those before you flip the storefront widget on.'
			},
			{ type: 'h2', text: 'Real numbers from that weekend' },
			{
				type: 'ul',
				items: [
					'13,942 cards catalogued across two owners and one part-time staffer',
					'Average scan-to-saved time: 3.2 seconds per card',
					'Total session time: 42 hours, split Friday evening / Saturday / Sunday',
					'Zero storefront downtime — the widget went live Monday morning'
				]
			},
			{
				type: 'p',
				text: "It will not always go this fast. But you will be shocked how quickly the pile of binders on your table stops being a pile."
			}
		]
	},
	{
		slug: 'why-your-lgs-needs-a-storefront-on-your-own-domain',
		title: 'Why your LGS needs a storefront on your own domain',
		excerpt:
			'Selling through TCGPlayer and other marketplaces feels convenient. It is also a slow leak on your margin and your brand. Here is what you are actually giving up.',
		author: 'The Trading Card Vault Team',
		publishedAt: '2026-02-27',
		readingMinutes: 5,
		tags: ['Storefront', 'Strategy'],
		content: [
			{
				type: 'p',
				text: "You run a local game shop. Your weekend FNM regulars know your name. Your beginner-box recommendations have made six new Magic players in the last month. And then someone shows up on a Tuesday saying, \"I bought that card from you on TCGPlayer.\" Did they?"
			},
			{ type: 'h2', text: 'What the marketplaces actually take' },
			{
				type: 'p',
				text: 'Beyond the transaction fee — which you know about — marketplaces take three other things that are harder to put on a spreadsheet: the URL, the brand, and the customer relationship.'
			},
			{
				type: 'ul',
				items: [
					'The URL — your listings live on tcgplayer.com/store/your-shop, not yourshop.com. Every link you share trains customers to return to the marketplace, not to you.',
					"The brand — your listings sit in an infinite list of identical listings. Your shop's personality, the reason locals love coming in on Saturdays, is flattened into a row.",
					"The customer relationship — the receipt, the email address, the post-purchase follow-up — that all belongs to the marketplace. You do not get to email them about next week's draft."
				]
			},
			{ type: 'h2', text: 'What a real storefront on your own domain gives you back' },
			{
				type: 'p',
				text: 'Trading Card Vault\u2019s storefront widget is a single <card-vault-search> web component you embed on your site. Customers browse your live inventory, filter by set and condition, and check out — on yourshop.com. They get your brand. You get the customer relationship back.'
			},
			{ type: 'h2', text: 'You do not have to leave the marketplaces' },
			{
				type: 'p',
				text: "This is not an ultimatum. Keep your marketplace presence for discovery. But make yourshop.com the place where your regulars — the ones who already know you — go to buy. That is where the margin is."
			}
		]
	}
];

export function getPost(slug: string) {
	return BLOG_POSTS.find((post) => post.slug === slug);
}
