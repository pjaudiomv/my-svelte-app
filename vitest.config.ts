import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

export default defineConfig({
    plugins: [
        svelte({
            preprocess: sveltePreprocess(),
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: 'src/tests/setup.ts',
        include: ['src/tests/**/*.{test,spec}.{js,ts}'],
    },
});
