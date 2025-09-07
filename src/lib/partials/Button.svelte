<script>
  let { href, content, target } = $props();
</script>

<a class="button" {href} {target}>
  <span>
    {content}
  </span>
</a>

<style>
  .button {
    position: relative;
    display: block;
    cursor: pointer;
    text-decoration: none;
    letter-spacing: -0.04em;
    font-weight: 550;
    font-size: clamp(1rem, calc(16 / 1440 * 100vw), 1.25rem);
    &::before {
      content: "";
      position: absolute;
      top: 0.2em;
      left: -0.2em;
      right: 0.2em;
      bottom: -0.2em;
      z-index: 0;
      border-radius: var(--small-radius);
      border: 1px solid var(--text-color);
      background: var(--background-color);
      transition: background 0.2s ease-out;
    }
    &:focus::before {
      background-color: var(--text-color) !important;
    }
  }
  
  
  .button:hover,
  .button:focus {
    outline: none;
  }
  
  .button:hover span,
  .button:focus span {
    transform: translate(-1px, 1px);
  }
  
  .button span {
    position: relative;
    display: block;
    padding: 0.75rem;
    border-radius: var(--small-radius);
    border: 1px solid var(--text-color);
    transition: translate 0.3s ease-out;
    background: var(--text-color);
    color: var(--background-color);
  }
</style>
