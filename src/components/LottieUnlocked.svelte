<script>
	let lottiePlayer;
	import { onMount } from "svelte";
	onMount(async () => {
		lottiePlayer = await import("@lottiefiles/lottie-player");
	});
</script>

{#if lottiePlayer}
	<lottie-player
		src="https://assets1.lottiefiles.com/packages/lf20_qf1pt6ua.json"
		background="transparent"
		speed="1"
		style="width: 320px; height: 320px;"
		autoplay
	/>
{/if}
