<script lang="ts">
	import type { Snippet } from 'svelte'
</script>

<div class=" z-0 space-y-8 flex flex-col justify-center items-center">
	<div class="glow-container -z-10 pointer-events-none">
		<!--stolen from fly.io because i'm shameless-->
		<svg
			class="pointer-events-none top-0 w-full min-w-[80rem] h-auto opacity-50 dark:opacity-10"
			width="1000"
			height="250"
			viewBox="0 0 1171 241"
			fill="none"
		>
			<g filter="url(#filter0_f)">
				<path
					d="M731.735 -179.55C596.571 -157.762 516.36 -74.1815 552.576 7.13199C588.793 88.4455 727.724 136.701 862.887 114.913C998.051 93.1247 1078.26 9.54454 1042.05 -71.769C1005.83 -153.082 866.898 -201.337 731.735 -179.55Z"
					fill="url(#paint0_linear)"
				></path>
				<path
					d="M378 114.106C520.489 114.106 636 45.8883 636 -38.2623C636 -122.413 520.489 -190.63 378 -190.63C235.511 -190.63 120 -122.413 120 -38.2623C120 45.8883 235.511 114.106 378 114.106Z"
					fill="url(#paint1_linear)"
				></path>
			</g>
			<defs>
				<filter
					id="filter0_f"
					x="0"
					y="-310.63"
					width="1170.74"
					height="550.775"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="BackgroundImageFix"
						result="shape"
					></feBlend>
					<feGaussianBlur stdDeviation="60" result="effect1_foregroundBlur"></feGaussianBlur>
				</filter>
				<linearGradient
					id="paint0_linear"
					x1="567.5"
					y1="1.03997"
					x2="1029.02"
					y2="64.6468"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="oklch(0.4676 0.3157 264.18)"></stop>
					<stop offset="1" stop-color="oklch(0.8433 0.2121 170.47)"></stop>
				</linearGradient>
				<linearGradient
					id="paint1_linear"
					x1="155"
					y1="-11.0234"
					x2="511.855"
					y2="-162.127"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="oklch(0.8267 0.1598 73.06)"></stop>
					<stop offset="0.504191" stop-color="oklch(0.6382 0.2861 359.35)"></stop>
					<stop offset="1" stop-color="oklch(0.5088 0.3009 283.7475)"></stop>
				</linearGradient>
			</defs>
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
					class="rounded-full cursor-pointer bg-red-50 border-red-100 dark:border-red-400/20 border text-red-500 dark:text-red-300 dark:bg-red-400/10 font-bold px-2.5 py-1 text-sm"
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
					src="./photon.png"
					alt="A screenshot of the interface of Photon"
					class="object-cover object-top w-full h-full"
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
