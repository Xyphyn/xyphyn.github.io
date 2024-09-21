<script>
  import { cn } from '$lib/utils'
</script>

<div
  class={cn(
    'px-4 py-1.5 rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700',
    'flex gap-1 items-center font-medium'
  )}
>
  <slot />
</div>
