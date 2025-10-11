<script lang="ts">
	import { page } from '$app/state'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<meta name="keywords" content="developer, portfolio, xylight" />
	<meta name="author" content="Xylight" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="min-h-screen w-full flex flex-col">
	{#if page.url.pathname != '/'}
		<nav
			class={[
				'flex items-center flex-wrap justify-start px-4 sm:px-8 pt-6 z-50 p-4 pb-0 xl:px-32',
				page.url.pathname == '/' && 'xl:mt-16'
			]}
		>
			{#snippet link(href: string, label: string, index: number = 0)}
				<a
					{href}
					class={[
						'font-display hover:underline',
						'px-3 lg:px-4 py-2 transition-colors inline-flex flex-row items-center gap-2'
					]}
				>
					{label}
				</a>
			{/snippet}

			{@render link('/', 'Home')}
			{@render link('/#projects', 'Projects')}
			{@render link('/posts', 'Posts')}
		</nav>
	{/if}
	<main class="z-0">
		{@render children()}
	</main>
	<footer
		class=" flex flex-row px-8 w-full text-zinc-600 dark:text-zinc-400 font-medium text-sm py-6 gap-4 mt-auto"
	>
		<div>xylight.dev</div>
	</footer>
</div>
