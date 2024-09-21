<script lang="ts">
  import { browser } from '$app/environment'
  import { fade } from 'svelte/transition'

  export let delayBetweenWords = 50
  let slotContent: HTMLDivElement

  $: words = (slotContent?.innerText || '').split(' ')
</script>

{#if browser}
  <div bind:this={slotContent} style="display:none">
    <!-- Slot content will be bound to this hidden div for processing -->
    <slot></slot>
  </div>
{:else}
  <slot />
{/if}

<div class="fade-in">
  {#each words as word, index}
    <span
      style="margin-right: .3rem"
      transition:fade={{ delay: index * delayBetweenWords }}
    >
      {word}
    </span>
  {/each}
  {#if words.length > 1}
    <div
      class="rounded-full w-4 h-4 bg-current inline-block self-center"
      transition:fade={{ delay: words.length * delayBetweenWords }}
    />
  {/if}
</div>

<style>
  .fade-in {
    display: flex;
    flex-wrap: wrap;
  }
</style>
