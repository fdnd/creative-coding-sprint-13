<script>
	import favicon from '$lib/assets/favi.png';
	import Header from '$lib/components/Header.svelte';
	import { page } from '$app/stores';
	import { getPageClass } from '$lib/utils/page-class.js';

	let { children } = $props();
	import { onNavigate } from '$app/navigation';

	// Function to update HTML class
	function updateHtmlClass() {
		const pageClass = getPageClass($page.route.id);
		document.documentElement.className = pageClass;
	}

	// Update class when page changes
	$effect(() => {
		if ($page) {
			updateHtmlClass();
		}
	});

onNavigate((navigation) => {
	if (!document.startViewTransition) return;
	let viewTransitionType = 'page-change';
	if (navigation.type === 'goto') {
		return;
	}
	return new Promise((resolve) => {
		document.startViewTransition({
			update: async () => {
				resolve();
				await navigation.complete;
			},
			types: [viewTransitionType]
		});
	});
});
</script>


<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
<Header />
{@render children?.()}


