<script lang="ts">
	import { page } from '$app/state'
	import '../app.css'

	let { children } = $props()
</script>

<svelte:head>
	<title>xylight.dev</title>
	<meta name="keywords" content="developer, portfolio, xylight" />
	<meta name="author" content="Xylight" />
	<meta name="description" content="Xylight's portfolio" />
	<meta name="robots" content="index, follow" />
</svelte:head>

<div class="min-h-screen w-full flex flex-col">
	<div class="pointer-events-none z-50 p-4">
		<nav class="p-1 w-max h-full flex items-center gap-0.5 pointer-events-auto">
			{#snippet link(label: string, href: string)}
				{@const selected = page.url.pathname == href}
				<a
					{href}
					class={[
						selected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-500 dark:text-zinc-500',
						'px-3 py-1 rounded-full font-bold text-sm hover:text-slate-900 hover:dark:text-zinc-50'
					]}
				>
					{label}
				</a>
			{/snippet}
			{@render link('Home', '/')}
			{@render link('Posts', '/posts')}
		</nav>
	</div>
	<main class="z-0">
		{@render children()}
	</main>
	<footer
		class=" flex flex-row px-8 w-full text-slate-600 dark:text-zinc-400 font-medium text-sm py-6 gap-4 mt-auto"
	>
		<div>xylight.dev</div>
		<div class="flex-1"></div>
		<div class="flex flex-row flex-wrap gap-4">
			<a class="hover:underline" href="https://matrix.to/#/@xylight:chat.phtn.app">Matrix</a>
			<a class="hover:underline" href="https://lemdro.id/u/Xylight">Lemmy</a>
			<a class="hover:underline" href="https://github.com/Xyphyn">GitHub</a>
		</div>
	</footer>
</div>
