<script context="module">
	import Github from '$lib/svgs/navIcons/github.svelte';
	import Gmail from '$lib/svgs/navIcons/gmail.svelte';
	import LinkedIn from '$lib/svgs/navIcons/LinkedIn.svelte';
	import Resume from '$lib/svgs/navIcons/resume.svelte';
	import { onMount } from 'svelte';

	const icons = [
		{
			link: 'https://github.com/ajl0023',
			component: Github,
			download: null
		},
		{
			link: 'mailto:austinjlee.0@gmail.com',
			component: Gmail,
			download: null
		},

		{
			link: 'https://www.linkedin.com/in/austin-lee-91a341215/',
			component: LinkedIn,
			download: null
		},

		{
			link: './AustinLeeResume.pdf',
			component: Resume,
			download: 'AustinLeeResume.pdf'
		}
	];
</script>

<script>
	onMount(async () => {});
</script>

<div class="wrapper">
	<div class="icons-container">
		{#each icons as item}
			<a
				on:click="{() => {
					if (!item.download) {
						window.open(item.link, '_blank');
					}
				}}"
				download="{item.download}"
				rel="external"
				href="{item.download ? item.link : null}"
				class="icon-container"
			>
				<svelte:component this="{item.component}" />
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: fixed;
		top: 0;
		right: 0;
		margin: auto;
		z-index: 20;
		display: flex;
		align-items: center;
		@include min-screen($desktop-md) {
			top: 50%;
			left: 0;
			right: auto;
			transform: translateY(-50%);
		}
		.icons-container {
			display: flex;

			padding: 20px;
			align-items: center;

			justify-content: center;
			flex-direction: row;

			@include min-screen($desktop-md) {
				top: 0;
				left: 0;
				flex-direction: column;
				bottom: 0;
			}
		}
	}

	.icon-container {
		width: 20px;
		height: 20px;
		cursor: pointer;
		text-decoration: none;
		fill: rgba(255, 255, 255, 0.7);
		&:visited {
			fill: rgba(255, 255, 255, 0.7);
		}
		&:not(:last-child) {
			margin-right: 10px;
		}
		@include min-screen($desktop-md) {
			&:not(:last-child) {
				margin-right: 0px;
				margin-bottom: 10px;
			}
		}
		svg {
			display: block;
		}
	}
</style>
