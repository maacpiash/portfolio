// .prettierrc.mjs
/** @type {import("prettier").Config} */
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
                parser: 'astro',
                astroAllowShorthand: true,
            },
        },
    ],
}
