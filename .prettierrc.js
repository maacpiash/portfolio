/** @type {import('prettier').Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	printWidth: 120,
	semi: false,
	trailingComma: 'es5',
	singleQuote: true,
	useTabs: true,
	tabWidth: 4,
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
		{
			files: '*.json',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: '*.md',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
}
