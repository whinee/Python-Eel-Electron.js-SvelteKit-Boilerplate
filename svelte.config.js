import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
        sveltekit(), // Enable default SvelteKit preprocessor for Vite
    ],
	kit: {
		adapter: adapter({
			fallback: '404.html'
		})
	}
};

export default config;
