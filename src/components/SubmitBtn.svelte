<script>
	export let handleSubmit;
</script>

<button id="submitBtn" on:click={handleSubmit}>🔏 Secrify</button>

<style lang="scss">
	#submitBtn {
		align-self: flex-start;
		font-size: inherit;
		padding: 0.4rem 0.8rem;
		border: none;
		background-color: #c7d2fe;
		transition: all 400ms ease;
		cursor: pointer;
		text-align: center;
		border-radius: 4px;

		&:hover {
			background-color: #e0e7ff;
		}
	}
</style>
