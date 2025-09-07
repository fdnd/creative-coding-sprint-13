<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  const queryString = $page.url.searchParams.get("sort") || "default";

  const handleChange = (event) => {
    const sortValue = event.target.value;
    
    
    
    if (document.startViewTransition) {
      const transition = document.startViewTransition({
        update: () => {
          dispatch("sort", {sortValue});
        },
        types: ["filter"],
      })
      // Oké dit is lelijk maar het werkt, help!
      transition.finished.then(() => {
        const url = new URL($page.url);
        url.searchParams.set("sort", sortValue);
        goto(url.toString());
      });
    } else {
      dispatch("sort", {sortValue});
    }
  };
</script>

<form>
  <select name="sort" id="sort" onchange={handleChange}>
    <option selected={queryString === "default"} value="default"
      >Sorteren op</option
    >
    <option selected={queryString === "name"} value="name">Naam</option>
    <option selected={queryString === "age"} value="age">Leeftijd</option>
  </select>
</form>


<style> 
  form {
    padding: var(--padding) 0 0;
  }
  select {
    background: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--text-color);
    border-radius: var(--small-radius);
    padding: 0.5rem;
    font-size: 1rem;
    font-family: inherit;
    font-weight: 500;
  }
</style>