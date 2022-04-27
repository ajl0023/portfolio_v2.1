import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import path from 'path';
const dev = process.env.NODE_ENV === 'development';

export default {
	kit: {
		adapter: adapter({ pages: 'docs', assets: 'docs' }),
		prerender: {
			default: true
		},
		paths: {
			// change below to your repo name
			base: dev ? '' : '/portfolio_v2.1'
		},
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
