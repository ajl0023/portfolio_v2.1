<script context="module">
	import { gsap } from 'gsap';
</script>

<script>
	import { carouselStore_store } from '$lib/stores/carouselStore-store';

	import { onMount, tick } from 'svelte';
	import Arrow from './Arrow.svelte';
	export let project_images_set;
	$: ({ active, currPage } = $carouselStore_store);

	let carousel;

	$: {
		if (carousel && active) {
			gsap.to(carousel, {
				xPercent: -100 * currPage
			});
		}
	}
	onMount(() => {
		carouselStore_store.init(carousel);
	});
</script>

<div class="wrapper">
	<Arrow direction="left" />
	<div class="carousel-container">
		<div bind:this="{carousel}" class="carousel-content">
			{#each project_images_set as containers, i}
				<div class="flex-2x3">
					{#each containers as row, i}
						<div class="flex-row">
							{#each row as item, i}
								<div class="image-container">
									<img alt="" src="{item.src}" />
									<div class="hover-element-container"></div>
								</div>
							{/each}
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<Arrow direction="right" />
</div>

<style lang="scss">
	:root {
		--sc-color-rgb-light-50p: rgba(93, 93, 93, 0.5);
		--sc-color-rgb-light: #5d5d5d;
		--sc-color-hex-dark-50p: rgba(30, 30, 30, 0.5);
		--sc-color-hex-dark: #1e1e1e;
	}
	.wrapper {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		overflow: hidden;
	}
	.carousel-container {
		width: 100%;

		overflow-x: hidden;
		display: flex;
	}
	.flex-2x3 {
		display: flex;
		width: 100%;
		flex-direction: column;
		flex-shrink: 0;
		.flex-row {
			display: flex;

			&:not(:last-child) {
				margin-bottom: 10px;
			}
		}
	}
	.row-container {
		display: flex;
		overflow-x: hidden;
		flex-direction: column;
	}
	.image-container {
		// box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
		// 	0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
		// 	0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
		border-radius: 5px;
		overflow: hidden;
		cursor: pointer;
		outline: none;

		position: relative;
		z-index: 5;
		width: 100%;

		background-color: black;

		&::before {
			display: block;
			content: '';
			width: 100%;

			padding-top: 500px/500px * 100%;
		}
		.hover-element-container {
			width: 100%;
			height: 100%;
			position: absolute;
			background-color: rgba(0, 0, 0, 0.451);
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 2;
		}
		img {
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 1;
			position: absolute;
			width: 100%;
			object-fit: cover;
			height: 100%;
			display: block;
		}
		&:not(:last-child) {
			margin-right: 10px;
		}
	}

	.carousel-content {
		display: flex;
		width: 100%;
	}
</style>
