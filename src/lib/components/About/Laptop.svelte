<script>
	import 'prismjs/themes/prism-okaidia.css';
	import Prism from 'prismjs';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
	import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
	import 'prismjs/plugins/normalize-whitespace/prism-normalize-whitespace.js';

	import { onMount, tick } from 'svelte';
	import Cursor from '../Cursor/Cursor.svelte';
	import { browser } from '$app/env';
	let laptopEle;
	let client_html;
	let server_html;

	const setTimeoutProm = (time, fn) => {
		return new Promise((res, rej) => {
			setTimeout(() => {
				fn();
				res();
			}, time);
		});
	};

	const typingAnimation = async (text, code = '', ele) => {
		var speed = 15;

		for (let i = 0; i < text.length; i++) {
			const char = text[i];

			await setTimeoutProm(speed, () => {
				code += char;
				ele.innerHTML = code;
				Prism.highlightAll();
			});
		}
	};
	const trackVisible = async (entries, observer) => {
		if (entries[0].isIntersecting) {
			observer.disconnect();
			let client_text = `const mySkills = await \n axios.get('/api/skills')\n console.log(mySkills.data)`;
			let server_text = `const app = express();\napp.get('api/skills', (req,res) =>\n{ res.json(["React","Javascript",\n"nodeJS", "CSS", "HTML"])})`;
			await typingAnimation(client_text, '', client_html);
			await typingAnimation(server_text, '', server_html);
		}
	};

	onMount(async () => {});
	onMount(async () => {
		let observer = new IntersectionObserver(trackVisible, {
			threshold: [0.2]
		});
		observer.observe(laptopEle);
	});
</script>

<div class="container">
	<div class="main-content">
		<div class="code-editor-container">
			<div bind:this="{laptopEle}" id="main-laptop-obs" class="laptop">
				<div class="prism-code-wrapper">
					<div class="prism-code-container">
						<pre class="prism-code">
							<code class="language-js line-numbers" bind:this="{client_html}"></code>
					</pre>
					</div>
					<div class="code-divider"></div>
					<div class="prism-code-container">
						<pre class="prism-code">
							<code class="language-js line-numbers" bind:this="{server_html}"></code>
					</pre>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="base"></div>
</div>

<style lang="scss">
	.prism-code-wrapper {
		display: flex;
		justify-content: space-between;
		width: 100%;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;

		bottom: 0;
	}
	.code-divider {
		width: 2px;
		background-color: #606060;
	}
	.prism-code-container {
		width: 100%;

		overflow-y: auto;
	}

	.prism-code {
		background-color: transparent;
		text-align: left;
	}

	.laptop {
		position: relative;
		margin: 0 auto;
		padding-top: 50.25%;
		background: #1a1e2c;
		border: 15px solid #3f3f41;
		border-top: 20px solid #3f3f41;
		border-radius: 14px 14px 0 0;

		box-shadow: 0 0 0 1px #d1d2d4;
	}

	.laptop:before {
		content: '';
		bottom: -35px;
		background: #e6e8e7;
		height: 20px;
		width: 130%;
		border-radius: 0 0 10px 10px;
		position: absolute;
		left: 50%;

		transform: translateX(-50%);
	}

	.laptop:after {
		content: '';
		top: -12px;
		width: 3px;
		height: 3px;
		background: #e6e8e7;
		border-radius: 50%;
		position: absolute;
		left: 50%;
		-webkit-transform: translateX(-50%);
		transform: translateX(-50%);
	}
</style>
