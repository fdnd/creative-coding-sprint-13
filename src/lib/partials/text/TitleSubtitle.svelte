<script>
  let { subtitle, title } = $props();
</script>

<p class="small-body caps font-bold">
  {#each subtitle as sub}
    <span class="xsmall-body font-semibold caps">
      {sub.replace("_", " ")}
    </span>
  {/each}
</p>
<h1 class="xlarge-heading">
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