<script lang="ts">
  import WordFly from '$lib/components/animations/WordFly.svelte'
  import CardChip from '$lib/components/card/CardChip.svelte'
  import Chip from '$lib/components/chip/Chip.svelte'
  import { Icon, ChevronRight, AtSymbol } from 'svelte-hero-icons'
</script>

<div
  class="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-teal-500 via-red-500 to-purple-600"
/>
<header class="p-8 lg:p-16">
  <h1
    class="text-7xl lg:text-8xl flex items-baseline gap-4 tracking-tight
     rounded-full w-max group cursor-pointer"
  >
    <div
      class="rounded-full w-7 h-7 lg:w-10 lg:h-10 bg-current transition-all relative
      before:rounded-full before:transition-opacity
    before:bg-gradient-to-tr before:absolute before:opacity-0
    group-hover:before:opacity-100 from-red-500 to-purple-600 before:-inset-px"
    ></div>
    Xylight
  </h1>
  <div class="flex gap-2 text-2xl max-w-screen-md leading-[1.4] my-5">
    <div>
      <WordFly>Developer and designer experimenting with new things.</WordFly>
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
  class="!max-w-none prose prose-xl prose-neutral dark:prose-invert
   w-full
  p-8 md:p-16 rounded-3xl prose-h1:font-medium prose-h1:mb-0 prose-p:max-w-2xl"
>
  <h1
    class="tracking-tight bg-white dark:bg-zinc-900 rounded-full w-max p-6 py-3"
  >
    <div class="rounded-full w-6 h-6 bg-current inline-block" />
    About
  </h1>
  <p>
    I'm a hobbyist designer and developer from California who is always trying
    something new.
  </p>
  <p>
    In web development, the only framework I consider is Svelte with SvelteKit.
    They make development so much nicer, letting me focus on what I'm actually
    making.
  </p>
</section>
