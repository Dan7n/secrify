<script>
    import { success } from "./../lib/utils/toast"
    export let textToCopy
    export let color = "#b4e1ff"

    const handleCopySecret = (textToCopy) => {
        if (!textToCopy) return
        navigator.clipboard.writeText(textToCopy)
        success("Successfully copied to clipboard")
    }
</script>

<button class="copy-message" on:click={() => handleCopySecret(textToCopy)} style="background-color: {color};"><slot /></button>

<style lang="scss">
		.copy-message {
			border: none;
			margin-top: 1rem;
			padding: 0.3rem 1rem;
			border-radius: 4px;
			cursor: pointer;
			transition: all 300ms ease;

			&:hover {
				transform: scale(1.03);
			}
		}
</style>