<script lang="ts">
	import Placeholder from '$lib/Placeholder.svelte'
	import Section from '$lib/root/Section.svelte'
	import type { Snippet } from 'svelte'
	import { ArrowRight, Icon, type IconSource } from 'svelte-hero-icons'
</script>

<svelte:head>
	<title>xylight.dev</title>
	<meta name="description" content="Xylight's portfolio" />
</svelte:head>

<div class="z-0 space-y-8 flex flex-col justify-center items-center">
	<div class="w-full p-4 sm:p-12 md:p-20 xl:p-24">
		<div
			class={[
				'rounded-3xl border border-zinc-200 dark:border-zinc-700 relative -z-10',
				'bg-white dark:bg-zinc-900 overflow-hidden min-h-48 sm:min-h-96 lg:min-h-[36rem] grid place-items-center'
			]}
		>
			<div class="glow"></div>
		</div>
		<header
			class="p-6 sm:px-16 space-y-8 text-xl w-full text-left justify-start -mt-28 sm:-mt-40 lg:-mt-56"
		>
			<h1
				class={[
					'font-medium tracking-tighter text-6xl sm:text-7xl lg:text-9xl lg:mb-24 font-display'
				]}
			>
				xylight.dev
			</h1>
		</header>
	</div>
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
		<h2
			id="projects"
			class="font-display text-5xl sm:text-6xl lg:text-7xl tracking-tight lg:mt-12 lg:mb-24"
		>
			My projects
		</h2>
		<div class="flex flex-row flex-wrap gap-8 w-full text-left">
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
					class={['flex flex-col gap-2 group w-96 first:flex-2']}
				>
					{#if img}
						<div
							class="h-64 rounded-2xl overflow-hidden border border-slate-200 dark:border-zinc-800 mb-3"
						>
							{@render img()}
						</div>
					{/if}
					<div class={[img && 'flex-1']}></div>
					<div class={['flex items-center gap-2 px-6']}>
						<h3
							class={[
								'font-display text-3xl w-full tracking-tight font-bold group-hover:underline'
							]}
						>
							{name}
						</h3>

						<div class="group-hover:rotate-90 transition-transform duration-500 ease-out">
							<Icon src={ArrowRight} size="24" mini />
						</div>
					</div>
					<p class="text-base text-zinc-700 dark:text-zinc-300 px-6">
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
				`I develop sites in SvelteKit and often TailwindCSS.`,
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
				placeholder
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
		background-position: 50% 0%;
		background-size: 125rem 48rem;
		background-repeat: no-repeat;
	}
</style>
