<script>
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { success } from "./../lib/utils/toast";
	import Toast from "../components/Toast.svelte";
	import LottieNotFound from "./../components/LottieNotFound.svelte";
	import LottieUnlocked from "../components/LottieUnlocked.svelte";
	import Textarea from "./../components/Textarea.svelte";
	import CopyButton from "../components/CopyButton.svelte";
	import { fade, fly } from "svelte/transition";

	let secretId = $page.params.slug;
	let secretText;
	let textElementRef;

	const getSecretFromDb = async () => {
		if (!secretId) return false;
		const opitonsPost = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(secretId),
		};
		const req = await fetch("/api/retrieveSecret/", opitonsPost);
		const res = await req.json();

		if (req.ok) {
			secretText = res.data;
			return res.data;
		} else {
			throw new Error(false);
		}
	};

	let isSecretFound = getSecretFromDb();

	onMount(async () => {
		isSecretFound = await getSecretFromDb();
		console.log({ isSecretFound });
	});
</script>

{#await isSecretFound then decryptedMessage}
	<section class="secret-message-container" in:fly={{ x: -20, duration: 800 }}>
		<div class="secret-message-container--inner">
			<h1 class="whitespace">
				Secret message with the ID <code class="success">{secretId}</code> was retrieved
				successfully!
			</h1>
			<Textarea
				bind:this={textElementRef}
				bind:secretText
				readonly={true}
				class="textarea"
				labelText="Secret message content:"
			/>
			<CopyButton textToCopy={secretText}>Copy message</CopyButton>
			<p class="new-secret found">
				Click <a href="/">here</a> to create a new secret.
			</p>
		</div>
		<div class="lottie-container">
			<LottieUnlocked />
		</div>
	</section>
{:catch}
	<section class="secret-message-container" in:fly={{ y: 40, duration: 800 }}>
		<section class="secret-message-container--inner" in:fly>
			<h1>
				The secret message with the ID <code>{secretId}</code> could not be found!
			</h1>
			<div class="not-available">
				<p>This could be the result of the following:</p>
				<ul>
					<li>The secret message has already been viewd.</li>
					<li>The secret message has expired.</li>
					<li>Or the ID is incorrect</li>
				</ul>
				<p class="new-secret">
					Click <a href="/">here</a> to create a new secret.
				</p>
			</div>
		</section>
		<div class="lottie-container">
			<LottieNotFound />
		</div>
	</section>
{/await}
<Toast />

<style lang="scss">
	.secret-message-container {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-around;
		align-items: flex-end;
		padding: 0 10%;

		.secret-message-container--inner {
			margin-top: 5rem;
		}

		h1 {
			font-size: 1.7rem;
			@media screen and (max-width: 600px) {
				font-size: 1.4rem;
				padding-bottom: 1rem;
			}
		}

		h1.whitespace {
			margin-bottom: 3rem;
		}

		.lottie-container {
			max-width: 35%;
			filter: opacity(0.9);

			@media screen and (max-width: 1000px) {
				display: none;
			}
		}

		.found {
			margin-top: 2.6rem;
			a {
				color: hsl(204, 100%, 30%);
				font-weight: bold;
			}
		}

		.not-available {
			margin-top: 1rem;

			p {
				font-size: 1.1rem;
				margin-bottom: 1rem;
			}
			ul {
				padding-left: 2rem;
			}

			.new-secret {
				margin-top: 3rem;
			}
		}

		code {
			line-height: normal;
			background: rgba(135, 131, 120, 0.15);
			color: #eb5757;
			border-radius: 3px;
			font-size: 85%;
			padding: 0.2em 0.4em;
		}

		code.success {
			color: #1bc670 !important;
		}
	}
</style>
