import { renderOgImagePng } from '$lib/server/og';

const MAX_TITLE_LENGTH = 140;
const MAX_EYEBROW_LENGTH = 60;

export async function GET({ url }) {
	const rawTitle = url.searchParams.get('title')?.trim();
	const rawEyebrow = url.searchParams.get('eyebrow')?.trim();

	const title = (rawTitle && rawTitle.length > 0 ? rawTitle : 'Run your card shop like a national retailer.').slice(
		0,
		MAX_TITLE_LENGTH
	);
	const eyebrow = (rawEyebrow && rawEyebrow.length > 0 ? rawEyebrow : 'Trading Card Vault').slice(
		0,
		MAX_EYEBROW_LENGTH
	);

	const png = await renderOgImagePng({ title, eyebrow });

	return new Response(new Uint8Array(png), {
		headers: {
			'Content-Type': 'image/png',
			// 1 hour fresh, 1 day stale-while-revalidate — these images almost
			// never change for a given (title, eyebrow) pair.
			'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400'
		}
	});
}
