export async function GET() {
	const postImports = import.meta.glob('../**/*.svx', {
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

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>xylight.dev</title>
    <link>https://xylight.dev/posts</link>
    <description>My personal site and posts</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toISOString()}</lastBuildDate>
    <managingEditor>xylight@xylight.dev (Editor Name)</managingEditor>
    <ttl>3600</ttl>
${posts
	.map(
		(i) => `    <item>
      <title>${i.title}</title>
      <link>https://xylight.dev${i.link}</link>
      <description>${i.description}</description>
      <author>xylight@xylight.dev (Xylight)</author>
      <pubDate>${new Date(i.date).toISOString()}</pubDate>
    </item>`
	)
	.join('\n')}
  </channel>
</rss>`,
		{ headers: { 'Content-Type': 'application/xml' } }
	)
}
