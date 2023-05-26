<script type="text/partytown">
	import { onMount } from 'svelte';
	import { getPinLocation } from './utils.js';

	let pin;
	export let map;

	onMount(async () => {
		const pinLocation = getPinLocation();
		pin = new google.maps.Marker({
			position: { lat: pinLocation[0], lng: pinLocation[1] },
			map: map
		});
		google.maps.event.addListener(map, 'drag', function () {
			const center = map.getCenter(); // Get the new center
			pin.setPosition(center); // Update the pin's position
		});

		google.maps.event.addListener(map, 'dragend', function () {
			const center = map.getCenter(); // Get the new center
			// save the new location
			localStorage.setItem('pinLocation', JSON.stringify({ lat: center.lat(), lng: center.lng() }));
		});
	});
</script>
