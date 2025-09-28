<script lang="ts">
	import type { Snippet } from 'svelte'

	interface Props {
		children: Snippet
	}

	let { children } = $props()
</script>

<section class="px-4 sm:px-8 xl:px-32 space-y-8 w-full pt-12 mb-48">
	{@render children?.()}
</section>
