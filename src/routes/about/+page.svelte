{#snippet specBlock(/** @type {string} */ text)}
	<span class="font-mono text-base bg-zinc-800 rounded-full p-0.5 px-2 inline-block">{text}</span>
{/snippet}

<div class="flex flex-col-reverse xl:flex-row xl:items-center">
	<section class="max-w-7xl px-8 w-full">
		<div class="xl:p-16 xl:px-32 text-xl max-w-7xl mx-auto space-y-4">
			<header class="space-y-6 flex items-center gap-4 animate-pop-in">
				<h1 class="font-semibold text-7xl tracking-tighter">About</h1>
			</header>
		</div>
	</section>
	<div class="px-8 shrink-0">
		<enhanced:img
			src="./profile.jpeg"
			class="rounded-full w-24 h-24 lg:w-48 lg:h-48"
		></enhanced:img>
	</div>
</div>
<section
	class="max-w-6xl px-8 mt-8 xl:mt-0 xl:px-40 w-full text-lg leading-[1.5] text-zinc-200 typography space-y-4"
>
	<p>
		I'm a developer from California who spends time on web design and learning about technology.
	</p>
	<p>
		My most notable project is
		<a href="https://github.com/xyphyn/photon" class="text-sky-500 hover:underline">Photon,</a>
		which I made after seeing a lack of development within the UI of Lemmy. It allowed me to hone in
		my design skills and it's become
		<s class="text-zinc-600">the only part I enjoy</s>
		what I enjoy most in web development.
	</p>
	<p>
		I use Arch Linux with a TWM on my {@render specBlock('PC (5600x/6600 XT/32GB)')}
		and a {@render specBlock('Neo65')} as my keyboard. I use a {@render specBlock('Pixel 8')} as well.
	</p>
	<p>
		I frequent Lemmy typically on the instance <a
			class="text-sky-500 hover:underline"
			href="https://lemdro.id"
		>
			lemdro.id
		</a>
		(which uses Photon, by the way!)
	</p>
</section>

<style>
	.typography p {
		max-width: 32rem;
	}
</style>
