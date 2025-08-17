import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import relativeImages from 'mdsvex-relative-images'

const config = {
	preprocess: [
		mdsvex({
			layout: { _: path.resolve('src/routes/posts/Layout.svelte') },
			remarkPlugins: [
				relativeImages,
				{
					defaults: {
						Wrapper: '/srv/routes/posts/components/Pre.svelte'
					}
				}
			],
			smartypants: true
		}),
		vitePreprocess()
	],
	kit: {
		adapter: adapter({
			precompress: true
		})
	},
	extensions: ['.svelte', '.svx']
}

export default config
