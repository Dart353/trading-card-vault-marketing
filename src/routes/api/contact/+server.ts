import { json } from '@sveltejs/kit';
import { contactSchema } from '$schema/contactSchema';

// TODO: Wire this to Brevo (or your transactional email provider).
//   1. Add BREVO_API_KEY and CONTACT_TO_EMAIL to your env.
//   2. Forward the validated payload to Brevo's /v3/smtp/email endpoint.
//   3. Also consider writing to a backing store (Postgres / Airtable /
//      HubSpot) so marketing has a system of record for inbound leads.
// For now we simply log and return 202 so the form submission round-trips.

export async function POST({ request }) {
	const raw = await request.json();
	const parsed = contactSchema.safeParse(raw);

	if (!parsed.success) {
		return json({ error: 'Invalid payload' }, { status: 400 });
	}

	console.info('[contact] TODO: forward to Brevo', parsed.data);

	return json({ ok: true }, { status: 202 });
}
