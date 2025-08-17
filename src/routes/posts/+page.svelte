<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte'
	import { ArrowLeft, ArrowRight, Icon } from 'svelte-hero-icons'

	let { data } = $props()
</script>

<div class="p-8 pb-0 xl:px-32 py-16 xl:py-24 space-y-8 text-xl w-full text-center sm:text-left">
	<header class="space-y-6 max-w-xl">
		<a
			href="/"
			class="hover:underline dark:text-indigo-400 text-indigo-600 my-2 inline-flex flex-row items-center gap-1"
		>
			<Icon src={ArrowLeft} micro size="16" />
			Home
		</a>
		<h1 class="font-medium tracking-tight text-6xl sm:text-7xl font-display leading-[1.3]">
			Posts
		</h1>
	</header>
</div>
<section class="px-4 sm:px-8 xl:px-32 space-y-8 w-full pt-12">
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 z-0 px-8">
		{#each data.posts as post (post.title)}
			<a
				href={post.link}
				class={[
					'flex flex-col gap-1 border rounded-3xl border-slate-200 dark:border-zinc-800 p-6',
					'hover:bg-slate-100 hover:dark:bg-zinc-800 transition-colors group'
				]}
			>
				<div
					class="h-48 overflow-hidden grid place-items-center rounded-2xl *:scale-150 -mt-3 -mx-3 mb-3"
				>
					<Placeholder seed={post.title} />
				</div>
				{#if post.date}
					<div class="text-sm text-slate-500 dark:text-zinc-300 mt-2">
						{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(post.date))}
					</div>
				{/if}
				<div class="font-display text-2xl">{post.title}</div>
				<p class="max-w-md">
					{post.description}
				</p>
				<div
					class="text-indigo-500 font-medium flex flex-row gap-1 items-center group-hover:underline text-lg mt-auto"
				>
					Read <Icon src={ArrowRight} micro size="16" />
				</div>
			</a>
		{/each}
	</div>
</section>
