<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		maxWidth?: boolean
		children: Snippet
	}

	let { maxWidth = true, children } = $props()
</script>

<section class="px-4 sm:px-8 xl:px-16 space-y-8 w-full pt-12 mb-48 max-w-7xl mx-auto">
	{@render children?.()}
</section>
