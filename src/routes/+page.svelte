<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte'
	import Section from '$lib/root/Section.svelte'
	import type { Snippet } from 'svelte'
	import { type IconSource } from 'svelte-hero-icons'
</script>

<svelte:head>
	<title>xylight.dev</title>
	<meta name="description" content="Xylight's portfolio" />
</svelte:head>

<div class="z-0 space-y-8 flex flex-col justify-center items-center">
	<header
		class={[
			'border-b border-zinc-200 dark:border-zinc-800 overflow-hidden min-h-56 sm:min-h-96 lg:min-h-[36rem]',
			'py-6 sm:py-16',
			'relative z-0 w-full flex flex-col justify-end'
		]}
	>
		<div class="glow"></div>
		<div class="flex flex-col justify-end h-full space-y-2 text-xl gap-4 max-w-7xl w-full mx-auto">
			<nav class={['flex items-center flex-wrap justify-start px-5 sm:px-16']}>
				{#snippet link(href: string, label: string, index: number = 0)}
					<a
						{href}
						class={[
							'font-display font-medium text-base hover:underline',
							'px-3 lg:px-4 py-2 transition-colors inline-flex flex-row items-center gap-2'
						]}
					>
						{label}
					</a>
				{/snippet}

				{@render link('/', 'Home')}
				{@render link('/#projects', 'Projects')}
				{@render link('/posts', 'Posts')}
			</nav>
			<h1
				class={[
					'tracking-tighter text-6xl sm:text-7xl lg:text-9xl font-display px-5 sm:px-16 w-max flex gap-4 '
				]}
			>
				<span
					class="dark:bg-gradient-to-b dark:text-transparent bg-clip-text dark:from-zinc-50 dark:to-red-200 pb-5 pr-5"
				>
					xylight.dev
				</span>
				<svg
					width="40"
					height="40"
					viewBox="0 0 280 280"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					class="float-right rotate-45 self-center dark:text-red-100"
				>
					<path
						d="M178.73 6.20997C238.87 -19.91 299.91 41.13 273.79 101.27L269.47 111.21C261.5 129.58 261.5 150.42 269.47 168.79L273.79 178.73C299.91 238.87 238.87 299.91 178.73 273.79L168.79 269.47C150.42 261.5 129.58 261.5 111.21 269.47L101.27 273.79C41.128 299.91 -19.9141 238.87 6.20694 178.73L10.526 168.79C18.501 150.42 18.501 129.58 10.526 111.21L6.20694 101.27C-19.9141 41.13 41.128 -19.91 101.27 6.20997L111.21 10.53C129.58 18.5 150.42 18.5 168.79 10.53L178.73 6.20997Z"
						fill="currentColor"
					/>
				</svg>
			</h1>
		</div>
	</header>
	<Section>
		<heading class="space-y-4">
			<h2 id="about" class="font-display text-3xl font-medium tracking-tight">About me</h2>

			{#snippet social(href: string, label: string)}
				<a {href} class="inline text-indigo-600 dark:text-indigo-400 hover:underline decoration-2">
					{label}
				</a>
			{/snippet}

			<div
				class="text-2xl sm:text-2xl text-zinc-500 dark:text-zinc-400 max-w-3xl leading-[1.5] space-y-6 text-left font-medium tracking-tight"
			>
				<p>
					<span class="text-zinc-900 dark:text-zinc-50">
						I am a hobbyist developer and designer.
					</span>
					I try to create applications that are helpful and convenient.
				</p>
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
		<h2 id="projects" class="font-display text-5xl sm:text-6xl tracking-tight">Projects</h2>
		<div class="flex flex-row flex-wrap gap-x-8 gap-y-16 w-full text-left">
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
						'flex flex-col gap-1 border rounded-3xl border-zinc-200 dark:border-zinc-800 p-6 w-full min-w-[12rem]',
						'hover:bg-indigo-500/2 transition-colors group  relative overflow-hidden flex-1 first:flex-2'
					]}
				>
					{#if img}
						<div
							class="h-48 overflow-hidden grid place-items-center rounded-2xl *:scale-150 -m-7 mask-b-from-0%"
						>
							{@render img()}
						</div>
					{/if}
					<div class={['flex items-center gap-2']}>
						<h3 class={['font-display text-2xl font-medium tracking-tight']}>
							{name}
						</h3>
					</div>
					<p class="max-w-md text-zinc-600 dark:text-zinc-400">
						{description}
					</p>
				</svelte:element>
			{/snippet}

			{#snippet photonImg()}
				<div class="contents dark:hidden">
					<enhanced:img
						src="./photon.png?w=640,320"
						sizes="(min-width:1280px) 640px, (min-width:720px) 320px"
						alt="A screenshot of the interface of Photon"
						class="object-cover object-top w-full h-full"
					/>
				</div>
				<div class="hidden dark:contents">
					<enhanced:img
						src="./photon-dark.png?w=640,320"
						sizes="(min-width:1280px) 640px, (min-width:720px) 320px"
						alt="A screenshot of the interface of Photon"
						class="object-cover object-top w-full h-full"
					/>
				</div>
			{/snippet}
			{#snippet placeholder()}
				<div class="scale-200 origin-center h-full overflow-hidden">
					<Placeholder seed="red" />
				</div>
			{/snippet}
			{#snippet placeholder2()}
				<div class="scale-200 origin-center h-full overflow-hidden">
					<Placeholder seed="*(&&*(788" />
				</div>
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
				'Websites like this',
				`Svelte is my typical framework of choice.`,
				undefined,
				'https://github.com/Xyphyn/xyphyn.github.io',
				placeholder
			)}
			{@render project(
				2,
				'More',
				`Other projects of mine are on my GitHub profile.`,
				undefined,
				'https://github.com/Xyphyn',
				placeholder2
			)}
		</div>
	</Section>
</div>

<style>
	@reference '../app.css';

	@keyframes brighten {
		from {
			opacity: 0.5;
		}
		to {
			opacity: 1;
		}
	}

	.glow {
		--max-opacity: 0.7;
		@media (prefers-color-scheme: dark) {
			--max-opacity: 0.4;
		}

		animation: brighten ease-out 1s forwards;

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
			oklch(65.6% 0.141 354.308 / calc(var(--max-opacity) / 2)),
			oklch(67.3% 0.182 276.935 / 0) 70%,
			transparent
		);
		background-position: 50% 0%;
		background-size: 30rem 15rem;
		background-repeat: no-repeat;
		pointer-events: none;

		@variant sm {
			background-size: 50rem 30rem;
		}
		@variant lg {
			background-size: 125rem 48rem;
		}
	}
</style>
