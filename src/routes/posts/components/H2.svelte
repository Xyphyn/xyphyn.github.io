<script lang="ts">
	import { type Snippet } from 'svelte'
	import type { HTMLAttributes } from 'svelte/elements'

	interface Props extends HTMLAttributes<HTMLHeadingElement> {
		children?: Snippet
		id?: string
	}

	let { children, id, ...rest }: Props = $props()
</script>

<h2 {...rest} {id}>{@render children?.()}</h2>
