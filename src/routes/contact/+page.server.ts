import { zod4 } from 'sveltekit-superforms/adapters';
import { superValidate, message } from 'sveltekit-superforms';
import { fail } from '@sveltejs/kit';
import { contactSchema } from '$schema/contactSchema';

export async function load() {
	const form = await superValidate(zod4(contactSchema));
	return { form };
}

export const actions = {
	default: async ({ request, fetch }) => {
		const form = await superValidate(request, zod4(contactSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		const response = await fetch('/api/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form.data)
		});

		if (!response.ok) {
			return message(form, 'Something went wrong sending your message. Please try again or email hello@tcvault.app.', {
				status: 500
			});
		}

		return message(form, "Thanks — we'll be in touch within one business day.");
	}
};
