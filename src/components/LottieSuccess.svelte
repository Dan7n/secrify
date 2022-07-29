<script>
	let lottiePlayer;
	import { onMount } from "svelte";
	onMount(async () => {
		lottiePlayer = (await import("@lottiefiles/lottie-player"));
	});
</script>

{#if lottiePlayer}
	<lottie-player
		autoplay
		controls={false}
		mode="normal"
		src="https://assets5.lottiefiles.com/packages/lf20_ApoETF.json"
		style="width: 40px"
	/>
{/if}
