<script context="module">
</script>

<script>
	import { onMount, tick } from 'svelte';
	import BannerCard from './BannerCard.svelte';
	import Laptop from './Laptop.svelte';

	onMount(async () => {});
	const console_text = `const app = express();\napp.get('api/skills', (req,res) =>\n{ res.json(["React","Javascript",\n"nodeJS", "CSS", "HTML"])})`;
</script>

<div class="wrapper">
	<div class="main-container">
		<div class="laptop-container">
			<Laptop />
		</div>
		<BannerCard />
	</div>
</div>

<style lang="scss">
	.wrapper {
		height: 100vh;
		padding: 20px;
		width: 100%;
		display: flex;
	}
	.laptop-container {
		max-width: 1100px;
		width: 100%;
		padding: 8vw;

		@include min-screen($laptop-vertical) {
			margin-right: 1rem;
			padding: 6vw;
		}
	}
	.main-container {
		display: flex;
		width: 100%;
		justify-content: center;
		align-items: center;
		flex-direction: column-reverse;
		@include min-screen($laptop-vertical) {
			flex-direction: row;
		}
	}
</style>
