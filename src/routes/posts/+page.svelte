<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte'
	import { ArrowLeft, ArrowRight, Icon, Rss } from 'svelte-hero-icons'

	let { data } = $props()
</script>

<svelte:head>
	<title>Posts | xylight.dev</title>
	<meta name="description" content="Xylight's posts" />
</svelte:head>

<div class="p-8 pb-0 xl:px-32 py-16 xl:py-16 space-y-8 text-xl w-full text-center sm:text-left">
	<h1 class="font-medium tracking-tight text-6xl sm:text-7xl font-display leading-[1.3]">
		Posts
		<a
			href="/posts/feed.xml"
			class="text-xl text-indigo-600 dark:text-indigo-400 hover:underline inline-block align-top mt-4"
			aria-label="RSS Feed"
		>
			<Icon src={Rss} size="24" />
		</a>
	</h1>
</div>
<section class="px-4 sm:px-8 xl:px-32 space-y-8 w-full pt-4">
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 z-0">
		{#each data.posts as post, index (post.title)}
			<article
				class={[
					'flex flex-col gap-1 border rounded-3xl border-zinc-200 dark:border-zinc-800 p-6',
					'hover:bg-indigo-500/2 transition-colors group animate-pop-in relative overflow-hidden'
				]}
				style="animation-delay: {index * 50}ms; opacity: 0;"
			>
				<div
					class={[
						'bg-radial from-indigo-500/20 via-70% via-indigo-500/0',
						'w-4xl aspect-square h-auto absolute -bottom-[33rem] -right-[33rem]',
						'opacity-0 group-hover:opacity-100 transition-opacity'
					]}
				></div>
				<a
					href={post.link}
					class="absolute inset-0 z-10 rounded-[inherit]"
					aria-label="Read article: {post.title}"
				>
					<span class="sr-only">Read article: {post.title}</span>
				</a>
				<div
					class="h-48 overflow-hidden grid place-items-center rounded-2xl *:scale-150 -mt-3 -mx-3 mb-3"
				>
					<Placeholder seed={post.title} />
				</div>
				{#if post.date}
					<div class="text-sm text-zinc-500 dark:text-zinc-300 mt-2">
						{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(post.date))}
					</div>
				{/if}
				<h2 class="font-display text-2xl group-hover:underline">{post.title}</h2>
				<p class="max-w-md">
					{post.description}
				</p>
				<div class="text-indigo-500 font-medium flex flex-row gap-1 items-center text-lg mt-auto">
					Read <Icon src={ArrowRight} micro size="16" />
				</div>
			</article>
		{/each}
	</div>
</section>
