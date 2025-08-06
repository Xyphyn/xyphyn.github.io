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

<div class="relative z-0 space-y-8 flex flex-col justify-center items-center">
	<div class="glow-container -z-10 pointer-events-none">
		<div class="glow"></div>
	</div>
	<div class="p-8 pb-0 xl:px-32 space-y-8 text-xl max-w-7xl mx-auto text-center">
		<header class="space-y-6">
			<h1
				class="font-medium tracking-tight text-6xl sm:text-7xl xl:text-8xl animate-pop-in flex font-display
				leading-[1.3] w-max mx-auto"
			>
				xylight
				<span class="text-indigo-400">.dev</span>
			</h1>
			<TextAnim text="Developer and designer." />
		</header>
	</div>
	<!-- <hr class="border-zinc-800" /> -->
	<!-- <section class="px-8 xl:px-32 space-y-8 max-w-7xl mx-auto mt-8" id="projects">
		<header class="w-full text-center space-y-2">
			<div class="flex flex-row items-center justify-center space-x-2">
				<svg width="4rem" height="4rem" viewBox="15 15 70 70" xmlns="http://www.w3.org/2000/svg">
					<defs>
						<linearGradient id="gradStroke" x1="0%" y1="0%" x2="0%" y2="100%">
							<stop offset="0%" stop-color="oklch(0.7 0.1776 289.59)" />
							<stop offset="100%" stop-color="oklch(0.7 0.2837 324.53)" />
						</linearGradient>
						<linearGradient id="gradFill" x1="0%" y1="0%" x2="100%" y2="110%">
							<stop offset="0%" stop-color="var(--color-zinc-50)" />
							<stop offset="100%" stop-color="var(--color-zinc-50)" />
						</linearGradient>
					</defs>
					<path
						fill="url(#gradFill)"
						stroke-width="1.5"
						d="M45 20.8868C48.094 19.1004 51.906 19.1004 55 20.8868L72.7128 31.1132C75.8068 32.8996 77.7128 36.2008 77.7128 39.7735V60.2265C77.7128 63.7992 75.8068 67.1004 72.7128 68.8867L55 79.1133C51.906 80.8996 48.094 80.8996 45 79.1133L27.2872 68.8867C24.1932 67.1004 22.2872 63.7992 22.2872 60.2265V39.7735C22.2872 36.2008 24.1932 32.8996 27.2872 31.1132L45 20.8868Z"
					/>
				</svg>
				<h1
					class="h-10 font-inter font-semibold text-5xl bg-gradient-to-br from-indigo-400 to-pink-400 text-transparent bg-clip-text"
				>
					Photon
				</h1>
			</div>
			<p class="text-lg">Making the fediverse more accessible.</p>
		</header>
	</section> -->
</div>

<style>
	.glow-container {
		position: absolute;
		width: 100%;
		height: 48rem;
		max-width: 100%;
		z-index: -1;
		top: -50%;
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
