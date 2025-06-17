<script lang="ts">
	import type { Snippet } from 'svelte'
	import type { ClassValue } from 'svelte/elements'

	const containerSize = {
		xs: 'px-3 py-1.5',
		sm: 'px-3 py-2',
		md: 'px-4 py-3',
		lg: 'px-5 py-4',
		xl: 'px-6 py-5 gap-1'
	}

	const containerRounding = {
		full: 'rounded-full',
		xl: 'rounded-3xl',
		lg: 'rounded-2xl'
	}

	interface Props {
		size?: keyof typeof containerSize
		rounding?: keyof typeof containerRounding
		children: Snippet
		class?: ClassValue
		title?: Snippet
		clickable?: boolean
		footer?: Snippet
		href?: string
	}

	let {
		size = 'md',
		rounding = 'xl',
		title,
		children,
		footer,
		clickable = true,
		href,
		class: clazz
	}: Props = $props()
</script>

<svelte:element
	this={href ? 'a' : 'div'}
	{href}
	class={[
		containerSize[size],
		containerRounding[rounding],
		clickable && 'cursor-pointer',
		'relative bg-zinc-850 transition-colors group',
		'cc before:z-10 flex flex-col',
		clazz
	]}
>
	{#if title}
		<div class="font-bold text-2xl tracking-tight font-display">{@render title()}</div>
	{/if}
	{@render children?.()}
	{#if footer}
		<div class="flex flex-row gap-2 text-sm text-zinc-400 self-end justify-self-end mt-auto">
			{@render footer()}
		</div>
	{/if}
</svelte:element>

<style lang="postcss">
	@property --gradient-rotate {
		syntax: '<angle>';
		inherits: false;
		initial-value: 125deg;
	}

	.cc::before {
		transition: --gradient-rotate 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.cc:hover::before {
		--gradient-rotate: 0deg;
	}

	.cc::before {
		content: '';
		inset: -1px;
		position: absolute;
		border-radius: inherit;
		z-index: -1;
		background: linear-gradient(
			var(--gradient-rotate),
			color-mix(in oklab, var(--color-zinc-300) 20%, transparent) 0%,
			color-mix(in oklab, var(--color-zinc-400) 20%, transparent) 20%,
			color-mix(in oklab, var(--color-zinc-400) 0%, transparent) 50%,
			color-mix(in oklab, var(--color-zinc-400) 20%, transparent) 80%,
			color-mix(in oklab, var(--color-zinc-300) 20%, transparent) 100%
		);
	}
</style>
