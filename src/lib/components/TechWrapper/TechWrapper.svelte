<script context="module">
	import Css3 from '$lib/svgs/technologyImages/css3.svelte';
	import Github from '$lib/svgs/technologyImages/github.svelte';
	import Html5 from '$lib/svgs/technologyImages/html5.svelte';
	import Javascript from '$lib/svgs/technologyImages/javascript.svelte';
	import Mysql from '$lib/svgs/technologyImages/mysql.svelte';
	import Node from '$lib/svgs/technologyImages/node.svelte';
	import Python from '$lib/svgs/technologyImages/python.svelte';
	import React from '$lib/svgs/technologyImages/react.svelte';
	import Svelte from '$lib/svgs/technologyImages/svelte.svelte';
</script>

<script>
	import { onMount, tick } from 'svelte';

	let techComponents = [
		{
			label: 'Js ES6',
			component: Javascript
		},
		{
			label: 'React',
			component: React
		},

		{
			label: 'MySql',
			component: Mysql
		},

		{
			label: 'Python',
			component: Python
		},
		{
			label: 'Css',
			component: Css3
		},
		{
			label: 'Github',
			component: Github
		},

		{
			label: 'Node',
			component: Node
		},
		{
			label: 'Html',
			component: Html5
		},
		{
			label: 'Svelte',
			component: Svelte
		}
	];
</script>

<div class="wrapper">
	<h5 class="main-text-header">Technologies used in these projects</h5>

	<div class="tech-container">
		{#each techComponents as item}
			<div class="icon-container">
				<div class="tech-icon">
					<svelte:component this="{item.component}" />
				</div>
				<div class="tech-label">
					{item.label}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	:global(.tech-icon) {
		fill: rgba(255, 255, 255, 0.7);
	}
	.wrapper {
		color: white;
		grid-area: tech;
	}
	.main-text-header {
		margin-bottom: 1rem;
		font-weight: 500;
		text-align: center;
		font-size: 1em;
		@include min-screen($mobile-md) {
			font-size: 20px;
		}
		&::after {
			content: '';
			display: block;
			width: 100%;
			margin-top: 10px;
			height: 1px;
		}
	}
	.tech-container {
		justify-content: space-between;
		width: 100%;
		padding: 10px;
		display: flex;
		overflow-x: auto;

		box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
	}
	.icon-container {
		width: 40px;
		&:not(:last-child) {
			margin-right: 15px;
		}

		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		@include min-screen($mobile-md) {
			width: 50px;
		}
		.tech-label {
			font-size: 10px;
			text-align: center;
			white-space: nowrap;
		}
	}
	.tech-icon {
		width: 100%;
	}
</style>
