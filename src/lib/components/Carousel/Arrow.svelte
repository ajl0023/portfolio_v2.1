<script>
	import { carouselStore_store } from '$lib/stores/carouselStore-store';

	export let direction;
</script>

<div class="arrow-container">
	<div
		class="sc-carousel-arrow__circle"
		on:click="{() => {
			carouselStore_store.handleChange(direction === 'right' ? 1 : -1);
		}}"
	>
		<i
			class="sc-carousel-arrow__arrow"
			class:inner-arrow-next="{direction === 'right'}"
			class:inner-arrow-prev="{direction === 'left'}"
		>
		</i>
	</div>
</div>

<style>
	.arrow-container {
		padding: 5px;
	}
	:root {
		--arrow-size: 2px;
	}
	.sc-carousel-arrow__circle {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: rgba(93, 93, 93, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 100ms ease;
		cursor: pointer;
		-webkit-tap-highlight-color: transparent;
	}
	.sc-carousel-arrow__circle:hover {
		opacity: 0.9;
	}
	.sc-carousel-arrow__arrow {
		border: solid #1e1e1e;
		border-width: 0 var(--arrow-size) var(--arrow-size) 0;
		padding: var(--arrow-size);
		position: relative;
	}
	.inner-arrow-next {
		transform: rotate(-45deg);
		left: calc(var(--arrow-size) / -2);
	}
	.inner-arrow-prev {
		transform: rotate(135deg);
		right: calc(var(--arrow-size) / -2);
	}
</style>
