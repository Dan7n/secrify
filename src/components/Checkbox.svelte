<script>
	import { fly } from "svelte/transition";
	export let oneTimeView = true;
</script>

<label in:fly={{ y: -30, duration: 1200, delay: 650 }}>
	<input
		type="checkbox"
		id="oneTimeView"
		name="oneTimeView"
		bind:checked={oneTimeView}
	/>
	One-time secret?
</label>
