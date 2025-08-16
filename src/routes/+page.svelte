<script lang="ts">
	import type { Snippet } from 'svelte'
</script>

<div class="z-0 space-y-8 flex flex-col justify-center items-center">
	<div class="glow-container -z-10 pointer-events-none">
		<svg
			class="pointer-events-none top-0 w-full h-auto opacity-50 dark:opacity-10"
			width="1000"
			height="250"
			viewBox="0 0 1171 241"
			fill="none"
		>
			<defs>
				<filter id="blur" x="0" y="-311" width="1170" height="550" filterUnits="userSpaceOnUse">
					<feGaussianBlur stdDeviation="60" />
				</filter>
				<linearGradient id="grad1" x1="568" y1="1" x2="1029" y2="65" gradientUnits="userSpaceOnUse">
					<stop stop-color="oklch(0.47 0.32 264)" />
					<stop offset="1" stop-color="oklch(0.84 0.21 170)" />
				</linearGradient>
				<linearGradient
					id="grad2"
					x1="155"
					y1="-11"
					x2="512"
					y2="-162"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="oklch(0.83 0.16 73)" />
					<stop offset="0.5" stop-color="oklch(0.64 0.29 359)" />
					<stop offset="1" stop-color="oklch(0.51 0.30 284)" />
				</linearGradient>
			</defs>
			<g filter="url(#blur)">
				<path
					d="M732-180C597-158 516-74 553 7s175 130 310 108 246-105 210-186-139-49-274-27z"
					fill="url(#grad1)"
				/>
				<ellipse cx="378" cy="-38" rx="258" ry="76" fill="url(#grad2)" />
			</g>
		</svg>
	</div>
	<div class="p-8 pb-0 xl:px-32 py-16 xl:py-16 space-y-8 text-xl w-full text-center sm:text-left">
		<header class="space-y-6 max-w-xl">
			<h1 class="font-medium tracking-tight text-6xl sm:text-7xl font-display leading-[1.3]">
				xylight.dev
			</h1>
			<div class="text-slate-700 dark:text-zinc-300">
				<p>I am a hobbyist software engineer and designer, discovering the technology around us.</p>
			</div>
			{#snippet link(href: string, label: string)}
				<a {href} class="text-base text-indigo-600 dark:text-indigo-400 hover:underline">
					{label}
				</a>
			{/snippet}

			<div class="flex flex-row gap-4 flex-wrap">
				{@render link('/posts', 'Posts')}
				{@render link('https://github.com/Xyphyn', 'GitHub')}
				{@render link('https://matrix.to/#/@xylight:chat.phtn.app', 'Matrix')}
				{@render link('https://lemdro.id/u/Xylight', 'Lemmy')}
			</div>
		</header>
	</div>

	<section
		class="px-8 xl:px-32 space-y-8 w-full border-t border-slate-200 dark:border-zinc-800 pt-12"
	>
		<header class="text-left">
			<h2 class="text-xl text-slate-600 dark:text-zinc-400 font-medium">What I do</h2>
		</header>
		<div class="flex flex-row gap-2 flex-wrap">
			{#snippet technology(name: string, hue: number)}
				<div
					style="filter: hue-rotate({hue}deg);"
					class="rounded-full cursor-pointer bg-red-50 border-red-100 dark:border-red-400/20 border text-red-700 dark:text-red-300 dark:bg-red-400/10 font-bold px-2.5 py-1 text-sm"
				>
					{name}
				</div>
			{/snippet}

			{@render technology('Svelte', 0)}
			{@render technology('JavaScript', 40)}
			{@render technology('Kotlin', 300)}
			{@render technology('Linux', 200)}
			{@render technology('Sysadmin', 20)}
			{@render technology('Docker', 220)}
			{@render technology('Networking', 180)}
			{@render technology('Git', 220)}
			{@render technology('ML', 80)}
		</div>
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-8">
			{#snippet project(name: string, description: string, url?: string, img?: Snippet)}
				<svelte:element
					this={url ? 'a' : 'article'}
					href={url}
					class={[
						'space-y-3 rounded-2xl p-6 relative overflow-hidden first:row-span-2 cursor-pointer',
						'first:bg-indigo-50 first:dark:bg-indigo-900/20 bg-slate-50 dark:bg-zinc-900',
						'transition-all h-full',
						'border first:border-indigo-100 first:dark:border-indigo-500/20 border-slate-200 dark:border-zinc-800 hover:border-indigo-200 hover:dark:border-zinc-700'
					]}
				>
					{#if img}
						<div class="h-48 overflow-hidden mask-b-from-0 rounded-t-xl">
							{@render img()}
						</div>
					{/if}
					<h3 class="font-display text-2xl">{name}</h3>
					<p>
						{description}
					</p>
				</svelte:element>
			{/snippet}

			{#snippet photonImg()}
				<enhanced:img
					src="./photon.png?w=320;480"
					sizes="(min-width:1280px) 320px, (min-width:720px) 320px"
					alt="A screenshot of the interface of Photon"
					class="object-cover object-top w-full h-full"
					fetchpriority="high"
				/>
			{/snippet}
			{@render project(
				'Photon',
				`A fully-featured, well designed, and mature Svelte based web client for the fediverse.`,
				'https://use.phtn.app',
				photonImg
			)}
			{@render project(
				'Software development',
				'I study & enjoy learning about the design and architecture of software, especially in low level languages. I personally develop software in higher level languages like TypeScript, Kotlin, or Rust.'
			)}
			{@render project(
				'System administration',
				`I enjoy managing my home server as a hobby, hosting services that help me and others. I also enjoy studying how network stacks work and managing them.`
			)}
			{@render project(
				'Fediverse',
				'I frequently observe and interact in the development of fediverse platforms, helping build them with more accessible interfaces like Photon.'
			)}
		</div>
	</section>
</div>

<style>
	.glow-container {
		position: absolute;
		width: 100%;
		top: 0;
		height: 48rem;
		max-width: 100%;
		z-index: -1;
		overflow: hidden;
	}
</style>
