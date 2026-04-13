// Curated set of real Magic: The Gathering printings used for marketing
// visuals. Image URLs come directly from the Scryfall API — include the
// `?<version>` query string so we hit their long-lived CDN cache.
//
// Attribution / usage:
//   - Card art, names, and text © Wizards of the Coast. Images provided by
//     Scryfall (https://scryfall.com) and used under their image policy.
//   - Trading Card Vault is an unofficial tool and not endorsed by Wizards
//     of the Coast.
// TODO: Before launch, review the Wizards of the Coast Fan Content Policy
// (https://company.wizards.com/en/legal/fancontentpolicy) and confirm this
// usage is acceptable for marketing materials. If not, swap to original
// stylized card art.

export interface CardPrinting {
	name: string;
	set: string;
	collectorNumber: string;
	rarity: 'common' | 'uncommon' | 'rare' | 'mythic';
	priceUsd: string;
	imageSmall: string;
	imageNormal: string;
	scryfallId: string;
}

export const FEATURED_CARDS: CardPrinting[] = [
	{
		scryfallId: 'd5806e68-1054-458e-866d-1f2470f682b2',
		name: 'The One Ring',
		set: 'LTR',
		collectorNumber: '246',
		rarity: 'mythic',
		priceUsd: '101.21',
		imageSmall:
			'https://cards.scryfall.io/small/front/d/5/d5806e68-1054-458e-866d-1f2470f682b2.jpg?1763472900',
		imageNormal:
			'https://cards.scryfall.io/normal/front/d/5/d5806e68-1054-458e-866d-1f2470f682b2.jpg?1763472900'
	},
	{
		scryfallId: 'a9738cda-adb1-47fb-9f4c-ecd930228c4d',
		name: 'Ragavan, Nimble Pilferer',
		set: 'MH2',
		collectorNumber: '138',
		rarity: 'mythic',
		priceUsd: '47.48',
		imageSmall:
			'https://cards.scryfall.io/small/front/a/9/a9738cda-adb1-47fb-9f4c-ecd930228c4d.jpg?1681963138',
		imageNormal:
			'https://cards.scryfall.io/normal/front/a/9/a9738cda-adb1-47fb-9f4c-ecd930228c4d.jpg?1681963138'
	},
	{
		scryfallId: 'd67be074-cdd4-41d9-ac89-0a0456c4e4b2',
		name: 'Sheoldred, the Apocalypse',
		set: 'DMU',
		collectorNumber: '107',
		rarity: 'mythic',
		priceUsd: '94.86',
		imageSmall:
			'https://cards.scryfall.io/small/front/d/6/d67be074-cdd4-41d9-ac89-0a0456c4e4b2.jpg?1674057568',
		imageNormal:
			'https://cards.scryfall.io/normal/front/d/6/d67be074-cdd4-41d9-ac89-0a0456c4e4b2.jpg?1674057568'
	},
	{
		scryfallId: '7c024bae-5631-4e20-ac69-df392ac9e109',
		name: 'Orcish Bowmasters',
		set: 'LTR',
		collectorNumber: '103',
		rarity: 'rare',
		priceUsd: '45.10',
		imageSmall:
			'https://cards.scryfall.io/small/front/7/c/7c024bae-5631-4e20-ac69-df392ac9e109.jpg?1745319944',
		imageNormal:
			'https://cards.scryfall.io/normal/front/7/c/7c024bae-5631-4e20-ac69-df392ac9e109.jpg?1745319944'
	},
	{
		scryfallId: '5bd498cc-a609-4457-9325-6888d59ca36f',
		name: 'Wrenn and Six',
		set: '2X2',
		collectorNumber: '296',
		rarity: 'mythic',
		priceUsd: '9.83',
		imageSmall:
			'https://cards.scryfall.io/small/front/5/b/5bd498cc-a609-4457-9325-6888d59ca36f.jpg?1673149294',
		imageNormal:
			'https://cards.scryfall.io/normal/front/5/b/5bd498cc-a609-4457-9325-6888d59ca36f.jpg?1673149294'
	},
	{
		scryfallId: '24c0d87b-0049-4beb-b9cb-6f813b7aa7dc',
		name: 'Fable of the Mirror-Breaker',
		set: 'NEO',
		collectorNumber: '141',
		rarity: 'rare',
		priceUsd: '7.90',
		imageSmall:
			'https://cards.scryfall.io/small/front/2/4/24c0d87b-0049-4beb-b9cb-6f813b7aa7dc.jpg?1691108103',
		imageNormal:
			'https://cards.scryfall.io/normal/front/2/4/24c0d87b-0049-4beb-b9cb-6f813b7aa7dc.jpg?1691108103'
	}
];
