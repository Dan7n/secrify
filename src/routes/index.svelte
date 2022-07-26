<script>
	import Textarea from "../components/Textarea.svelte";
	import Dropdown from "./../components/Dropdown.svelte";
	import Checkbox from "../components/Checkbox.svelte";
	import SubmitBtn from "../components/SubmitBtn.svelte";
	import Toast from "../components/Toast.svelte";
	import { toast } from '@zerodevx/svelte-toast'
	import { success, danger } from "./../lib/utils/toast"



	const dropdownOptions = [
		{ displayText: "30 Minutes", value: 1800000 },
		{ displayText: "5 Hours", value: 18000000 },
		{ displayText: "1 Day", value: 86400000 },
		{ displayText: "1 Week", value: 604800000 },
	];
	let selectedDuration = dropdownOptions[0].value;
	let secretText = "";
	let oneTimeView = true;

	const sendRequest = async () => {
		if (!secretText || !secretText.trim()) return danger("Please add a valid secret body")

		const requestBody = { secretText, selectedDuration, oneTimeView };
		const opitonsPost = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(requestBody),
		};

		try {
			const req = await fetch("/api/createSecret", opitonsPost);
			const res = await req.json();
			console.log(req);
		} catch (error) {
			console.error(error.message);
		}
	};
</script>

<main>
	<h1>Secrify</h1>
	<section id="scrifyBody">
		<Textarea bind:secretText />
		<Dropdown options={dropdownOptions} bind:selected={selectedDuration} />
		<Checkbox bind:oneTimeView />
		<SubmitBtn handleSubmit={sendRequest} />
		<Toast />
	</section>
</main>

<style lang="scss">
	main {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 5rem;

		h1 {
			font-size: 3rem;
		}

		#scrifyBody {
			width: 40%;
			display: flex;
			justify-content: center;
			align-items: stretch;
			flex-direction: column;
			gap: 3rem;
		}
	}
</style>
