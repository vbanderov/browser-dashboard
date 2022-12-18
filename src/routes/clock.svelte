

<script>
	import { time } from './stores';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});

	$: timeFormatted = formatter.format($time);
</script>

<h1 class=" text-white">Current time {timeFormatted}</h1>
