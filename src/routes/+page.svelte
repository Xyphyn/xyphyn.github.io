<script lang="ts">
	import TextAnim from '$lib/TextAnim.svelte'
	import type { Snippet } from 'svelte'
	import { CodeBracket, Icon, ServerStack, Share, type IconSource } from 'svelte-hero-icons'
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
				<svg
					class="text-indigo-600 dark:text-indigo-400 inline-block self-center mt-3 ml-2 animate-pop-in"
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					width="24"
					height="24"
					viewBox="15 15 70 70"
					style="animation-delay: 200ms; opacity: 0;"
				>
					<path
						d="M45 20.8868C48.094 19.1004 51.906 19.1004 55 20.8868L72.7128 31.1132C75.8068 32.8996 77.7128 36.2008 77.7128 39.7735V60.2265C77.7128 63.7992 75.8068 67.1004 72.7128 68.8867L55 79.1133C51.906 80.8996 48.094 80.8996 45 79.1133L27.2872 68.8867C24.1932 67.1004 22.2872 63.7992 22.2872 60.2265V39.7735C22.2872 36.2008 24.1932 32.8996 27.2872 31.1132L45 20.8868Z"
					/>
				</svg>
				<span class=" "></span>
			</h1>
			<div class="text-slate-700 dark:text-zinc-300">
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

	<section
		class="px-8 xl:px-32 space-y-8 w-full border-t border-slate-200 dark:border-zinc-800 pt-12 animate-pop-in"
	>
		<header class="text-left">
			<h2 class="text-xl text-slate-600 dark:text-zinc-400 font-medium">What I do</h2>
		</header>
		<div class="grid grid-cols-1 lg:grid-cols-5 grid-rows-2 gap-8 w-full max-w-7xl mx-auto">
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
						'space-y-3 rounded-2xl p-2 relative overflow-hidden first:row-span-3 first:col-span-3 col-span-2 cursor-pointer group'
					]}
				>
					{#if img}
						<div
							class="h-64 overflow-hidden mask-b-from-0 rounded-t-3xl border p-3 border-slate-200 dark:border-zinc-700 -mb-6"
						>
							<div class="rounded-2xl overflow-hidden">
								{@render img()}
							</div>
						</div>
					{/if}
					<div class="group-first:mx-6">
						{#if number != 0}
							<div
								class={[
									'bg-slate-200 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 rounded-full',
									'w-7 h-7 grid place-items-center font-bold font-display z-10'
								]}
							>
								{number}
							</div>
						{/if}
					</div>
					<div class="flex items-start gap-2">
						<h3
							class={[
								'font-display group-first:text-4xl text-3xl w-full group-first:px-6',
								'group-hover:underline decoration-indigo-500 ',
								img && '-mt-2'
							]}
						>
							{name}
							<span
								class="inline-block w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 -ml-1"
							></span>
						</h3>
					</div>
					<p class="group-first:text-xl text-lg group-first:px-6">
						{description}
					</p>
					{#if url}
						<div
							class="text-indigo-600 dark:text-indigo-400 group-hover:underline"
							aria-hidden="true"
						></div>
					{/if}
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
				0,
				'Photon',
				`A fully-featured, well designed, and mature Svelte based web client for the fediverse.`,
				undefined,
				'https://use.phtn.app',
				photonImg
			)}
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
