<script>
	import Clock from "./clock.svelte";
	import TopSites from "./top-sites.svelte";

	let name = 'Vladimir';

</script>

<div class="w-screen h-screen bg-black">
	<h1 class=" text-white">Welcome to SvelteKit, {name}</h1>

	<Clock />

	<TopSites />
</div>
