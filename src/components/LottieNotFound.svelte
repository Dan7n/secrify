<script>
	let lottiePlayer;
	import { onMount } from "svelte";
	onMount(async () => {
		lottiePlayer = await import("@lottiefiles/lottie-player");
	});
</script>

{#if lottiePlayer}
	<lottie-player
		src="https://assets9.lottiefiles.com/packages/lf20_r71cen62.json"
		background="transparent"
		speed="1"
		style="width: 400px; height: 400px;"
		loop
		autoplay
	/>
{/if}
