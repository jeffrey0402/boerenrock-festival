/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
    overrides: [
      {
        files: ['*.astro', "*.tsx"],
        options: {
          parser: 'astro',
        },
      },
    ],
  };