<script>
  export let checked = false;
  export let handleToggleDarkMode;
</script>

<div class="toggle-container">
  <input type="checkbox" id="darkmode-checkbox" bind:checked on:change={handleToggleDarkMode} />
  <label for="darkmode-checkbox" class="toggle-wrapper">
    <img src="/sun.png" alt="sun icon" class="sun" />
    <img src="/moon.png" alt="moon icon" class="moon" />
    <div class="toggle" />
  </label>
</div>

<style lang="scss">
  :root {
    --hide-animation: scale(0) rotate(360deg);
    --show-animation: scale(1.2) rotate(-360deg);
    --transition-timing: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --toggle-width: 3.9rem;
    --shadow-color: 254deg 10% 39%;
    --shadow-elevation-low: 0.3px 0.5px 0.6px hsl(var(--shadow-color) / 0.45),
      0.4px 0.8px 0.9px -1.6px hsl(var(--shadow-color) / 0.38), 1px 2px 2.3px -3.2px hsl(var(--shadow-color) / 0.31);
    --shadow-elevation-medium: 0.3px 0.5px 0.6px hsl(var(--shadow-color) / 0.47),
      0.7px 1.4px 1.6px -1.1px hsl(var(--shadow-color) / 0.42), 1.9px 3.9px 4.4px -2.2px hsl(var(--shadow-color) / 0.36),
      5px 10px 11.3px -3.2px hsl(var(--shadow-color) / 0.31);
    --shadow-elevation-high: 0.3px 0.5px 0.6px hsl(var(--shadow-color) / 0.44),
      1.1px 2.2px 2.5px -0.5px hsl(var(--shadow-color) / 0.41), 2.2px 4.3px 4.9px -0.9px hsl(var(--shadow-color) / 0.39),
      3.8px 7.6px 8.6px -1.4px hsl(var(--shadow-color) / 0.36),
      6.5px 12.9px 14.6px -1.9px hsl(var(--shadow-color) / 0.34),
      10.6px 21.2px 24px -2.3px hsl(var(--shadow-color) / 0.31),
      16.6px 33.3px 37.7px -2.8px hsl(var(--shadow-color) / 0.28),
      25px 50px 56.6px -3.2px hsl(var(--shadow-color) / 0.26);
  }

  .toggle-container {
    position: absolute;
    top: 1.5rem;
    left: 1.5rem;
  }

  input {
    display: none;

    &:checked + .toggle-wrapper {
      background-color: #002a5b;
      .toggle {
        transform: translateX(calc(var(--toggle-width) / 1.8));
      }
      .moon {
        transform: var(--hide-animation);
      }
      .sun {
        transform: var(--show-animation);
      }
    }
    &:not(:checked) + .toggle-wrapper {
      background-color: #c7d2fe;
      .moon {
        transform: var(--show-animation);
      }
      .sun {
        transform: var(--hide-animation);
      }
    }
  }
  .toggle-wrapper {
    background-color: #e0f2fe;
    width: var(--toggle-width);
    height: 1.7rem;
    border-radius: 34px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0 6px;
    -webkit-box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
    cursor: pointer;
    position: relative;
    -webkit-transition: all 400ms ease;
    -o-transition: all 400ms ease;
    transition: all 400ms ease;

    img {
      max-width: 100%;
      max-height: 100%;
      padding: 5px 2px;
      -webkit-transition: all 600ms;
      -o-transition: all 600ms;
      transition: all 600ms;
      pointer-events: none;
      -webkit-transition-timing-function: var(--transition-timing);
      -o-transition-timing-function: var(--transition-timing);
      transition-timing-function: var(--transition-timing);
      object-fit: contain;
    }

    .toggle {
      background-color: white;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      -webkit-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
      -webkit-transition-timing-function: var(--transition-timing);
      -o-transition-timing-function: var(--transition-timing);
      transition-timing-function: var(--transition-timing);
      -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
      transform: translateX(0);
      cursor: pointer;
      position: absolute;
      left: 0;
      right: 0;
      margin-left: 1px;
    }
  }
</style>
