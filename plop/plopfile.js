import prettier from 'prettier';
export default function (plop) {
	// create your generators here

	plop.setGenerator('store', {
		prompts: [
			{
				type: 'input',
				name: 'store',
				message: 'store name'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/lib/stores/{{store}}-store.js',
				templateFile: './templates/store.svelte.hbs',
				force: true,
				transform: (x) => {
					// return prettier.format(x, {
					// 	parser: 'babel'
					// });
					return x;
				}
			}
		]
	});
	plop.setGenerator('formComponent', {
		prompts: [
			{
				type: 'input',
				name: 'folderName',
				message: 'folder name'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/lib/components/TableModal/FormComponents/{{folderName}}/{{folderName}}.svelte',
				templateFile: './templates/model.svelte.hbs',
				force: true,
				transform: (x) => {
					// return prettier.format(x, {
					// 	parser: 'babel'
					// });
					return x;
				}
			}
		]
	});
	plop.setGenerator('svelteComponent', {
		prompts: [
			{
				type: 'input',
				name: 'folderName',
				message: 'folder name'
			}
		],
		actions: [
			{
				type: 'add',
				path: '../src/lib/components/{{folderName}}/{{folderName}}.svelte',
				templateFile: './templates/model.svelte.hbs',
				force: true,
				transform: (x) => {
					// return prettier.format(x, {
					// 	parser: 'babel'
					// });
					return x;
				}
			}
		]
	});
}
