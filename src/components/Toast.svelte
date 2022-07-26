<script>
    import { SvelteToast } from '@zerodevx/svelte-toast'
</script>

<div role="alert" class="wrap">
    <SvelteToast />
</div>

<style lang="scss">
    :root {
        --toastBorderRadius: 5px;
        --toastBoxShadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  }
</style>