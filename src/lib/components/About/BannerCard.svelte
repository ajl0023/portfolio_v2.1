<div class="container">
	<div class="text-content">
		<div class="text-container">
			<h3 class="main-header">Javascript developer</h3>
			<p class="description">
				Hello, I'm Austin, a web developer with a primary focus in React development. I'm confident
				in working with the various MERN stack technologies and I'm on a persistent journey in
				honing my craft in web development.
			</p>
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		width: 100%;
		font-family: 'Roboto Mono', monospace;
		color: white;
		padding-left: 20px;
		@include min-screen($laptop-vertical) {
			max-width: 400px;
		}
	}
	.text-container {
		background: rgba(255, 255, 255, 0.03);
		border-radius: 5px;
		width: 100%;
		padding: 30px 13px;
		position: relative;
	}
	.main-header {
		margin-bottom: 15px;
		background: #1e3264;
		padding: 5px 80px 5px 13px;
		margin-left: -30px;
		font-size: 20px;
		text-align: left;
		white-space: nowrap;
		width: fit-content;
		line-height: 40px;
	}
	.description {
		font-size: 1em;
		right: 0;
		padding: 10px;
		background: rgba(255, 255, 255, 0.03);
		line-height: 23px;
		top: 0;
		font-weight: 500;
	}
</style>
