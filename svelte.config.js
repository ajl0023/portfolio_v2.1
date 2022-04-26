import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';

export default {
	kit: {
		adapter: adapter({}),
		vite: {
			optimizeDeps: {},
			resolve: {
				alias: {
					$lib: path.resolve('./src/lib')
				}
			}
		}
	},
	preprocess: sveltePreprocess({
		sourceMap: false,
		scss: {
			prependData: `@import 'src/lib/styles/root.scss';`
		}
	})
};
