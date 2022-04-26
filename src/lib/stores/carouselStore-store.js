import { get, writable } from 'svelte/store';

//from https://github.com/codrops/MarqueeMenu/blob/main/src/js/menuItem.js#L29

const store = () => {
	const state = {
		currPage: 0,
		carousel_ele: null,
		active: false,
		pageCount: 0
	};
	const { subscribe, set, update } = writable(state);

	const methods = {
		handleChange(step) {
			update((s) => {
				if (!s.active) {
					s.active = true;
				}
				if (step === 1 && s.currPage === s.pageCount - 1) {
					s.currPage = 0;
					return s;
				} else if (step === -1 && s.currPage === 0) {
					return s;
				}

				s.currPage += step;
				return s;
			});
		},
		init(ele) {
			update((s) => {
				s.carousel_ele = ele;

				return s;
			});
		}
	};
	return {
		subscribe,
		set,
		update,
		...methods
	};
};

export const carouselStore_store = store();
