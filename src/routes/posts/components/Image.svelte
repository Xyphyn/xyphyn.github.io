<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements'

	interface Props extends HTMLImgAttributes {
		src: string
		title?: string
	}

	let { src, title, ...rest }: Props = $props()
</script>

<div
	class="block mx-auto max-h-[30rem] h-[30rem] w-max border border-slate-200 dark:border-zinc-800 rounded-2xl p-2 my-8"
>
	<img {src} {...rest} class="rounded-xl block h-full object-cover" />
	<p class="mx-auto italic w-max m-2">{title}</p>
</div>
