<script>
  import { cn } from '$lib/utils'
</script>

<article
  class={cn(
    'rounded-full flex items-center p-2 pr-8 gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800',
    $$props.class ?? ''
  )}
>
  <div
    class="w-12 h-12 flex-shrink-0 bg-zinc-50 dark:bg-zinc-900 rounded-full border border-zinc-100 dark:border-zinc-700
  grid place-items-center"
  >
    <slot name="avatar" />
  </div>
  <div class="flex flex-col">
    <h3 class="text-lg font-semibold">
      <slot name="title" />
    </h3>
    <div class="text-base">
      <slot name="body" />
    </div>
  </div>
</article>
