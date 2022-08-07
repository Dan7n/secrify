<script>
  import { fly } from "svelte/transition";

  export let secretText;
  export let readonly = false;
  export let labelText = "What text would you like to secrify?";

  const handleChange = e => {
    const { value } = e.target;
    if (isTextareaError && value.length !== 0) {
      isTextareaError = false;
    } else {
      isTextareaError = true;
    }
  };
</script>

<label for="secretText" class="secretTextContainer" in:fly={{ y: -30, duration: 1200, delay: 450 }}>
  <p>{labelText}</p>
  <textarea id="secretText" on:change={handleChange} bind:value={secretText} {readonly} spellcheck="false" />
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
    -webkit-box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
    font-size: inherit;
    font-family: inherit;
    padding: 8px;
    border: none;
    border-radius: 3px;
    -webkit-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;
	-webkit-appearance: none;

    &:focus {
      outline: none;
      -webkit-box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
      box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
    }
  }
</style>
