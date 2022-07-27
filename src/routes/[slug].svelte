<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { danger } from "./../lib/utils/toast";
	import Toast from "../components/Toast.svelte";

	let secretId = $page.params.slug;
	let isSecretFound;
	let decryptedMessage;

	const getSecretFromDb = async () => {
		if (!secretId) return;
		const opitonsPost = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(secretId),
		};
		const req = await fetch("/api/retrieveSecret/", opitonsPost);
		const res = await req.json();

		if (!req.ok) {
			console.log(req);
			isSecretFound = false;
			danger(res.message);
		} else if (res.data) {
			isSecretFound = true;
			decryptedMessage = res.data;
		}
	};

	onMount(async () => {
		await getSecretFromDb();
	});
</script>

{#if secretId}
	{#if isSecretFound}
		<p>{decryptedMessage}</p>
	{/if}
{:else}
	<p>No secret ID found</p>
{/if}
<Toast />
