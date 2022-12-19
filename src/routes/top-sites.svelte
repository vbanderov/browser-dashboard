<script>
	import { onMount } from 'svelte';
	import {topSites as topSitesDefault} from './stores';

	let topSites = topSitesDefault;

	onMount(() => {
		chrome.topSites.get((data) => (topSites = data));
	});
</script>

<ul>
	{#each topSites as topSite}
		<li><a class="text-white" href={topSite.url} rel="noreferrer">{topSite.title}</a></li>
	{/each}
</ul>
