export async function load() {
	const postImports = import.meta.glob('./data/**/*.svx', {
		eager: true
	})

	const posts: any[] = []
	for (const path in postImports) {
		const post = postImports[path] as any

		if (post) {
			posts.push({
				...post.metadata
			})
		}
	}

	return { posts }
}
