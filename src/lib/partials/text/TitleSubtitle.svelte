<script>
  let { subtitle, title } = $props();
</script>

<p class="small-body caps font-bold animation-fade-in--down" style="--delay: 0.14s">
  {#each subtitle as sub}
    <span class="xsmall-body font-semibold caps">
      {sub.replace("_", " ")}
    </span>
  {/each}
</p>
<h1 class="xlarge-heading animation-fade-in--down" style="--delay: 0.04s">
  {title}
</h1>

<style>
  span + span {
    &::before {
      content: "•";
      margin: 0 0.5rem;
    }
  }
</style>