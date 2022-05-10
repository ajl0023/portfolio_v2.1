<script>
	import { base } from '$app/paths';

	import Carousel from '$lib/components/Carousel/Carousel.svelte';
	import TechWrapper from '$lib/components/TechWrapper/TechWrapper.svelte';
	import { carouselStore_store } from '$lib/stores/carouselStore-store';

	import { onMount } from 'svelte';

	const project_images = [
		{
			url: 'https://github.com/ajl0023/chatappv2',
			src: base + '/images/projectImages/chatapp.jpg'
		},
		{
			url: 'https://github.com/ajl0023/readditv3',
			src: base + '/images/projectImages/readdit.jpg'
		},
		{
			url: 'https://github.com/ajl0023/covid_app_v3',
			src: base + '/images/projectImages/covidTracker.jpg'
		},
		{
			url: 'https://github.com/ajl0023/aviatorSvelte',
			src: base + '/images/projectImages/aviator.jpg'
		},
		{
			url: 'https://github.com/ajl0023/Maliview-1-sveltekit',
			src: base + '/images/projectImages/maliview.jpg'
		},
		{
			url: 'https://github.com/ajl0023/amit-apel-main-site',
			src: base + '/images/projectImages/amitMain.jpg'
		},
		{
			url: 'https://github.com/ajl0023/aiiwoe-v2',
			src: base + '/images/projectImages/aiiwoe.jpg'
		}
	];
	let project_images_set = [];
	let container_count =
		project_images.length % 6 === 0 ? project_images.length : Math.ceil(project_images.length / 6);
	const init = () => {
		let images_set = [];
		let row = [];

		for (let sub = 0; sub < container_count * 6; sub++) {
			if (!project_images[sub]) {
				project_images[sub] = {
					visible: false,
					url: null,
					src: null
				};
			}
			row.push(project_images[sub]);

			if (row.length === 3) {
				images_set.push(row);
				row = [];
			}

			if (images_set.length === 2) {
				project_images_set.push([...images_set]);

				images_set = [];
			}
		}

		$carouselStore_store.pageCount = project_images_set.length;
	};
	init();
</script>

<div class="wrapper">
	<div class="container">
		<div class="grid-container">
			<div class="text-container">
				<h1 class="main-title">
					<div>Hi, I'm</div>
					<span class="main-bolded">Austin</span>
				</h1>

				<h4 class="description">Here are some of my projects I've been working on.</h4>
			</div>
			<Carousel project_images_set="{project_images_set}" />
			<TechWrapper />
		</div>
	</div>
</div>

<style lang="scss">
	* {
		margin: 0;
		list-style: none;
		box-sizing: border-box;
		padding: 0;
	}
	.wrapper {
		height: 100vh;

		overflow: hidden;

		padding: 10px;
	}

	.sub-groups {
		display: flex;
	}

	.container {
		max-width: 1200px;
		height: 100%;
		align-items: center;
		width: 100%;
		margin: auto;
		z-index: 20;
		flex-direction: column;
		display: flex;
		justify-content: center;
		font-family: 'Montserrat', sans-serif;
	}

	.text-container {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;

		.main-bolded {
			padding: 13px;
			border-radius: 3px;
			color: white;
			margin-left: 15px;
			box-shadow: 0 2.8px 2.2px rgba(131, 96, 195, 0.4), 0 6.7px 5.3px rgba(0, 0, 0, 0.048),
				0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),
				0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12);
		}
		.main-title {
			text-align: left;
			margin-bottom: 3rem;
			font-size: 3em;
			line-height: 1;
			@include min-screen($mobile-md) {
				font-size: 3em;
			}
			@include min-screen($mobile-lg) {
				font-size: 4em;
			}
		}
		.description {
			font-weight: 500;

			color: white;
			text-align: center;
			margin-bottom: 10px;

			@include min-screen($mobile-md) {
				font-size: 20px;
			}
		}
	}
	.right-arrow {
		cursor: pointer;
	}

	.grid-container {
		display: grid;
		width: 100%;
		grid-template-areas:
			'text'
			'carousel'
			'tech';
		grid-template-columns: 100%;

		@include min-screen($mobile-md) {
			grid-template-areas:
				'text carousel'
				'tech tech';
			grid-template-columns: 30% 70%;
			width: 100%;
		}
	}
</style>
