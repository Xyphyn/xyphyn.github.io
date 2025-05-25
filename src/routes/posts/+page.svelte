<script lang="ts">
	import ContainerLighting from '$lib/ContainerLighting.svelte'

	let { data } = $props()
	console.log(data)
</script>

<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-7xl mx-auto z-0">
	{#each data.posts as post}
		<ContainerLighting size="lg" class="w-full" href={post.link}>
			{#snippet title()}
				{#if post.date}
					<div class="text-sm text-zinc-300 tracking-tight">
						{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(post.date))}
					</div>
				{/if}
				<div>{post.title}</div>
			{/snippet}
			{post.description}
		</ContainerLighting>
	{/each}
</div>
