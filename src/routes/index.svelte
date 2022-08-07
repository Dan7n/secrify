<script>
	import { fade, fly } from "svelte/transition";
	import { quintOut } from "svelte/easing";
	import { onMount } from "svelte";

	// Stores
	import { isDarkMode } from "./../stores";
	import { session } from "$app/stores"

	// Components
	import Textarea from "../components/Textarea.svelte";
	import Dropdown from "./../components/Dropdown.svelte";
	import Checkbox from "../components/Checkbox.svelte";
	import SubmitBtn from "../components/SubmitBtn.svelte";
	import Toast from "../components/Toast.svelte";
	import LottieSuccess from "../components/LottieSuccess.svelte";
	import LottieConfetti from "../components/LottieConfetti.svelte";
	import CopyButton from "../components/CopyButton.svelte";
	import IndexHead from "../components/IndexHead.svelte";

	// Utils
	import { danger } from "./../lib/utils/toast";
	import Information from "../components/Information.svelte";

	let currentPageUrl;
	let readyToAnimate = false;
	
	onMount(() => {
		readyToAnimate = true;
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
	let secretId;

	console.log($isDarkMode)

	const sendRequest = async () => {
		if (!secretText || !secretText.trim()) {
			return danger("Please add a valid secret body");
		}

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
		} catch (error) {
			danger(error.message);
		}
	};
</script>


<IndexHead />
{#if readyToAnimate}
	<main>
		{#if !secretId}
			<section
				id="scrifyBody"
				in:fly={{ y: -30, duration: 1200, easing: quintOut }}
				out:fly={{ x: 20, duration: 400 }}
			>
				<Information />
				<Textarea bind:secretText />
				<Dropdown options={dropdownOptions} bind:selected={selectedDuration} />
				<Checkbox bind:oneTimeView />
				<SubmitBtn handleSubmit={sendRequest} />
			</section>
		{/if}
		{#if secretId && currentPageUrl}
			<div class="confetti-container">
				<LottieConfetti />
			</div>
			<section
				in:fly={{ y: 200, duration: 2000, delay: 400 }}
				out:fade
				class="sucessMessage"
			>
				<div>
					<LottieSuccess />
				</div>
				<div class="sucessMessage__inner">
					<p>
						Your secret has successfully been created! Visit the following URL
						to decrypt the secret message:
					</p>
					<code>{currentPageUrl}{secretId}</code>
					<CopyButton
						textToCopy={currentPageUrl + secretId}
						color="linear-gradient(to left, hsl(152, 81%, 90%) 0%, hsl(152, 81%, 83%) 100%)"
						>Copy URL</CopyButton
					>
					<p
						class="new-secret"
						in:fly={{ x: 100, duration: 2000, delay: 1000 }}
					>
						Click <a href="/">here</a> to create a new secret.
					</p>
				</div>
			</section>
		{/if}
		<Toast />
	</main>
{/if}

<style lang="scss">
	main {
		width: 100%;
		height: 100%;
		padding-top: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5rem;

		@media screen and (max-width: 768px) {
			padding-inline: 1rem;
		}

		#scrifyBody {
			width: clamp(20rem, 50%, 100%);
			display: flex;
			justify-content: center;
			align-items: stretch;
			flex-direction: column;
			gap: 2rem;
		}
	}

	.confetti-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	.sucessMessage {
		padding: 2rem 2rem;
		box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
		border-radius: 4px;
		display: flex;
		gap: 1.9rem;
		position: relative;
		z-index: 20;
		background-color: white;

		.new-secret {
			padding-top: 1.9rem;
		}

		@media screen and (max-width: 768px) {
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 2rem;
			padding: 2.3rem 3rem;
			margin-top: -2rem;
			width: 100%;

			.sucessMessage__inner {
				width: 100%;
				padding-top: 1.3rem;
				display: flex;
				flex-direction: column;
				align-items: stretch;
				text-align: center;
			}
		}

		code {
			margin-top: 1rem;
			padding: 0.5rem 1rem;
			display: block;
			background-color: #ecfdf5;
			box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
			overflow-wrap: break-word;
			text-align: left;
		}
	}
</style>
