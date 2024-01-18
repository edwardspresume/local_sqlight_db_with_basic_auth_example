<script lang="ts">
	import type { PageData } from './$types';

	import InputField from '$components/form/InputField.svelte';
	import SubmitButton from '$components/form/SubmitButton.svelte';

	export let data: PageData;
</script>

<form class="space-y-4">
	<InputField name="email" label="Email" type="email" />
	<InputField name="password" label="Password" type="password" />

	<SubmitButton />
</form>
