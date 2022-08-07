<script>
  import { fly } from "svelte/transition";
  import { isDarkMode } from "./../stores";
  export let handleSubmit;
</script>

<button id="submitBtn" class={$isDarkMode ? "dark" : "light"} on:click={handleSubmit} in:fly={{ y: -30, duration: 1200, delay: 320 }}>🔏 Secrify</button>

<style lang="scss">
  #submitBtn {
    align-self: flex-start;
    font-size: inherit;
    padding: 0.5rem 0.9rem;
    border: none;
    transition: all 400ms ease;
    cursor: pointer;
    text-align: center;
    border-radius: 4px;

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    }

}
.light {
	background-color: #c7d2fe;
	&:hover {
		background-color: hsl(226, 100%, 80%);
	}
}

.dark {
	background-color: #2f2f2f;
	&:hover {
		background-color: hsl(226, 61%, 43%);
	}
}
</style>
