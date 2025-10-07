<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { HTMLImgAttributes } from 'svelte/elements'

	interface Props extends Omit<HTMLImgAttributes, 'children'> {
		title?: string
		source?: string
		class?: string
		children: Snippet<[string | null | undefined]>
	}

	let { title, source, class: clazz, children, ...rest }: Props = $props()
</script>

<div class="block mx-auto max-w-full! w-max">
	<div
		class={[
			'rounded-xl block h-max object-contain mx-auto max-w-full my-0! overflow-hidden',
			clazz
		]}
	>
		{@render children?.(rest.alt)}
	</div>
	{#if title}
		<p class="mx-auto w-max m-2">{title}</p>
	{/if}
	{#if source}
		<a href={source} class="hover:underline mx-auto w-max block my-1">
			{new URL(source).hostname}
		</a>
	{/if}
</div>
