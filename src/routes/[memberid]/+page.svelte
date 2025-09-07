<script>
  import MemberHeader from "$lib/components/MemberHeader.svelte";

  import { setHeaderButtonContent, clearHeaderButtonContent } from "$lib/stores/header.js";
  import { onMount } from "svelte";

  let { data } = $props();
  const member = data.memberData.data;
  const id = data.id;
  // Set header button content when component mounts
  onMount(() => {
    setHeaderButtonContent({ content: "Terug", href: "/" });
    // Clean up when component is destroyed
    return () => {
      clearHeaderButtonContent();
    };
  });
</script>

<MemberHeader {member} {id} />

<style>
  .member-details {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    object-fit: cover;
  }
</style>
