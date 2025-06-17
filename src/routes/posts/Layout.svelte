<script lang="ts" module>
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
	import ContainerLighting from '$lib/ContainerLighting.svelte'
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
	<header class="bg-zinc-850 z-20 p-24 text-center space-y-4 pt-40">
		<h1 class="font-display text-4xl md:text-5xl xl:text-6xl">{title}</h1>
		<p class="text-base md:text-lg tracking-wide">
			{description}
		</p>
		{#if date}
			<div class="text-sm md:text-base text-zinc-300">
				{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(date))}
			</div>
		{/if}
	</header>
	<div class={['max-w-3xl w-full mx-auto px-8 mt-8', 'border-zinc-700 space-y-8']}>
		<div
			class={[
				'prose prose-lg prose-zinc prose-invert prose-h1:m-0',
				'prose-h1:font-display prose-h1:tracking-tight prose-h2:font-display prose-h2:tracking-tight prose-h3:font-display prose-h3:tracking-tight',
				'prose-pre:rounded-2xl prose-pre:border prose-pre:border-zinc-800',
				'prose-li:my-0 prose-img:rounded-2xl prose-img:border prose-img:border-zinc-700',
				'prose-a:text-sky-500 prose-a:no-underline prose-a:hover:underline',
				'prose-pre:max-h-[32rem] prose-pre:overflow-y-auto prose-pre:max-w-full prose-pre:overflow-x-wrap',
				'prose-img:mx-auto prose-p:tracking-wide'
			]}
		>
			{@render children()}
		</div>
	</div>
</div>
