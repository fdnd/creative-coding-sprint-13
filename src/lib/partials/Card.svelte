<script>
  let { member, index, globalDelay } = $props();
</script>

<article
  class="member"
  style="--delay: {index * 0.06}s; --vt: person-{member.id}; --vt-before: person-before-{member.id}"
>
  <div class="member-inner">
    <img
      src="https://fdnd.directus.app/assets/{member.mugshot}?fit=cover&width=1600"
      alt={member.name}
    />
    <div class="content" style="--vst: person-text-{member.id}">
      <div class="labels">
        {#each member.role as role}
          <span class="xsmall-body font-semibold caps"
            >{role.replace("_", " ")}</span
          >
        {/each}
      </div>
      <a href="/{member.id}" class="large-body">
        {member.name}
      </a>
    </div>
  </div>
</article>

<style>
  .member {
    view-transition-class: member-card;
    position: relative;
    background: var(--accent-color);
    color: var(--accent-color);
    border-radius: var(--radius);
    overflow: hidden;
    view-timeline: --card x;
    will-change: transform;
    &::before {
      content: "";
      position: absolute;
      height: 200px;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      z-index: 1;
      /* view-transition-name: var(--vt-before); */
      /* view-transition-class: member-card-before; */
      background: linear-gradient(
        7deg,
        rgba(5, 5, 66, 0.5) 0%,
        rgba(5, 5, 66, 0) 50%
      );
    }
    .member-inner {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: end;
      width: max(250px, calc(300 / 1440 * 100vw));
      aspect-ratio: 450/500;
      @media (prefers-reduced-motion: no-preference) {
        @supports (animation-timeline: view(x)) {
          animation-timeline: --card;
          animation-fill-mode: both;
          animation-name: bigger;
          animation-timing-function: var(--ease);
        }
      }
    }
    .labels {
      span + span {
        &::before {
          content: "•";
          margin-right: 0.5rem;
        }
      }
    }
    a {
      text-decoration: none;
      color: inherit;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }
  .content {
    /* view-transition-class: member-card-text; */
    z-index: 1;
    padding: 1.25rem;    
  }
  .labels {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  img {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    mix-blend-mode: luminosity;
  }
  @keyframes bigger {
    60%,
    100% {
      width: max(250px, calc(300 / 1440 * 100vw));
      aspect-ratio: 450/500;
    }
    80% {
      width: max(300px, calc(400 / 1440 * 100vw));
      aspect-ratio: 300/400;
    }
  }
</style>
