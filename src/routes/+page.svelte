<script lang="ts">
	import Section from '$lib/root/Section.svelte'
	import TextAnim from '$lib/TextAnim.svelte'
	import type { Snippet } from 'svelte'
	import {
		ArrowRight,
		ArrowTopRightOnSquare,
		CodeBracket,
		Hashtag,
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
	<div class="absolute top-0 w-full -z-10 glow" role="presentation"></div>
	<section
		class="p-8 pb-0 xl:px-32 py-16 xl:py-16 space-y-8 text-xl w-full text-left justify-start"
	>
		<header class="space-y-6 max-w-xl">
			{#snippet link(href: string, label: string, index: number = 0)}
				<a
					{href}
					class={[
						'font-display font-bold text-zinc-500 dark:text-zinc-400',
						'hover:bg-zinc-900 hover:dark:bg-zinc-50 hover:text-zinc-50 hover:dark:text-zinc-900',
						'px-3 lg:px-4 py-3 transition-colors inline-flex flex-row items-center gap-2'
					]}
				>
					{label}
					<Icon src={href.startsWith('#') ? Hashtag : ArrowRight} size="20" mini />
				</a>
			{/snippet}

			<nav class="-mx-4 sm:mx-0 flex items-center flex-wrap justify-center sm:justify-start">
				{@render link('#projects', 'Projects')}
				{@render link('/posts', 'Posts')}
			</nav>
			<h1
				class={[
					'font-medium tracking-tighter text-6xl sm:text-7xl lg:text-9xl lg:mb-24 lg:mt-12 font-display px-4'
				]}
			>
				xylight.dev
			</h1>
		</header>
	</section>
	<Section>
		<heading class="space-y-4">
			<h2 id="about" class="font-display text-2xl">About me</h2>

			{#snippet social(href: string, label: string)}
				<a {href} class="inline text-indigo-600 dark:text-indigo-400 hover:underline decoration-2">
					{label}
				</a>
			{/snippet}

			<div
				class="text-2xl sm:text-2xl lg:text-3xl text-zinc-500 dark:text-zinc-400 max-w-3xl leading-[1.5] space-y-6 text-left"
			>
				<p>
					<span class="text-zinc-900 dark:text-zinc-50">I am a developer and designer.</span>
					I create applications to be helpful and convenient. I explore computing systems in the desktop
					and server.
				</p>
				<p>I write posts about my experiences regarding these topics.</p>
				<p>
					My socials are at {@render social(
						'https://matrix.to/#/@xylight:chat.phtn.app',
						'Matrix'
					)}, {@render social('https://github.com/Xyphyn', 'GitHub')},
					{@render social('https://lemdro.id/u/Xylight', 'Lemmy')}, and {@render social(
						'https://mas.to/@Xylight',
						'Mastodon'
					)}.
				</p>
			</div>
		</heading>
	</Section>
	<Section>
		<h2
			id="projects"
			class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight lg:mt-12 lg:mb-24"
		>
			My projects
		</h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl mx-auto text-left">
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
				'Websites like this',
				`I develop sites in SvelteKit and often TailwindCSS.`,
				undefined,
				'https://github.com/Xyphyn/xyphyn.github.io'
			)}
			{@render project(
				2,
				'More',
				`Other projects of mine are on my GitHub profile.`,
				undefined,
				'https://github.com/Xyphyn'
			)}
		</div>
	</Section>
</div>

<style>
	.glow {
		--max-opacity: 0.4;
		@media (prefers-color-scheme: dark) {
			--max-opacity: 0.2;
		}

		position: absolute;
		width: 100%;
		top: 0;
		height: 48rem;
		max-width: 100%;
		z-index: -1;
		overflow: hidden;
		background: radial-gradient(
			ellipse at top center in oklch,
			oklch(75% 0.083 55.934 / var(--max-opacity)),
			oklch(65.6% 0.141 354.308 / 0.2),
			oklch(67.3% 0.182 276.935 / 0) 70%,
			transparent
		);
		background-position: 50% -40%;
		background-size: 125rem 32rem;
		background-repeat: no-repeat;
	}
</style>
