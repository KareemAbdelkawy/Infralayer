<script>
	import Header from './Header.svelte';
	import './styles.css';
	import { onMount } from 'svelte';
	import { partytownSnippet } from '@builder.io/partytown/integration';

	let scriptEl;
	onMount(() => {
		if (scriptEl) {
			scriptEl.textContent = partytownSnippet();
		}
	});
</script>

<svelte:head>
	<script>
		partytown = {
			forward: ['dataLayer.push']
		};
	</script>

	<script bind:this={scriptEl}></script>
</svelte:head>
<div class="app">
	<Header />

	<main>
		<slot />
	</main>
</div>
