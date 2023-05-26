<script>
	import { onMount } from 'svelte';
	import LocationPin from './LocationPin.svelte';
	import { getPinLocation } from './utils.js';

	let map;
	let ready = false;
	onMount(async () => {
		window.initMap = function () {
			(ready = true), console.log(ready);
		};
		const pinLocation = getPinLocation();
		// fetching the google map
		map = new google.maps.Map(document.getElementById('map'), {
			center: { lat: pinLocation[0], lng: pinLocation[1] },
			zoom: 8,
			draggable: true
		});
	});
</script>

<svelte:head>
	<script
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD4meKhRVLsdX3iyjDOOdBMmwi-PDFh1ss&callback=Function.prototype"
	>
	</script>
</svelte:head>

<div class="map-containers">
	<div id="map">
		{#if map}
			<LocationPin {map} />
		{/if}
	</div>
</div>

<style>
	/* tailwind imports */
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
	:global(body) {
		margin: 0;
	}
</style>
