<script lang="ts">
	import { page } from '$app/state'
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	interface Props extends HTMLAnchorAttributes {
		children: Snippet
	}

	let { children, ...rest }: Props = $props()
	let selected = $derived(page.route.id == rest.href)
</script>

<a
	{...rest}
	class={[
		'rounded-full font-medium tracking-wide hover:bg-zinc-700/50 cursor-pointer px-4 py-1.5',
		'transition-colors duration-75 relative'
	]}
>
	{@render children?.()}
	{#if selected}
		<div
			class="absolute bottom-0 left-2/3 w-2/3 -translate-x-3/4 h-px bg-gradient-to-r from-zinc-50/0 via-zinc-50/50 to-zinc-50/0 rounded-full"
		></div>
	{/if}
</a>
