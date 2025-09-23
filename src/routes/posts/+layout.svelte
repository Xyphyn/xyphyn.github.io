<script lang="ts">
	let { children } = $props()
</script>

<nav class="flex flex-row items-center px-8 pt-16 pb-8 xl:px-16 gap-8 font-display font-bold">
	{#snippet link(href: string, label: string, selected: boolean)}
		<a
			class={[
				selected ? 'text-indigo-600 dark:text-indigo-300' : 'text-zinc-600 dark:text-zinc-400'
			]}
			{href}
		>
			{label}
		</a>
	{/snippet}

	{@render link('/', 'xylight.dev')}
	{@render link('/posts', 'Posts', true)}
</nav>

{@render children?.()}
