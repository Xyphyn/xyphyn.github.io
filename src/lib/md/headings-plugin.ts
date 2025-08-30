import { visit } from 'unist-util-visit'

export function extractHeadings() {
	return (tree: any, file: any) => {
		const headings: any[] = []

		visit(tree, 'heading', (node) => {
			const text = node.children
				.filter((child: any) => child.type === 'text')
				.map((child: any) => child.value)
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

		// Make headings available to the component
		file.data.fm = file.data.fm || {}
		file.data.fm.headings = headings
	}
}
