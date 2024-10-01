export const GET = ({ request }) => {
  const postImports = import.meta.glob('../../content/**/*.{md,svx}', {
    eager: true,
  })

  const posts: any[] = []
  for (const path in postImports) {
    const post = postImports[path] as any
    if (post) {
      posts.push({
        ...post.metadata,
      })
    }
  }

  return new Response(JSON.stringify(posts))
}
