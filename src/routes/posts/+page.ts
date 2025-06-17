export async function load() {
	const postImports = import.meta.glob('./**/*.svx', {
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
	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

	return { posts }
}
