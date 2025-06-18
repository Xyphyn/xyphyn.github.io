<script lang="ts">
	import ContainerLighting from '$lib/ContainerLighting.svelte'
	import TextAnim from '$lib/TextAnim.svelte'
	import type { Snippet } from 'svelte'
	import { AtSymbol, CodeBracket, Icon, Wrench } from 'svelte-hero-icons'
	import Lemmy from './lemmy.svg'
	import GitHub from './github.svg'
	import Matrix from './matrix.svg'
	import Mastodon from './mastodon.svg'
</script>

<div class="relative z-0 space-y-8">
	<div class="glow-container -z-10 pointer-events-none">
		<div class="glow"></div>
	</div>
	<div class="p-8 pb-0 xl:px-32 space-y-8 text-xl max-w-7xl mx-auto">
		<header class="space-y-6">
			<h1
				class="font-medium tracking-tight text-7xl animate-pop-in flex font-display
				leading-[1.3]"
			>
				xylight
				<span class="text-indigo-400">.dev</span>
			</h1>
			<TextAnim text="Developer and designer, working across Linux and Android ecosystems." />
		</header>
	</div>
	<section class="px-8 xl:px-32 space-y-8 max-w-7xl mx-auto" id="socials">
		<h2 class="font-bold text-sm mb-2 font-display text-pink-400 w-max">
			<Icon src={AtSymbol} micro size="14" class="inline -translate-y-0.5 text-pink-400" />
			Where I am
		</h2>

		<div class="flex flex-row gap-2 flex-wrap font-medium text-sm">
			<ContainerLighting size="none">
				<a
					aria-label="GitHub"
					class="rounded-full w-8 h-8 p-1 bg-gradient-to-br from-gray-800 to-gray-900"
					href="https://github.com/xyphyn"
				>
					<img src={GitHub} alt="GitHub logo" class="w-full h-full" />
				</a>
			</ContainerLighting>
			<ContainerLighting size="none">
				<a
					aria-label="GitHub"
					class="rounded-full w-8 h-8 p-1 bg-gradient-to-br from-zinc-800 to-zinc-900 grid place-items-center"
					href="https://lemdro.id/u/Xylight"
				>
					<img src={Lemmy} alt="Lemmy logo" class="w-full h-full" />
				</a>
			</ContainerLighting>
			<ContainerLighting size="none">
				<a
					aria-label="Lemmy"
					class="rounded-full w-8 h-8 p-2 bg-gradient-to-br from-zinc-800 to-zinc-900 grid place-items-center"
					href="https://matrix.to/#/@xylightsucks:matrix.org"
				>
					<img src={Matrix} alt="Matrix logo" class="w-full h-full" />
				</a>
			</ContainerLighting>
			<ContainerLighting size="none">
				<a
					aria-label="Mastodon"
					class="rounded-full w-8 h-8 p-2 bg-gradient-to-br from-violet-500 to-indigo-600 grid place-items-center"
					href="https://mas.to/@xylight"
				>
					<img src={Mastodon} alt="Mastodon logo" class="w-full h-full" />
				</a>
			</ContainerLighting>
		</div>
	</section>
	<section class="px-8 xl:px-32 space-y-8 max-w-7xl mx-auto" id="tech">
		<div class="space-y-2">
			<div class="text-sm font-bold font-display bg-gradient-to-r text-violet-400 w-max">
				<Icon src={Wrench} micro size="14" class="inline -translate-y-0.5 text-violet-400" />
				What I use
			</div>
			<div class="flex flex-row gap-2 flex-wrap text-sm font-medium">
				<ContainerLighting rounding="full" size="xs">
					<span>TypeScript</span>
				</ContainerLighting>
				<ContainerLighting rounding="full" size="xs">
					<span>Svelte</span>
				</ContainerLighting>
				<ContainerLighting rounding="full" size="xs">
					<span>Kotlin</span>
				</ContainerLighting>
				<ContainerLighting rounding="full" size="xs">
					<span>Linux</span>
				</ContainerLighting>
				<ContainerLighting rounding="full" size="xs">
					<span>Android</span>
				</ContainerLighting>
			</div>
		</div>
	</section>
	<section class="px-8 xl:px-32 space-y-8 max-w-7xl mx-auto mt-8" id="projects">
		<h2 class="font-bold text-sm mb-2 font-display bg-gradient-to-r text-purple-400">
			<Icon src={CodeBracket} micro size="14" class="inline -translate-y-0.5 text-purple-400" />
			What I've made
		</h2>
		<div class="relative overflow-hidden">
			<input type="checkbox" id="toggle-projects" class="hidden peer" />

			{#snippet project(
				titleCont: string,
				body: string,
				href: string,
				version: string,
				domain: string,
				img: Snippet
			)}
				<ContainerLighting {href} size="lg" rounding="xl" class="w-full space-y-2">
					{#snippet title()}{titleCont}{/snippet}
					<p>{body}</p>
					{@render img()}
					{#snippet footer()}
						<div>{version}</div>
						<div class="hover:underline">{domain}</div>
					{/snippet}
				</ContainerLighting>
			{/snippet}

			<div class="max-h-[32rem] p-px overflow-hidden peer-checked:max-h-full transition-all">
				<div class={['grid xl:grid-cols-2 gap-4 h-full']}>
					{#snippet photonImg()}
						<enhanced:img
							src="./photon-dark.webp?w=1280;640;400"
							alt="A screenshot of the interface of Photon"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
					{/snippet}
					{@render project(
						'Photon',
						'A beautiful web client for the fediverse written in Svelte designed for optimal UX.',
						'https://github.com/Xyphyn/photon',
						'v2.0.0',
						'github.com',
						photonImg
					)}

					{#snippet setsyncImg()}
						<enhanced:img
							src="./setsync.webp?w=1280;640;400"
							alt="A screenshot of the interface of Setsync"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
					{/snippet}
					{@render project(
						'Setsync',
						'A simple timer, logging, and goal-setting web app for your workouts.',
						'https://github.com/Xyphyn/setsync',
						'v0.1.0',
						'github.com',
						setsyncImg
					)}
					{#snippet imagiImg()}
						<enhanced:img
							src="./imagi.webp?w=1280;640;400"
							alt="A screenshot of the interface of Imagi"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
					{/snippet}
					{@render project(
						'Imagi',
						'(Archived) A real-time image sharing website made with Svelte and Pocketbase.',
						'https://github.com/Xyphyn/imagi',
						'v1.0.1',
						'github.com',
						imagiImg
					)}
				</div>
			</div>

			<div
				class="bg-gradient-to-b from-zinc-900/0 via-zinc-900 to-zinc-900 h-32
				absolute bottom-0 w-full flex items-center justify-center peer-checked:hidden"
			>
				<label for="toggle-projects">
					<ContainerLighting
						size="sm"
						rounding="full"
						class="h-max font-medium text-sm hover:bg-zinc-700 duration-150"
					>
						View more
					</ContainerLighting>
				</label>
			</div>
		</div>
	</section>
</div>

<style>
	.glow-container {
		position: absolute;
		width: 100%;
		height: 48rem;
		max-width: 100%;
		z-index: -1;
		top: -10%;
		overflow: hidden;
	}

	.glow {
		position: absolute;
		width: 150%;
		height: 150%;
		top: -25%;
		left: -25%;
		overflow: hidden;
	}

	.glow::before {
		content: '';
		width: 150%;
		height: 100%;
		position: absolute;
		background: radial-gradient(
			ellipse 70% 70% at 25% 25%,
			rgba(255, 255, 255, 0.1) 0%,
			rgba(255, 255, 255, 0.07) 25%,
			rgba(255, 255, 255, 0.02) 50%,
			rgba(255, 255, 255, 0) 75%,
			transparent 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-position: -50% -50%;
	}
</style>
