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
		'rounded-full font-medium cursor-pointer',
		'transition-colors duration-75 relative hover:underline'
	]}
>
	{@render children?.()}
</a>
