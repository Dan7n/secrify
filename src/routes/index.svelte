<script>
	import { fade, fly } from "svelte/transition";
	import { onMount } from "svelte";

	// Components
	import Textarea from "../components/Textarea.svelte";
	import Dropdown from "./../components/Dropdown.svelte";
	import Checkbox from "../components/Checkbox.svelte";
	import SubmitBtn from "../components/SubmitBtn.svelte";
	import Toast from "../components/Toast.svelte";
	import LottieSuccess from "../components/LottieSuccess.svelte";
	import LottieConfetti from "../components/LottieConfetti.svelte";


	// Utils
	import { success, danger } from "./../lib/utils/toast";
	import { page } from "$app/stores";

	let currentPageUrl;

	onMount(() => {
		if (!window) return;
		currentPageUrl = window.location;
	});

	const dropdownOptions = [
		{ displayText: "30 Minutes", value: 1800000 },
		{ displayText: "5 Hours", value: 18000000 },
		{ displayText: "1 Day", value: 86400000 },
		{ displayText: "1 Week", value: 604800000 },
	];
	let selectedDuration = dropdownOptions[0].value;
	let secretText = "";
	let oneTimeView = true;
	// let secretId = null;
	let secretId = "l63cd8xmxvu9gbsd5xo";

	const sendRequest = async () => {
		if (!secretText || !secretText.trim())
			return danger("Please add a valid secret body");

		const requestBody = { secretText, selectedDuration, oneTimeView };
		const opitonsPost = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(requestBody),
		};

		try {
			const req = await fetch("/api/createSecret", opitonsPost);
			const res = await req.json();
			if (!req.ok) throw new Error(res.message || "Something went wrong");
			secretId = res.secretId;
			console.log(res);
		} catch (error) {
			danger(error.message);
		}
	};
</script>

<h1>Secrify</h1>
<main>
	{#if !secretId}
		<section id="scrifyBody" in:fade out:fly={{ x: 20, duration: 400 }}>
			<Textarea bind:secretText />
			<Dropdown options={dropdownOptions} bind:selected={selectedDuration} />
			<Checkbox bind:oneTimeView />
			<SubmitBtn handleSubmit={sendRequest} />
			<Toast />
		</section>
	{/if}
	{#if secretId && currentPageUrl}
	<LottieConfetti />
		<section
			in:fly={{ y: 200, duration: 2000, delay: 400 }}
			out:fade
			class="sucessMessage"
		>
			<div>
				<LottieSuccess />
			</div>
			<div>
				<p>
					Your secret has successfully been created! Visit the following URL to
					decrypt the secret message:
				</p>
				<code>{currentPageUrl}{secretId}</code>
			</div>
		</section>
	{/if}
</main>

<style lang="scss">
	h1 {
		font-size: 3rem;
		text-align: center;
		margin-top: 4rem;
	}
	main {
		width: 100%;
		height: calc(100vh - 4rem);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5rem;

		#scrifyBody {
			width: 40%;
			display: flex;
			justify-content: center;
			align-items: stretch;
			flex-direction: column;
			gap: 3rem;
		}
	}

	.sucessMessage {
		/* border: 1px solid red; */
		padding: 1rem 2rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		border-radius: 4px;
		display: flex;
		gap: 1.9rem;
		position: relative;
		z-index: 20;

		code {
			margin-top: 1rem;
			padding: 0.5rem 1rem;
			display: block;
			background-color: #ecfdf5;
			box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		}
	}
</style>
