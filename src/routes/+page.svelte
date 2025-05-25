<script lang="ts">
	import ContainerLighting from '$lib/ContainerLighting.svelte'
	import TextAnim from '$lib/TextAnim.svelte'
</script>

<div class="relative z-0">
	<div class="glow-container -z-10 pointer-events-none">
		<div class="glow"></div>
	</div>
	<div class="p-8 xl:p-16 xl:px-32 space-y-8 text-xl max-w-7xl mx-auto">
		<header class="space-y-6">
			<h1 class="font-semibold text-7xl tracking-tighter animate-pop-in">xylight.dev</h1>
			<TextAnim text="Developer and designer, working across Linux and Android ecosystems." />
		</header>
		<div class="space-y-2">
			<div class="text-sm font-medium">What I use</div>
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
	</div>
	<section class="px-8 xl:px-32 space-y-8 max-w-7xl mx-auto" id="projects">
		<h2 class="font-medium text-sm mb-2">What I've made</h2>
		<div class="relative">
			<input type="checkbox" id="toggle-projects" class="hidden peer" />

			<div class="max-h-[32rem] p-px overflow-hidden peer-checked:max-h-full transition-all">
				<div class={['grid xl:grid-cols-2 gap-4 h-full']}>
					<ContainerLighting
						href="https://github.com/Xyphyn/photon"
						size="lg"
						rounding="xl"
						class="w-full space-y-2"
					>
						{#snippet title()}Photon{/snippet}
						<p>
							A beautiful web client for the fediverse written in Svelte designed for optimal UX.
						</p>
						<enhanced:img
							src="./photon-dark.webp"
							alt="A screenshot of the interface of Photon"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
						{#snippet footer()}
							<div>v2.0.0</div>
							<div class="hover:underline">github.com</div>
						{/snippet}
					</ContainerLighting>
					<ContainerLighting
						href="https://github.com/Xyphyn/setsync"
						size="lg"
						rounding="xl"
						class="w-full space-y-2"
					>
						{#snippet title()}Setsync{/snippet}
						<p>A simple timer, logging, and goal-setting web app for your workouts.</p>
						<enhanced:img
							src="./setsync.webp"
							alt="A screenshot of the interface of Setsync"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
						{#snippet footer()}
							<div>v0.1.0</div>
							<div class="hover:underline">github.com</div>
						{/snippet}
					</ContainerLighting>
					<!-- <ContainerLighting size="lg" rounding="xl" class="w-full space-y-2">
						{#snippet title()}Gemni{/snippet}
						<p>I put an obnoxious AI into a Discord account and the results are terrible.</p>
						<enhanced:img
							src="./gemni.webp"
							alt="A screenshot of Gemni's conversations"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
						{#snippet footer()}
							<div class="hover:underline">v0.0.1</div>
						{/snippet}
					</ContainerLighting> -->
					<ContainerLighting
						href="https://github.com/Xyphyn/imagi"
						size="lg"
						rounding="xl"
						class="w-full space-y-2"
					>
						{#snippet title()}Imagi{/snippet}
						<div>
							<span class="text-yellow-100 inline">(Archived)</span>
							<p class="inline">
								A real-time image sharing website made with Svelte and Pocketbase.
							</p>
						</div>
						<enhanced:img
							src="./imagi.webp"
							alt="A screenshot of the interface of Imagi"
							class="block h-auto rounded-2xl border border-zinc-700 aspect-video object-cover object-top"
						/>
						{#snippet footer()}
							<div>v1.0.1</div>
							<div class="hover:underline">github.com</div>
						{/snippet}
					</ContainerLighting>
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
