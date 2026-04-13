import satori from 'satori';
import { html as toReactNode } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const FONT_DIR = path.join(process.cwd(), 'static', 'fonts');

let cachedFonts: {
	interRegular: ArrayBuffer;
	interSemiBold: ArrayBuffer;
	interBold: ArrayBuffer;
	frauncesBold: ArrayBuffer;
} | null = null;

function toArrayBuffer(buffer: Buffer): ArrayBuffer {
	return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength) as ArrayBuffer;
}

async function getFonts() {
	if (cachedFonts) return cachedFonts;
	const [interRegular, interSemiBold, interBold, frauncesBold] = await Promise.all([
		readFile(path.join(FONT_DIR, 'Inter-Regular.woff')),
		readFile(path.join(FONT_DIR, 'Inter-SemiBold.woff')),
		readFile(path.join(FONT_DIR, 'Inter-Bold.woff')),
		readFile(path.join(FONT_DIR, 'Fraunces-Bold.woff'))
	]);
	cachedFonts = {
		interRegular: toArrayBuffer(interRegular),
		interSemiBold: toArrayBuffer(interSemiBold),
		interBold: toArrayBuffer(interBold),
		frauncesBold: toArrayBuffer(frauncesBold)
	};
	return cachedFonts;
}

export interface OgImageOptions {
	title: string;
	eyebrow?: string;
	tagline?: string;
}

export async function renderOgImagePng(options: OgImageOptions): Promise<Buffer> {
	const { title, eyebrow = 'Trading Card Vault', tagline = 'tcvault.app' } = options;

	const fonts = await getFonts();

	const markup = toReactNode(`
		<div style="
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 1200px;
			height: 630px;
			padding: 72px;
			background:
				radial-gradient(60% 55% at 50% 0%, rgba(94, 130, 255, 0.45) 0%, rgba(94, 130, 255, 0) 70%),
				linear-gradient(135deg, #0e1626 0%, #0a0f1a 65%, #1a1230 100%);
			color: #f5f7ff;
			font-family: 'Inter', sans-serif;
			position: relative;
			overflow: hidden;
		">
			<div style="display: flex; align-items: center; gap: 18px;">
				<div style="
					display: flex;
					width: 48px;
					height: 48px;
					border-radius: 12px;
					background: #3A6FF1;
					align-items: center;
					justify-content: center;
					color: #ffffff;
					font-family: 'Fraunces', serif;
					font-weight: 700;
					font-size: 28px;
					line-height: 1;
				">
					T
				</div>
				<div style="
					font-family: 'Inter', sans-serif;
					font-weight: 600;
					font-size: 22px;
					letter-spacing: -0.01em;
					color: #f5f7ff;
				">
					Trading Card Vault
				</div>
			</div>

			<div style="display: flex; flex-direction: column; gap: 20px;">
				<div style="
					font-family: 'Inter', sans-serif;
					font-size: 18px;
					font-weight: 600;
					letter-spacing: 0.22em;
					text-transform: uppercase;
					color: #7aa2ff;
				">
					${escapeHtml(eyebrow)}
				</div>
				<div style="
					display: flex;
					font-family: 'Fraunces', serif;
					font-weight: 700;
					font-size: 76px;
					line-height: 1.04;
					letter-spacing: -0.02em;
					color: #ffffff;
					max-width: 980px;
				">
					${escapeHtml(title)}
				</div>
			</div>

			<div style="
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-family: 'Inter', sans-serif;
				font-size: 22px;
				font-weight: 500;
				color: rgba(245, 247, 255, 0.55);
			">
				<div style="display: flex;">${escapeHtml(tagline)}</div>
				<div style="display: flex; align-items: center; gap: 12px;">
					<div style="display: flex; width: 10px; height: 10px; border-radius: 9999px; background: #3A6FF1;"></div>
					<div style="display: flex;">Run your card shop like a national retailer</div>
				</div>
			</div>
		</div>
	`);

	const svg = await satori(markup, {
		width: 1200,
		height: 630,
		fonts: [
			{ name: 'Inter', data: fonts.interRegular, weight: 400, style: 'normal' },
			{ name: 'Inter', data: fonts.interSemiBold, weight: 600, style: 'normal' },
			{ name: 'Inter', data: fonts.interBold, weight: 700, style: 'normal' },
			{ name: 'Fraunces', data: fonts.frauncesBold, weight: 700, style: 'normal' }
		]
	});

	const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
	return Buffer.from(resvg.render().asPng());
}

function escapeHtml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}
