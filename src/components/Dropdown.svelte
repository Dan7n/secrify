<script>
  import { fly } from "svelte/transition";
  export let options;
  export let selected = { displayText: "30 Minutes", value: 1800000 };
</script>

<label for="durationDropdown" class="selectLabel" in:fly={{ y: -30, duration: 1200, delay: 550 }}>
  How long would you like your secret to last?
  <select class="selectColor" id="durationDropdown" bind:value={selected}>
    {#each options as { displayText, value }}
      <option {value}>{displayText}</option>
    {/each}
  </select>
</label>

<style lang="scss">
  .selectLabel {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    .selectColor {
      position: relative;
      padding: 10px;
      border: none;
      /* border-right: 10px solid #fff; */
      outline: none;
      width: 200px;
      border-radius: 4px;
      -webkit-box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
      box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -4px rgb(0 0 0 / 10%);
    }
  }
</style>
