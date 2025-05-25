<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLAnchorAttributes } from 'svelte/elements'

	interface Props extends HTMLAnchorAttributes {
		children: Snippet
	}

	let { children, ...rest }: Props = $props()
</script>

<a
	{...rest}
	class={[
		'rounded-full font-medium hover:bg-zinc-700/50 cursor-pointer px-4 py-1.5',
		'transition-colors duration-75'
	]}
>
	{@render children?.()}
</a>
