import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import path from 'path'
import relativeImages from 'mdsvex-relative-images'
import enhancedImage from '@lzinga/mdsvex-enhanced-images'
import rehypeSlug from 'rehype-slug'
import { visit } from 'unist-util-visit'

const config = {
	preprocess: [
		mdsvex({
			layout: { _: path.resolve('src/routes/posts/Layout.svelte') },
			remarkPlugins: [
				// relativeImages,
				{
					defaults: {
						Wrapper: '/srv/routes/posts/components/Pre.svelte'
					}
				},
				() => (tree, file) => {
					const headings = []

					visit(tree, 'heading', (node) => {
						const text = node.children
							.filter((child) => child.type === 'text')
							.map((child) => child.value)
							.join('')

						headings.push({
							depth: node.depth,
							text: text,
							id: text
								.toLowerCase()
								.replace(/\s+/g, '-')
								.replace(/[^\w-]/g, '')
						})
					})

					file.data.fm = file.data.fm || {}
					file.data.fm.headings = headings
				},
				enhancedImage,
				relativeImages
			],
			rehypePlugins: [rehypeSlug],
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
