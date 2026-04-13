// TODO: Pricing below is PLACEHOLDER. Confirm final tiers, prices, and limits
// with the business before launch. Update both the copy here and the JSON-LD
// Product schema on /pricing when values change.

export interface PricingTier {
	id: 'starter' | 'pro' | 'enterprise';
	name: string;
	price: string;
	priceSuffix?: string;
	tagline: string;
	description: string;
	ctaLabel: string;
	ctaHref: string;
	featured?: boolean;
	features: string[];
	limits: {
		shops: string;
		cards: string;
		support: string;
	};
}

export const PRICING_TIERS: PricingTier[] = [
	{
		id: 'starter',
		name: 'Starter',
		price: '$29',
		priceSuffix: '/month',
		tagline: 'Your first 5,000 cards, online in a weekend.',
		description: 'Everything a single-location LGS needs to get off spreadsheets.',
		ctaLabel: 'Start free trial',
		ctaHref: 'https://admin.tcvault.app/register?plan=starter',
		features: [
			'1 physical shop',
			'Up to 5,000 cards in inventory',
			'Scryfall pricing refresh',
			'Manual card entry + CSV import',
			'Order fulfillment workflow',
			'Community email support'
		],
		limits: {
			shops: '1 shop',
			cards: '5,000 cards',
			support: 'Community'
		}
	},
	{
		id: 'pro',
		name: 'Pro',
		price: '$99',
		priceSuffix: '/month',
		tagline: 'The one most shops end up on.',
		description: 'Unlimited inventory, AI scanning, and the storefront widget for shops that live online.',
		ctaLabel: 'Start free trial',
		ctaHref: 'https://admin.tcvault.app/register?plan=pro',
		featured: true,
		features: [
			'Up to 5 physical shops',
			'Unlimited cards in inventory',
			'AI card scanner (Claude vision)',
			'Embeddable <card-vault-search> storefront widget',
			'Team & role management',
			'Priority email support (<24h)'
		],
		limits: {
			shops: 'Up to 5 shops',
			cards: 'Unlimited',
			support: 'Priority email'
		}
	},
	{
		id: 'enterprise',
		name: 'Enterprise',
		price: 'Custom',
		tagline: 'Chains, franchises, and regional retailers.',
		description: 'SSO, dedicated CSM, and the API access to integrate with your existing systems.',
		ctaLabel: 'Talk to sales',
		ctaHref: '/contact',
		features: [
			'Unlimited shops',
			'SSO (SAML / Okta / Google Workspace)',
			'Dedicated customer success manager',
			'API access + webhooks',
			'Custom SLAs and uptime guarantees',
			'Quarterly business review'
		],
		limits: {
			shops: 'Unlimited',
			cards: 'Unlimited',
			support: 'Dedicated CSM'
		}
	}
];

export interface PricingFaq {
	question: string;
	answer: string;
}

export const PRICING_FAQS: PricingFaq[] = [
	{
		question: 'Is there a free trial?',
		answer:
			'Yes. Starter and Pro include a 14-day free trial with full access. No credit card required to start.'
	},
	{
		question: 'Do you charge per transaction?',
		answer:
			'No. We do not take a cut of your sales. You keep 100% of revenue — we just charge a flat subscription.'
	},
	{
		question: 'Can I switch plans later?',
		answer:
			'Anytime. Upgrades are prorated immediately, downgrades take effect at the next billing cycle.'
	},
	{
		question: 'What payment processors does the storefront widget support?',
		answer:
			'Stripe today, with Square on the roadmap. The widget checks out on your domain — no redirect to a marketplace.'
	}
];
