<script lang="ts">
	import { Button } from '$lib/components/shadcn/ui/button/index.js';
	import { Input } from '$lib/components/shadcn/ui/input/index.js';
	import { Label } from '$lib/components/shadcn/ui/label/index.js';
	import { Textarea } from '$lib/components/shadcn/ui/textarea/index.js';
	import { superForm } from 'sveltekit-superforms';
	import { zod4 } from 'sveltekit-superforms/adapters';
	import { contactSchema } from '$schema/contactSchema';
	import type { SuperValidated, Infer } from 'sveltekit-superforms';
	import { toast } from 'svelte-sonner';

	interface ContactFormProps {
		data: SuperValidated<Infer<typeof contactSchema>>;
	}

	const { data }: ContactFormProps = $props();

	// Superforms' `superForm` captures initial data at setup and manages its
	// own reactive state afterwards, so reading `data` non-reactively here
	// is intentional.
	// svelte-ignore state_referenced_locally
	const form = superForm(data, {
		validators: zod4(contactSchema),
		onResult: ({ result }) => {
			if (result.type === 'success') {
				toast.success('Message sent — we\u2019ll be in touch.');
			} else if (result.type === 'failure') {
				toast.error('Please fix the highlighted fields and try again.');
			} else if (result.type === 'error') {
				toast.error('Something went wrong. Please try again.');
			}
		}
	});

	const {
		form: formData,
		errors,
		enhance,
		submitting,
		message: formMessage
	} = form;
</script>

<form method="POST" class="space-y-6" use:enhance>
	<div class="grid gap-4 sm:grid-cols-2">
		<div>
			<Label for="contact-name">Your name</Label>
			<Input
				id="contact-name"
				name="name"
				bind:value={$formData.name}
				aria-invalid={$errors.name ? 'true' : undefined}
				class="mt-1.5"
				autocomplete="name"
			/>
			{#if $errors.name}
				<p class="text-destructive mt-1 text-xs">{$errors.name}</p>
			{/if}
		</div>
		<div>
			<Label for="contact-email">Email</Label>
			<Input
				id="contact-email"
				name="email"
				type="email"
				bind:value={$formData.email}
				aria-invalid={$errors.email ? 'true' : undefined}
				class="mt-1.5"
				autocomplete="email"
			/>
			{#if $errors.email}
				<p class="text-destructive mt-1 text-xs">{$errors.email}</p>
			{/if}
		</div>
	</div>

	<div class="grid gap-4 sm:grid-cols-[2fr_1fr]">
		<div>
			<Label for="contact-shop">Shop name</Label>
			<Input
				id="contact-shop"
				name="shopName"
				bind:value={$formData.shopName}
				aria-invalid={$errors.shopName ? 'true' : undefined}
				class="mt-1.5"
			/>
			{#if $errors.shopName}
				<p class="text-destructive mt-1 text-xs">{$errors.shopName}</p>
			{/if}
		</div>
		<div>
			<Label for="contact-locations">Locations</Label>
			<Input
				id="contact-locations"
				name="locationCount"
				type="number"
				min="1"
				bind:value={$formData.locationCount}
				aria-invalid={$errors.locationCount ? 'true' : undefined}
				class="mt-1.5"
			/>
			{#if $errors.locationCount}
				<p class="text-destructive mt-1 text-xs">{$errors.locationCount}</p>
			{/if}
		</div>
	</div>

	<div>
		<Label for="contact-message">What can we help with?</Label>
		<Textarea
			id="contact-message"
			name="message"
			rows={5}
			bind:value={$formData.message}
			aria-invalid={$errors.message ? 'true' : undefined}
			class="mt-1.5"
			placeholder="Tell us about your shop, your current setup, and what you're hoping to fix."
		/>
		{#if $errors.message}
			<p class="text-destructive mt-1 text-xs">{$errors.message}</p>
		{/if}
	</div>

	<div class="flex items-center gap-4">
		<Button type="submit" size="lg" disabled={$submitting}>
			{#if $submitting}
				Sending…
			{:else}
				Send message
			{/if}
		</Button>
		{#if $formMessage}
			<p class="text-sm">{$formMessage}</p>
		{/if}
	</div>
</form>
