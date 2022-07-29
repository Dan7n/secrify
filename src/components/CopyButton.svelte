<script>
    import { success } from "./../lib/utils/toast"
    export let textToCopy
    export let color = "linear-gradient(to left, hsl(204, 100%, 85%) 0%, hsl(204, 100%, 75%) 100%)"

    const handleCopySecret = (textToCopy) => {
        if (!textToCopy) return
        navigator.clipboard.writeText(textToCopy)
        success("Successfully copied to clipboard")
    }
</script>

<button class="copy-message" on:click={() => handleCopySecret(textToCopy)} style="background: {color};"><slot /></button>

<style lang="scss">
		.copy-message {
			border: none;
			margin-top: 1rem;
			padding: 0.3rem 1rem;
			border-radius: 4px;
			cursor: pointer;
			transition: all 300ms ease;
			background: hsl(204, 100%, 70%);

			&:hover {
				transform: scale(1.03);
			}
		}
</style>