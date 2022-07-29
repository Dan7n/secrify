<script>
	import { fly } from "svelte/transition";
</script>

<section in:fly={{ y: -30, duration: 1200, delay: 100 }}
>
	<h1>How this works 📚</h1>
	<p>
		Secrify is an simple applicaton that allows you to share secret, encrypted
		messages.
	</p>
	<p>
		All secrets are encrypted using a secure <a
			href="https://en.wikipedia.org/wiki/Advanced_Encryption_Standard"
			target="_blank"
			rel="noopener noreferrer">AES 256-bit encryption algorithm</a
		> - the same algorithm that's used by the NSA to protect classified or sensitive
		Information - and expire after a set amount of time or after viewing them once.
	</p>
	<p>
		To get started, type your secret in the text box below, choose which
		expiration option you want, and press the Secrify button.
	</p>
</section>

<style lang="scss">
	section {
		margin-bottom: 1.4rem;
		h1 {
			font-size: 1.9rem;
			padding-bottom: 1rem;
		}
		p {
			padding: 4px 0;
		}
		a {
			background: linear-gradient(
				to right,
				hsl(204, 100%, 30%),
				hsl(204, 100%, 50%)
			);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			text-fill-color: transparent;
			font-weight: bold;
			transition: all 400ms ease;
			&:hover {
				filter: brightness(1.4);
			}
		}
	}
</style>
