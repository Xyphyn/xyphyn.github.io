<script lang="ts">
	import ContainerLighting from '$lib/ContainerLighting.svelte'

	let { data } = $props()
	console.log(data)
</script>

<h1 class="max-w-7xl mx-auto px-8 text-7xl tracking-tight font-medium mb-8 font-display">Posts</h1>
<div class="flex flex-col gap-8 max-w-7xl mx-auto z-0 px-8">
	{#each data.posts as post}
		<div class="flex flex-row gap-4 p-2">
			{#if post.date}
				<div class="text-sm text-zinc-300 tracking-tight mt-2">
					{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(post.date))}
				</div>
			{/if}
			<a href={post.link} class="flex flex-col gap-2 group">
				<div class="font-display tracking-tight text-2xl group-hover:underline">{post.title}</div>
				{post.description}
			</a>
		</div>
	{/each}
</div>
