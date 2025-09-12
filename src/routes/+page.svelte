<script lang="ts">
	import TextAnim from '$lib/TextAnim.svelte'
	import type { Snippet } from 'svelte'
	import {
		ArrowTopRightOnSquare,
		CodeBracket,
		Icon,
		ServerStack,
		Share,
		type IconSource
	} from 'svelte-hero-icons'
</script>

<svelte:head>
	<title>xylight.dev</title>
	<meta name="description" content="Xylight's portfolio" />
</svelte:head>

<div class="z-0 space-y-8 flex flex-col justify-center items-center">
	<div class="absolute top-0 w-full -z-10" role="presentation">
		<!--Hack because blur is broken on Firefox-->
		<div class="w-full h-[48rem] -z-10 backdrop-blur-3xl"></div>
		<div class="glow-container pointer-events-none opacity-50 dark:opacity-10 -z-10">
			<svg
				class="pointer-events-none top-0 w-full h-auto"
				width="1000"
				height="250"
				viewBox="0 0 1171 241"
				fill="none"
			>
				<defs>
					<linearGradient
						id="grad1"
						x1="568"
						y1="1"
						x2="1029"
						y2="65"
						gradientUnits="userSpaceOnUse"
					>
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
					<linearGradient
						id="grad3"
						x1="155"
						y1="-11"
						x2="512"
						y2="-162"
						gradientUnits="userSpaceOnUse"
					>
						<stop stop-color="oklch(0.7 0.2462 348.14)" />
						<stop offset="0.5" stop-color="oklch(0.7729 0.1771 322.73)" />
						<stop offset="1" stop-color="oklch(0.7729 0.1278 286.73)" />
					</linearGradient>
				</defs>
				<g>
					<path
						d="M732-180C597-158 516-74 553 7s175 130 310 108 246-105 210-186-139-49-274-27z"
						fill="url(#grad1)"
					/>
					<ellipse cx="300" cy="-38" rx="258" ry="120" fill="url(#grad2)" />
				</g>
			</svg>
		</div>
	</div>
	<div
		class="p-8 pb-0 xl:px-32 py-16 xl:py-16 space-y-8 text-xl w-full text-center justify-center sm:text-left sm:justify-start"
	>
		<header class="space-y-6 max-w-xl">
			<h1
				class="font-medium tracking-tight text-6xl sm:text-7xl font-display flex justify-center sm:justify-start"
			>
				<span class="animate-pop-in inline-block">xylight</span>
				<span class="animate-pop-in inline-block" style="animation-delay: 100ms; opacity: 0;">
					.dev
				</span>
			</h1>
			<div class="text-zinc-700 dark:text-zinc-300">
				<TextAnim text="I am a hobbyist software engineer and designer." />
			</div>
			{#snippet link(href: string, label: string, index: number = 0)}
				<a
					{href}
					class="text-base text-indigo-600 dark:text-indigo-400 hover:underline animate-pop-in"
					style="animation-delay: {index * 100}ms; opacity: 0;"
				>
					{label}
				</a>
			{/snippet}

			<nav class="flex flex-row gap-5 flex-wrap">
				{@render link('https://github.com/Xyphyn', 'GitHub', 0)}
				{@render link('https://matrix.to/#/@xylight:chat.phtn.app', 'Matrix', 1)}
				{@render link('https://lemdro.id/u/Xylight', 'Lemmy', 2)}
			</nav>
		</header>
	</div>

	<section class="px-8 xl:px-32 space-y-8 w-full pt-12 animate-pop-in">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto">
			{#snippet project(
				number: number,
				name: string,
				description: string,
				icon?: IconSource,
				url?: string,
				img?: Snippet
			)}
				<svelte:element
					this={url ? 'a' : 'article'}
					href={url}
					class={[
						'flex flex-col gap-1 border rounded-3xl border-zinc-200 dark:border-zinc-800 p-8',
						'hover:bg-indigo-500/2 transition-colors group relative overflow-hidden'
					]}
				>
					{#if img}
						<div class="h-64 mask-b-from-0 rounded-2xl overflow-hidden -mx-5 -mt-5">
							{@render img()}
						</div>
					{/if}
					<div
						class={[
							'bg-radial from-indigo-500/20 via-70% via-indigo-500/0',
							'w-4xl aspect-square h-auto absolute -top-[33rem] -right-[33rem]',
							'opacity-0 group-hover:opacity-100 transition-opacity -z-10'
						]}
					></div>
					{#if number != 0}
						<div
							class={[
								'bg-zinc-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 rounded-full',
								'w-7 h-7 grid place-items-center font-bold font-display z-10'
							]}
						>
							{number}
						</div>
					{/if}
					<div class={[img && 'flex-1']}></div>
					<div class={['flex items-start gap-2']}>
						<h3 class={['font-display text-3xl w-full']}>
							{name}
						</h3>
					</div>
					<p class="text-lg text-zinc-700 dark:text-zinc-300">
						{description}
					</p>
					{#if url}
						<div
							class="text-indigo-600 dark:text-indigo-400 flex flex-row gap-1 items-center"
							aria-hidden="true"
						>
							<Icon src={ArrowTopRightOnSquare} size="16" micro />
							<div>{new URL(url).hostname}</div>
						</div>
					{/if}
				</svelte:element>
			{/snippet}

			{#snippet photonImg()}
				<div class="contents dark:hidden">
					<enhanced:img
						src="./photon.png?w=320;480"
						sizes="(min-width:1280px) 320px, (min-width:720px) 320px"
						alt="A screenshot of the interface of Photon"
						class="object-cover object-top w-full h-full"
						fetchpriority="high"
					/>
				</div>
				<div class="hidden dark:contents">
					<enhanced:img
						src="./photon-dark.png?w=660;480;320"
						sizes="(min-width:1280px) 320px, (min-width:720px) 320px"
						alt="A screenshot of the interface of Photon"
						class="object-cover object-top w-full h-full"
						fetchpriority="high"
					/>
				</div>
			{/snippet}
			<div class="lg:col-span-2 mx-auto">
				{@render project(
					0,
					'Photon',
					`A fully-featured, well designed, and mature Svelte based web client for the fediverse.`,
					undefined,
					'https://use.phtn.app',
					photonImg
				)}
			</div>
			{@render project(
				1,
				'Software development',
				'I study & enjoy learning about the design and architecture of software, especially in low level languages. I personally develop software in higher level languages like TypeScript, Kotlin, or Rust.',
				CodeBracket
			)}
			{@render project(
				2,
				'System administration',
				`I enjoy managing my home server as a hobby, hosting services that help me and others. I also enjoy studying how network stacks work and managing them.`,
				ServerStack
			)}
			{@render project(
				3,
				'Fediverse',
				'I frequently observe and interact in the development of fediverse platforms, helping build them with more accessible interfaces like Photon.',
				Share
			)}
			{@render project(4, '', '...')}
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
