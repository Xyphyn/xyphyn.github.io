<script lang="ts">
	import '../app.css'
	import Navbar from './nav/Navbar.svelte'

	let { children } = $props()
</script>

<svelte:head>
	<title>xylight.dev</title>
	<meta name="keywords" content="developer, portfolio, xylight" />
	<meta name="author" content="Xylight" />
	<meta name="description" content="Xylight's portfolio" />
</svelte:head>

<div class="min-h-screen w-full flex flex-col">
	<div class="sticky top-0 w-full p-4 pointer-events-none z-40">
		<Navbar />
	</div>
	<main class="z-0">
		{@render children()}
	</main>
	<footer class="mt-auto flex flex-row px-8 w-full text-zinc-400 font-medium text-sm py-8 gap-4">
		<div>xylight.dev</div>
		<div class="flex-1"></div>
		<div class="flex flex-row flex-wrap gap-4">
			<a class="hover:underline" href="https://matrix.to/#/@xylightsucks:matrix.org">Matrix</a>
			<a class="hover:underline" href="https://lemdro.id/u/Xylight">Lemmy</a>
			<a class="hover:underline" href="https://github.com/Xyphyn">GitHub</a>
		</div>
	</footer>
</div>
