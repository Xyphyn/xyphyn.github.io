<script>
  import { page } from '$app/stores'
  import { fly } from 'svelte/transition'
  import '../app.css'
  import { expoOut } from 'svelte/easing'

  export let data
</script>

<div class="dark relative">
  {#key data.pathname}
    <main
      in:fly|global={{ y: 12, duration: 300, delay: 400, easing: expoOut }}
      out:fly|global={{ y: 12, duration: 300, easing: expoOut }}
      class="max-w-screen-lg mx-auto"
    >
      <slot></slot>
    </main>
  {/key}
</div>
