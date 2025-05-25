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
		children: Snippet
	}

	let { children, date, title, description }: Props = $props()
</script>

<div class="relative z-0">
	<div
		class={[
			'max-w-3xl w-full mx-auto px-8 border-x min-h-screen -mt-24 pt-24',
			'border-zinc-700 space-y-8'
		]}
	>
		{#snippet titleSnippet()}
			{#if date}
				<div class="text-sm text-zinc-300 tracking-tight">
					{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(date))}
				</div>
			{/if}
			<div>{title}</div>
		{/snippet}
		<ContainerLighting rounding="xl" size="md" title={titleSnippet}>
			{description}
		</ContainerLighting>

		<div
			class={[
				'prose prose-lg prose-zinc prose-invert prose-h1:m-0',
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
