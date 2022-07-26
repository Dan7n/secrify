<script>
	export let secretText;
</script>

<label for="secretText" class="secretTextContainer">
	<p>What text would you like to secrify?</p>
	<textarea id="secretText" bind:value={secretText} />
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
		border: none;
		&:focus {
			border: none;
		}
	}
</style>
