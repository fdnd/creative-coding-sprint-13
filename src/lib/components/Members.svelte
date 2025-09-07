<script>
  import Card from "$lib/partials/Card.svelte";
  import TitleSubtitle from "$lib/partials/text/TitleSubtitle.svelte";
  import FilterForm from "$lib/partials/FilterForm.svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  let { subtitle, title, members } = $props();

  const handleSort = (event) => {
    const sortValue = event.detail.sortValue;
    dispatch("sort", {sortValue});
  };
</script>

<section class="members">
  <div class="members-intro">
    <TitleSubtitle {subtitle} {title} />
    <FilterForm on:sort={handleSort} />
  </div>
  <div class="scroll-container">
    <div class="members__items" style="--count: {members.length};">
      {#each members as member, index (member.id)}
        <Card {member} {index} />
      {/each}
    </div>
  </div>
</section>

<style>
  .members {
    margin-top: var(--margin-top);
  }
  .members-intro {
    padding: var(--padding);
    max-width: 1440px;
    margin: 0 auto;
  }
  .scroll-container {
    display: flex;
    align-items: center;
    overflow-x: auto;
    margin-top: var(--margin-top);
    @supports (animation-timeline: view(x)) {
      min-height: max(calc(500 / 400 * 300px + var(--padding) * 2), calc(500 / 400 * 400 / 1440 * 100vw + var(--padding) * 2));
    }
  }
  .members__items {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    gap: 0.5rem;
    width: max-content;
    padding: 0 calc(100vw - 300 / 1440 * 100vw + var(--padding)) var(--padding)
      var(--padding);
  }
</style>
