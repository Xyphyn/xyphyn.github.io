<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements'

	interface Props extends HTMLImgAttributes {
		src: string
		title?: string
		source?: string
		class?: string
	}

	let { src, title, source, class: clazz, ...rest }: Props = $props()
</script>

<div
	class="block mx-auto max-w-full! w-max border border-zinc-200 dark:border-zinc-800 rounded-2xl p-2 my-8 min-w-0"
>
	<img
		{src}
		{...rest}
		class={['rounded-xl block h-full object-contain mx-auto max-w-full', clazz]}
	/>
	{#if title}
		<p class="mx-auto italic w-max m-2">{title}</p>
	{/if}
	{#if source}
		<a
			href={source}
			class="hover:underline text-indigo-600 dark:text-indigo-400 mx-auto w-max block my-1"
		>
			{new URL(source).hostname}
		</a>
	{/if}
</div>
