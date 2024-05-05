/** @type {import('prettier').Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	options: {
		printWidth: 120,
		semi: false,
		trailingComma: 'es5',
		singleQuote: true,
	},
	overrides: [
		{
			files: '*.astro',
			options: {
				printWidth: 120,
				semi: false,
				trailingComma: 'es5',
				useTabs: true,
				tabWidth: 4,
				singleQuote: true,
				astroAllowShorthand: true,
			},
		},
		{
			files: '*.ts',
			options: {
				printWidth: 120,
				semi: false,
				trailingComma: 'es5',
				useTabs: true,
				tabWidth: 4,
				singleQuote: true,
			},
		},
	],
}
