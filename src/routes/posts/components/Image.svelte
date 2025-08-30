<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements'

	interface Props extends HTMLImgAttributes {
		src: string
		title?: string
	}

	let { src, title, ...rest }: Props = $props()
</script>

<div
	class="block mx-auto max-w-full w-full border border-slate-200 dark:border-zinc-800 rounded-2xl p-2 my-8"
>
	<img {src} {...rest} class="rounded-xl block h-full object-contain mx-auto max-w-full" />
	<p class="mx-auto italic w-max m-2">{title}</p>
</div>
