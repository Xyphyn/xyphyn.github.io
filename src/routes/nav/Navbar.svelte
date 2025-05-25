<script>
	import NavLink from './NavLink.svelte'
</script>

<div
	class="relative backdrop-blur-2xl w-max mx-auto rounded-full p-[1px] bg-gradient-to-br from-white/20 via-white/0 to-white/20 pointer-events-none"
>
	<nav
		class={[
			'rounded-full  backdrop-blur-xl bg-zinc-800/50 px-0.5 py-0.5 z-10 flex flex-row gap-0.5 font-medium text-sm pointer-events-auto'
		]}
	>
		<NavLink href="/">Home</NavLink>
		<NavLink href="/about">About</NavLink>
		<NavLink href="/posts">Posts</NavLink>
	</nav>
</div>
