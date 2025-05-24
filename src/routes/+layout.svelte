<script lang="ts">
	import '../app.css'

	let { children } = $props()
</script>

<div class="min-h-screen w-full flex flex-col">
	{@render children()}
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
