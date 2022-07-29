<script>
	export let secretText;
	export let readonly = false;
	export let labelText = "What text would you like to secrify?";

	const handleChange = (e) => {
		const { value } = e.target;
		if (isTextareaError && value.length !== 0) {
			isTextareaError = false;
		} else {
			isTextareaError = true;
		}
	};
</script>

<label for="secretText" class="secretTextContainer">
	<p>{labelText}</p>
	<textarea
		id="secretText"
		on:change={handleChange}
		bind:value={secretText}
		{readonly}
		spellcheck="false"
	/>
</label>

<style lang="scss">
	label {
		cursor: pointer;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	textarea {
		height: 6rem;
		resize: none;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
		font-size: inherit;
		font-family: inherit;
		padding: 8px;
		border-radius: 3px;
	}
</style>
