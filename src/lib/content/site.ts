export interface SiteConfig {
	name: string;
	domain: string;
	url: string;
	tagline: string;
	description: string;
	email: string;
	social: {
		twitter?: string;
		linkedin?: string;
		youtube?: string;
	};
	app: {
		signInUrl: string;
		signUpUrl: string;
		bookDemoUrl: string;
	};
}

export const SITE: SiteConfig = {
	name: 'Trading Card Vault',
	domain: 'tcvault.app',
	// TODO: replace with production marketing domain once registered.
	url: 'https://tcvault.app',
	tagline: 'Run your card shop like a national retailer.',
	description:
		'Trading Card Vault is the operating system for local game shops — AI card scanning, live Scryfall pricing, multi-shop inventory, and an embeddable storefront widget built for Magic: The Gathering.',
	email: 'hello@tcvault.app',
	social: {
		// TODO: confirm social handles with marketing before launch.
		twitter: 'https://twitter.com/tcvault',
		linkedin: 'https://www.linkedin.com/company/trading-card-vault'
	},
	app: {
		signInUrl: 'https://admin.tcvault.app/login',
		signUpUrl: 'https://admin.tcvault.app/register',
		// TODO: replace with real booking link (Cal.com / Calendly / HubSpot).
		bookDemoUrl: 'https://cal.com/tcvault/demo'
	}
};

export interface NavLink {
	label: string;
	href: string;
}

export const PRIMARY_NAV: NavLink[] = [
	{ label: 'Features', href: '/features' },
	{ label: 'Widget', href: '/widget' },
	{ label: 'For Shops', href: '/for-shops' },
	{ label: 'Pricing', href: '/pricing' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'About', href: '/about' }
];

export const FOOTER_NAV: { heading: string; links: NavLink[] }[] = [
	{
		heading: 'Product',
		links: [
			{ label: 'Features', href: '/features' },
			{ label: 'Storefront widget', href: '/widget' },
			{ label: 'Pricing', href: '/pricing' },
			{ label: 'Roadmap', href: '/blog' }
		]
	},
	{
		heading: 'Shops',
		links: [
			{ label: 'For LGS owners', href: '/for-shops' },
			{ label: 'ROI calculator', href: '/for-shops#roi' },
			{ label: 'Book a demo', href: '/contact' }
		]
	},
	{
		heading: 'Company',
		links: [
			{ label: 'About', href: '/about' },
			{ label: 'Blog', href: '/blog' },
			{ label: 'Contact', href: '/contact' }
		]
	},
	{
		heading: 'Legal',
		links: [
			{ label: 'Privacy', href: '/legal/privacy' },
			{ label: 'Terms', href: '/legal/terms' }
		]
	}
];
