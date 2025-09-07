<script>
  import Members from "$lib/components/Members.svelte";
  import { page } from "$app/stores";

  let { data } = $props();
  // Client-side sorting
  const sortParam = $page.url.searchParams.get("sort") || "default";
  const members = data.members;

  const getSortedMembers = (sortParameter) => {
    if (sortParameter === "age") {
      return [...members].sort(
        (a, b) => new Date(a.birthdate) - new Date(b.birthdate)
      );
    } else if (sortParameter === "name") {
      return [...members].sort((a, b) => a.name.localeCompare(b.name));
    }
    return members; // default order
  };


  const handleSort = (event) => {
    const sortValue =  event.detail.sortValue;
    membersData = getSortedMembers(sortValue);
  };

  let membersData = $derived.by(() => getSortedMembers(sortParam));
</script>

<Members subtitle={["Leerjaar 25/26"]} title="Docenten" members={membersData} on:sort={handleSort} />
