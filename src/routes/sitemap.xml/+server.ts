import { SITE } from '$lib/content/site.js';

const STATIC_PATHS: string[] = [
	'/',
	'/features',
	'/pricing',
	'/for-shops',
	'/widget',
	'/about',
	'/contact',
	'/blog',
	'/legal/privacy',
	'/legal/terms'
];

export function GET() {
	const urls = STATIC_PATHS.map(
		(path) => `\t<url><loc>${SITE.url}${path}</loc><changefreq>weekly</changefreq></url>`
	).join('\n');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
