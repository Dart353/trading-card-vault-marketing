import { z } from 'zod';

export const contactSchema = z.object({
	name: z.string().min(1, 'Your name is required').max(120),
	email: z.string().email('Please enter a valid email'),
	shopName: z.string().min(1, 'Your shop name is required').max(120),
	locationCount: z.coerce
		.number()
		.int('Must be a whole number')
		.min(1, 'At least 1')
		.max(500, 'That sounds like a support ticket, not a contact form'),
	message: z.string().min(10, 'Tell us a little more').max(5000)
});

export type ContactSchema = typeof contactSchema;
