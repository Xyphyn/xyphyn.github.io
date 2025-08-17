<script lang="ts">
	import { Icon, ArrowLeft } from 'svelte-hero-icons'
</script>

{#snippet gradientText(text: string)}
	<span
		class="bg-gradient-to-r from-indigo-500 dark:from-indigo-400 to-purple-500 dark:to-purple-400 text-transparent bg-clip-text p-0.5"
	>
		{text}
	</span>
{/snippet}

<section class="p-8 pb-0 xl:px-32 py-16 space-y-8 text-xl w-full text-center sm:text-left">
	<header class="space-y-6 max-w-6xl">
		<a
			href="/"
			class="hover:underline dark:text-indigo-400 text-indigo-600 my-2 inline-flex flex-row items-center gap-1"
		>
			<Icon src={ArrowLeft} micro size="16" />
			Home
		</a>
		<h1 class="font-medium tracking-tight text-6xl sm:text-7xl font-display leading-[1.3]">
			I am a {@render gradientText('developer')} and {@render gradientText('designer.')}
		</h1>
	</header>
</section>

<div class="flex flex-col xl:flex-row gap-8">
	<section class="p-8 xl:px-32 py-16 space-y-8 text-xl flex-1">
		<p class="max-w-xl leading-8">
			My most significant project is <a
				href="https://github.com/Xyphyn/photon"
				class="hover:underline text-indigo-600
				dark:text-indigo-400"
			>
				Photon,
			</a>
			which I originally started making in 2023 when Lemmy started to take off.
		</p>
		<p class="max-w-xl leading-8">
			It allowed me to significantly improve at web design, which has since become a big part of
			what I do.
		</p>
		<p class="max-w-xl leading-8">My favorite web stack is SvelteKit and TailwindCSS.</p>
		<p class="max-w-xl leading-8">
			I know a lot about computer science and lower level operation, but haven't worked on any
			significant project using it. I would like to get into it though.
		</p>
	</section>
	<section class="flex-1 p-8 xl:px-32 py-16 space-y-8 text-xl w-full">
		<h2 class="text-2xl font-bold font-display">Specs</h2>
		{#snippet spec(label: string, value: string)}
			<li class="w-full flex">
				<span class="font-bold font-display">{label}</span>
				<span class="ml-auto">{value}</span>
			</li>
		{/snippet}
		<ul class="list-disc marker:text-slate-400 marker:dark:text-zinc-600 w-full">
			<div class="text-base mb-2">PC</div>
			{@render spec('CPU', 'Ryzen 5600X')}
			{@render spec('GPU', 'RX 6600 XT')}
			{@render spec('Memory', '32GiB (3600MHz)')}
			{@render spec('OS', 'Arch Linux')}
		</ul>
		<ul class="list-disc marker:text-slate-400 marker:dark:text-zinc-600 w-full">
			<div class="text-base mb-2">Server</div>
			{@render spec('Used to be a', 'Dell Vostro 460')}
			{@render spec('CPU', 'Core i3 2120')}
			{@render spec('Memory', '8GiB (1633MHz)')}
			{@render spec('Disk', '240 GiB')}
			{@render spec('OS', 'Debian 12')}
		</ul>
		<ul class="list-disc marker:text-slate-400 marker:dark:text-zinc-600 w-full">
			<div class="text-base mb-2">Misc</div>
			{@render spec('Phone', 'Pixel 8')}
			{@render spec('Keyboard', 'Neo65 (KTT Strawberries)')}
		</ul>
	</section>
</div>
