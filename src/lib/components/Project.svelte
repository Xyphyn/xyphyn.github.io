<script lang="ts">
  export let img: string | undefined = ''
</script>

<div class="rounded-3xl p-1 border border-zinc-100 dark:border-zinc-800">
  <div class="rounded-2xl {$$props.mainClass} p-8 flex flex-col gap-2">
    <h3 class="font-medium text-3xl"><slot name="title" /></h3>
    <div class="text-xl">
      <slot name="body" />
    </div>
    <div class="rounded-xl w-max max-w-full mx-auto mt-4 -mb-8">
      <img src={img} alt="" class="rounded-t-2xl max-h-96 mx-auto" />
    </div>
    <slot />
  </div>
</div>
