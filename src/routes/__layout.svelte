<script>
	import { goto } from "$app/navigation";

	const handleClickOnLogo = () => {
		goto("/");
	};
</script>

<h1 class="header-logo gradient-text" on:click={handleClickOnLogo}>
	Secrify<span class="bar-code">BAR</span>
</h1>
<slot />
<img alt="synth waves" src="/synthwaves.png" class="synth-waves" />

<style global>
	@import url("https://fonts.googleapis.com/css2?family=Libre+Barcode+39&family=Monoton&family=Roboto+Condensed:wght@300;400;700&display=swap");

	*,
	*::after,
	*::before {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
	}

	body {
		background-color: #f8fafc;
		width: 100%;
		height: 100%;
		font-family: "Roboto Condensed", sans-serif;
	}

	.header-logo {
		font-size: clamp(3rem, 5vw, 5rem);
		text-align: center;
		padding-top: 2rem;
		width: 100%;
		font-family: "Monoton", cursive;
		font-weight: 100;
		cursor: pointer;
	}
	.bar-code {
		font-family: "Libre Barcode 39", cursive;
		font-size: inherit;
		padding-left: 2rem;
	}

	.gradient-text {
		background: linear-gradient(
			to left,
			#4361ee 20%,
			#ff006e 40%,
			#ff006e 60%,
			#4361ee 80%
		);
		background-size: 200% auto;

		color: #000;
		background-clip: text;
		text-fill-color: transparent;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: shine 3s linear infinite;
		
	}
	@keyframes shine {
		to {
			background-position: 200% center;
		}
	}

	.synth-waves {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		filter: opacity(0.06);
	}
</style>
