<script>
  import { Logo } from '$lib/svgs';
  import { headerButtonContent } from '$lib/stores/header.js';
  import Button from '$lib/partials/Button.svelte';
</script>

<header>
  <nav>
    <a href="/">
      <Logo />
    </a>
    {#if $headerButtonContent}
      <Button {...$headerButtonContent} />
    {/if}
  </nav>
</header>

<style>
  header {
    max-width: 1440px;
    margin: 0 auto;
    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--padding);
    }
    :global(svg) {
      height: 3rem;
    }
  }
</style>