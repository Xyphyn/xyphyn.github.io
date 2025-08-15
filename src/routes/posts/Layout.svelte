<script lang="ts" module>
	import Placeholder from '$lib/Placeholder.svelte'
	import { ArrowLeft, Icon } from 'svelte-hero-icons'
	import {
		H1 as h1,
		H2 as h2,
		H3 as h3,
		Paragraph as p,
		Code as code,
		Img as img
	} from './components/index'

	export { h1, h2, h3, p, code, img }
</script>

<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		title: string
		description: string
		date: string
		link: string
		children: Snippet
	}

	let { children, date, title, description, link }: Props = $props()
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<div class="relative z-0 -mt-20">
	<header class="z-20 p-24 space-y-6 pt-40 w-4xl mx-auto">
		<a
			href="/posts"
			class="hover:underline dark:text-indigo-400 text-indigo-600 my-2 px-6 flex flex-row items-center gap-1"
		>
			<Icon src={ArrowLeft} micro size="16" />
			Back
		</a>
		{#if date}
			<div class="text-sm md:text-base text-slate-500 dark:text-zinc-300 px-6">
				{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(date))}
			</div>
		{/if}
		<h1 class="font-display text-4xl md:text-5xl px-6">{title}</h1>
		<div class="w-full h-full rounded-2xl overflow-hidden grid place-items-center">
			<Placeholder seed={title} />
		</div>
		<p class="text-base md:text-lg px-6">
			{description}
		</p>
	</header>
	<div class={['max-w-3xl w-full mx-auto px-8 mt-8', 'border-zinc-700 space-y-8']}>
		<div
			class={[
				'prose prose-lg prose-zinc dark:prose-invert prose-h1:m-0',
				'prose-h1:font-display prose-h1:tracking-tight prose-h2:font-display prose-h2:tracking-tight prose-h3:font-display prose-h3:tracking-tight',
				'prose-pre:rounded-2xl prose-pre:border prose-pre:border-zinc-800',
				'prose-li:my-0 prose-img:rounded-2xl prose-img:border prose-img:border-zinc-700',
				'prose-a:text-sky-500 prose-a:no-underline prose-a:hover:underline',
				'prose-pre:max-h-[32rem] prose-pre:overflow-y-auto prose-pre:max-w-full prose-pre:overflow-x-wrap',
				'prose-img:mx-auto'
			]}
		>
			{@render children()}
		</div>
	</div>
</div>
