<script context="module">
	import Github from '$lib/svgs/navIcons/github.svelte';
	import Gmail from '$lib/svgs/navIcons/gmail.svelte';
	import Linkedin from '$lib/svgs/navIcons/LinkedIn.svelte';

	import Resume from '$lib/svgs/navIcons/resume.svelte';
	const icons = [Github, Gmail, Linkedin, Resume];
</script>

<script>
	import { onMount, tick } from 'svelte';

	onMount(async () => {});
</script>

<div class="wrapper">
	<div class="icons-container">
		{#each icons as Icon}
			<div class="icon-container">
				<Icon />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: fixed;
		top: 0;

		margin: auto;
		z-index: 20;
		display: flex;
		align-items: center;
		@include min-screen($desktop-md) {
			top: 50%;
			left: 0;
			transform: translateY(-50%);
		}
		.icons-container {
			display: flex;
			padding: 20px;
			align-items: center;
			justify-content: center;
			flex-direction: row;
			fill: rgba(255, 255, 255, 0.7);
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
