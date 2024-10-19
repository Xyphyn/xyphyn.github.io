<script lang="ts">
  import WordFly from '$lib/components/animations/WordFly.svelte'
  import Logo from '$lib/components/Logo.svelte'
  import Project from '$lib/components/Project.svelte'
  import { ArrowDown, Icon } from 'svelte-hero-icons'

  export let data

  let styles = [
    '',
    'font-thin',
    'font-bold',
    'italic-transform',
    'tracking-widest',
    'tracking-tighter',
    'bg-black dark:bg-white text-white dark:text-black rounded-full px-5',
  ]
  let styleIndex = 0
  $: style = styles[styleIndex]
  setInterval(() => {
    if (styleIndex + 1 == styles.length) {
      styleIndex = 0
    } else {
      styleIndex += 1
    }
  }, 2000)
</script>

<header class="p-8 lg:p-16 relative z-0 blur-fade">
  <div class="-z-10 inset-0 bg-stylized absolute"></div>
  <h1
    class="text-7xl lg:text-8xl flex items-baseline gap-4 tracking-tight
     rounded-full w-max group cursor-pointer"
  >
    <div class="">
      <Logo width={64} height={64} />
    </div>
    <span class=" transition-all duration-1000 {style}">Xylight</span>
  </h1>
  <div class="flex gap-2 text-2xl max-w-screen-md leading-[1.4] my-5">
    <div>
      <WordFly delay={200} delayBetweenWords={50}>
        {'Developer and designer, turning complex problems into intuitive user experiences.'}
      </WordFly>
    </div>
  </div>
  <div class="flex items-center gap-2 text-lg">
    <a
      href="https://github.com/Xyphyn"
      class="hover:bg-zinc-100 hover:dark:bg-zinc-800 bg-white dark:bg-zinc-900 rounded-full px-4 py-1 transition-colors"
    >
      GitHub
    </a>
    <a
      href="https://lemdro.id/u/Xylight"
      class="hover:bg-zinc-100 hover:dark:bg-zinc-800 bg-white dark:bg-zinc-900 rounded-full px-4 py-1 transition-colors"
    >
      Lemmy
    </a>
    <a
      href="mailto:xylight@xylight.dev"
      class="hover:bg-zinc-100 hover:dark:bg-zinc-800 bg-white dark:bg-zinc-900 rounded-full px-4 py-1 transition-colors"
    >
      Email
    </a>
  </div>
</header>

<section
  style="--anim-delay: 300ms;"
  class="px-8 md:px-16 blur-fade bg-slate-50 dark:bg-black prose prose-zinc dark:prose-invert prose-lg
  prose-h1:font-medium py-8 !max-w-none"
>
  <header class="*:my-0">
    <h1 class="font-medium text-xl mb-4">
      Photon

      <div class="rounded-full w-4 h-4 bg-current inline-block self-center" />
    </h1>
    <p>Making the fediverse an accessible and engaging place.</p>
    <div class="flex gap-8">
      <a href="https://phtn.app">Try it</a>

      <a href="https://github.com/xyphyn/photon">GitHub</a>
    </div>
  </header>
  <div class=" relative rounded-xl max-w-2xl w-full mx-auto">
    <div
      class="bg-gradient-to-br from-white/50 via-white/0 rounded-xl to-white/50 -inset-px absolute -z-10"
    />
    <img
      src="/img/projects/photon-dark.webp"
      class="w-full object-cover object-top rounded-xl"
      alt="A screenshot of the Photon Lemmy client"
    />
  </div>
</section>

<svg
  class="hidden"
  id="mask-noise"
  viewBox="0 0 200 200"
  xmlns="http://www.w3.org/2000/svg"
>
  <filter id="noiseFilter">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.65"
      numOctaves="3"
      stitchTiles="stitch"
    />
  </filter>

  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
</svg>

<style>
  .bg-stylized {
    background: linear-gradient(
      140deg,
      rgba(42, 255, 149, 0.2),
      rgba(42, 52, 184, 0.2),
      rgba(0 0 0 / 0)
    );
    mask-image: linear-gradient(to bottom, rgba(0 0 0 / 1), rgba(0 0 0 / 0));
  }

  @keyframes blurFade {
    from {
      filter: blur(16px);
      opacity: 0;
    }
    to {
      filter: blur(0px);
      opacity: 1;
    }
  }

  @keyframes popIn {
    from {
      transform: translateY(36px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .pop-in {
    animation: popIn 1.8s forwards cubic-bezier(0.075, 0.82, 0.165, 1)
      var(--anim-delay);
    opacity: 0;
  }

  .blur-fade {
    animation: blurFade 1.8s forwards;
  }

  :global(.italic-transform) {
    transform: skewX(-20deg);
  }
</style>
