<script>
	import About from '$lib/components/About/About.svelte';

	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { onMount } from 'svelte';
	import '../global.scss';
	onMount(async () => {
		await import('../utils/cubes.js');
	});
</script>

<div class="wrapper">
	<Navbar />
	<slot />
	<About />
	<div class="test"></div>
</div>

<style lang="scss">
	.wrapper {
		min-height: 100%;
		height: 100%;
		width: 100%;
		margin: auto;

		max-width: 1500px;
	}
</style>
