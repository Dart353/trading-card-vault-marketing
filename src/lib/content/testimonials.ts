// TODO: Replace with real shop-owner quotes + logos before launch.
// Keep the `isPlaceholder: true` flag until marketing signs off.

export interface Testimonial {
	quote: string;
	author: string;
	title: string;
	shop: string;
	location: string;
	isPlaceholder: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
	{
		quote:
			'We inventoried 18,000 cards in a single weekend. I was genuinely not expecting the scanner to be this fast. It eats binders alive.',
		author: 'Kendra R.',
		title: 'Owner',
		shop: 'Manaleak Games',
		location: 'Minneapolis, MN',
		isPlaceholder: true
	},
	{
		quote:
			'The widget replaced a $400/mo Shopify app we were fighting with. Our customers buy on our URL now — and our conversion rate doubled.',
		author: 'Marcus T.',
		title: 'Co-owner',
		shop: 'Bolt Lightning TCG',
		location: 'Austin, TX',
		isPlaceholder: true
	},
	{
		quote:
			'Being able to see every binder across three stores in one dashboard is the whole thing. No more calling the other shop to ask if they have an FBB Wasteland.',
		author: 'Priya D.',
		title: 'Operations Lead',
		shop: 'Ironroot Collectibles',
		location: 'Toronto, ON',
		isPlaceholder: true
	}
];

export interface LogoPlaceholder {
	name: string;
	isPlaceholder: boolean;
}

export const PARTNER_LOGOS: LogoPlaceholder[] = [
	{ name: 'Manaleak Games', isPlaceholder: true },
	{ name: 'Bolt Lightning TCG', isPlaceholder: true },
	{ name: 'Ironroot Collectibles', isPlaceholder: true },
	{ name: 'Top of the Curve', isPlaceholder: true },
	{ name: 'Tundra Card Co.', isPlaceholder: true },
	{ name: 'Orrery Games', isPlaceholder: true }
];
