<script>
	import NavLink from './NavLink.svelte'
</script>

<div class="relative backdrop-blur-2xl w-max rounded-full pointer-events-none">
	<nav
		class={[
			'rounded-full bg-zinc-850/50 z-10 flex flex-row gap-4 text-base font-medium pointer-events-auto'
		]}
	>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/posts">Posts</NavLink>
	</nav>
</div>
