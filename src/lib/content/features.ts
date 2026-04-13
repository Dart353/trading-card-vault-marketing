export interface Feature {
	slug: string;
	title: string;
	tagline: string;
	description: string;
	bullets: string[];
	icon:
		| 'scan'
		| 'tag'
		| 'warehouse'
		| 'store'
		| 'clipboardCheck'
		| 'users'
		| 'upload'
		| 'sliders'
		| 'chart'
		| 'camera';
	group: 'inventory' | 'scanning' | 'widget' | 'orders' | 'team';
}

export const FEATURES: Feature[] = [
	{
		slug: 'ai-card-scanner',
		title: 'AI-powered card scanner',
		tagline: 'Point, shoot, catalog.',
		description:
			'Hold a Magic card up to your phone or laptop camera and Claude vision identifies the exact printing in under a second. No barcode sheets, no sleeve-by-sleeve typing.',
		bullets: [
			'Recognizes name, set, collector number, and foiling from a single frame',
			'Auto-pauses when no card is detected — no wasted API calls',
			'Works in sleeves, at an angle, in normal store lighting'
		],
		icon: 'scan',
		group: 'scanning'
	},
	{
		slug: 'scryfall-pricing',
		title: 'Real-time Scryfall pricing',
		tagline: 'Every card, priced like it is 2025 — because it is.',
		description:
			'Each line in your inventory is continuously matched to Scryfall. USD, foil, oracle text, set, rarity, artwork — all fresh, all the time.',
		bullets: [
			'Automatic nightly refresh with on-demand repull per card',
			'Override pricing per SKU when you want to hold the line',
			'Vendor cost + margin tracked separately from public price'
		],
		icon: 'tag',
		group: 'scanning'
	},
	{
		slug: 'multi-shop-inventory',
		title: 'Multi-shop, multi-location inventory',
		tagline: 'One login. Every shop. Every binder.',
		description:
			'Track which binder, display case, or drawer each card lives in — across every physical location you operate. Fulfillment emails tell staff exactly where to pick.',
		bullets: [
			'Shop → location → container hierarchy out of the box',
			'Assign staff to specific shops with RBAC',
			'Aggregated inventory value rolls up across locations'
		],
		icon: 'warehouse',
		group: 'inventory'
	},
	{
		slug: 'storefront-widget',
		title: 'Embeddable storefront widget',
		tagline: 'Your domain. Your customers. Your margin.',
		description:
			'Drop one <card-vault-search> web component into your existing site. Customers browse live inventory, filter by set, rarity, condition, and foil, add to cart, and check out — all on your domain.',
		bullets: [
			'Works on Wix, Squarespace, Shopify, WordPress, or hand-rolled HTML',
			'Themeable to match your brand',
			'No third-party marketplace skimming your listings'
		],
		icon: 'store',
		group: 'widget'
	},
	{
		slug: 'order-fulfillment',
		title: 'Order fulfillment workflow',
		tagline: 'Pending → Confirmed → Ready → Complete.',
		description:
			'Orders move through a real pipeline, not a single "paid" flag. Every stage triggers a transactional email to both the customer and the shop via Brevo.',
		bullets: [
			'Pick list emails include exact binder and slot',
			'Customer sees honest, specific status updates',
			'Refund, partial-fulfill, and cancel flows built in'
		],
		icon: 'clipboardCheck',
		group: 'orders'
	},
	{
		slug: 'team-roles',
		title: 'Team & role management',
		tagline: 'Owner, admin, member — and every shop in between.',
		description:
			'Invite staff, assign them to specific shops, and give them exactly the permissions they need. JWT-based auth with email verification baked in.',
		bullets: [
			'Owner / admin / member roles with shop-scoped access',
			'Email verification required before first login',
			'Session and device management per user'
		],
		icon: 'users',
		group: 'team'
	},
	{
		slug: 'bulk-import',
		title: 'Bulk CSV import & export',
		tagline: 'Migrate a decade of binders in an afternoon.',
		description:
			'Async job processing chews through tens of thousands of rows with live progress. Export any time for backups or external listings.',
		bullets: [
			'Background jobs via BullMQ with retry and error reporting',
			'Flexible column mapping — bring your own spreadsheet',
			'Round-trip export preserves every attribute'
		],
		icon: 'upload',
		group: 'inventory'
	},
	{
		slug: 'card-attributes',
		title: 'Detailed card attributes',
		tagline: 'The fields a real card buyer actually asks about.',
		description:
			'Condition (NM/LP/MP/HP/DMG), foil, language, PSA grade, custom price override, vendor cost, internal notes — all first-class, not tacked-on custom fields.',
		bullets: [
			'Condition-aware pricing suggestions',
			'PSA and BGS grade support',
			'Internal notes separate from public listing text'
		],
		icon: 'sliders',
		group: 'inventory'
	},
	{
		slug: 'dashboard',
		title: 'Dashboard & analytics',
		tagline: 'The numbers your CPA keeps asking for.',
		description:
			'At-a-glance totals for card count, aggregated inventory value, active shops, and pending orders — per shop or company-wide.',
		bullets: [
			'Trend lines for inventory value over time',
			'Top-selling sets and printings',
			'Orders by status, aged pending-order alerts'
		],
		icon: 'chart',
		group: 'inventory'
	},
	{
		slug: 'quick-add',
		title: 'Camera-to-inventory quick add',
		tagline: 'Seconds per card, not minutes.',
		description:
			'Scan → identify → confirm quantity, condition, and location → saved. Purpose-built for the reality of sitting in front of a pile at close.',
		bullets: [
			'Saves last-used condition + location to cut taps',
			'Keyboard shortcuts for high-volume sessions',
			'Works offline-ish — queues uploads on spotty shop wifi'
		],
		icon: 'camera',
		group: 'scanning'
	}
];

export const VALUE_PROPS = [
	{
		title: 'Scan',
		description: 'Claude vision reads the card. You confirm. Done.',
		icon: 'scan' as const
	},
	{
		title: 'Price',
		description: 'Scryfall USD and foil pricing refreshes automatically.',
		icon: 'tag' as const
	},
	{
		title: 'Sell',
		description: 'Embed the storefront widget on the shop\u2019s own site.',
		icon: 'store' as const
	}
];
