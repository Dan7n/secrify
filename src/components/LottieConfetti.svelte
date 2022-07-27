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
		src="https://assets5.lottiefiles.com/packages/lf20_rovf9gzu.json"
        style="width: 400px; height: 400px; position: absolute; top: 20%; left: 50%; z-index: 1; transform: translateX(-50%);"
	/>
{/if}
