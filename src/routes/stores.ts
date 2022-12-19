import { readable } from 'svelte/store';
export const time = readable(new Date(), (set) => {
	set(new Date());
	const interval = setInterval(() => {
		set(new Date());
	}, 1000);

	return () => {
		clearInterval(interval);
	};
});

type TopSites = Parameters<Parameters<typeof chrome.topSites.get>[0]>[0];
export const topSites: TopSites = [];
