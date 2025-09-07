<script>
  import TitleSubtitle from "$lib/partials/text/TitleSubtitle.svelte";
  let { member, id } = $props();

  const randomFacts = [
    { key: "fav_color", title: "Favoriete kleur" },
    { key: "fav_property", title: "Favoriete CSS eigenschap" },
    { key: "fav_tag", title: "Favoriete HTML tag" },
    { key: "fav_attribute", title: "Favoriete HTML attribuut" },
    { key: "fav_feature", title: "Favoriete CSS feature" },
    { key: "fav_kitchen", title: "Favoriete keuken" },
    { key: "fav_book_genre", title: "Favoriete boekgenre" },
    { key: "fav_country", title: "Favoriete land" },
    { key: "fav_emoji", title: "Favoriete emoji" },
    { key: "fav_hobby", title: "Favoriete hobby" },
  ];

  const getRandomFact = () => {
    // Get random fact index
    const randomFactIndex = Math.floor(Math.random() * randomFacts.length);
    const factValue = member[randomFacts[randomFactIndex].key];

    // Skip if the fact value is null or undefined
    if (!factValue) {
      return `${randomFacts[randomFactIndex].title}: Geen informatie beschikbaar`;
    }

    if (randomFacts[randomFactIndex].key === "fav_color") {
      return `Favoriete kleur: <span class="color-box" style="background-color: ${factValue}"></span> ${factValue}`;
    }
    if (randomFacts[randomFactIndex].key === "fav_tag") {
      // escape html lol
      return `${randomFacts[randomFactIndex].title}: <span class="html-tag">${factValue.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")}</span>`;
    }
    return `${randomFacts[randomFactIndex].title}: ${factValue}`;
  };
</script>

<section class="member-details">
  <div class="member-details-media" style="--vt: person-{id}">
    <img
      src="https://fdnd.directus.app/assets/{member.mugshot}?fit=cover&width=1600"
      alt="Portretfoto van {member.name}"
    />
  </div>
  <div class="p">
    <TitleSubtitle title={member.name} subtitle={member.role} />

    <p class="large-body">{@html member.bio}</p>
    <dl>
      <dt>Website</dt>
      <dd><a href={member.website} target="_blank">{member.website}</a></dd>
      <dt>Github</dt>
      <dd>@{member.github_handle}</dd>
      <dt>Birthdate</dt>
      <dd>
        {new Date(member.birthdate).toLocaleDateString("nl-NL", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </dd>
    </dl>

    <p>
      {@html getRandomFact()}
    </p>
  </div>
</section>

<style>
  .member-details {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    gap: 1rem;
    padding: var(--padding);
    max-width: 1440px;
    margin: 0 auto;
    .member-details-media {
      view-transition-class: member-card;
      grid-column: 1 / 6;
      background-color: var(--accent-color);
      border-radius: var(--radius);
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      aspect-ratio: 300/400;
      mix-blend-mode: luminosity;
    }
    .p {
      grid-column: 7 / 12;
    }
    .large-body {
      margin-top: 1.5em;
    }
    dl {
      max-width: 400px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      dt {
        font-weight: 600;
      }
    }
  }
  :global(.color-box) {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: var(--small-radius);
  }
</style>
