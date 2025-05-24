import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-auto'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import staticAdapter from '@sveltejs/adapter-static'

const config = {
	preprocess: [vitePreprocess(), mdsvex()],
	kit: { adapter: staticAdapter() },
	extensions: ['.svelte', '.svx']
}

export default config
