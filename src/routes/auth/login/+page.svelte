<script lang="ts">
	import type { PageData } from './$types';

	import { superForm } from 'sveltekit-superforms/client';

	import { UserLogInSchema } from '$validations/UserLogInSchema';

	import InputField from '$components/form/InputField.svelte';
	import SubmitButton from '$components/form/SubmitButton.svelte';

	export let data: PageData;

	const { enhance, form, errors } = superForm(data.userLoginFormData, {
		resetForm: true,
		taintedMessage: null,
		validators: UserLogInSchema
	});
</script>

<form class="space-y-4" method="post" use:enhance>
	<InputField
		name="email"
		label="Email"
		type="email"
		bind:value={$form.email}
		errorMessage={$errors.email}
	/>
	<InputField
		name="password"
		label="Password"
		type="password"
		bind:value={$form.password}
		errorMessage={$errors.password}
	/>

	<SubmitButton />
</form>
