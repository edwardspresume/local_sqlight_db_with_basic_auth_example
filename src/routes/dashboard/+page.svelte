<script lang="ts">
	import type { PageData } from './$types';

	import SubmitButton from '$components/form/SubmitButton.svelte';

	export let data: PageData;
</script>

<h1>
	Hello {data.loggedOnUser}
</h1>

<form method="post">
	<SubmitButton>Logout</SubmitButton>
</form>
