<script>
  import { page } from '$app/stores'
  import { fly } from 'svelte/transition'
  import '../app.css'
  import { expoOut } from 'svelte/easing'

  export let data
</script>

<div
  class="fixed top-0 left-0 w-full h-px bg-gradient-to-r from-teal-500 to-blue-500"
/>
<div class="dark relative">
  {#key data.pathname}
    <main
      in:fly|global={{ y: 12, duration: 300, delay: 400, easing: expoOut }}
      out:fly|global={{ y: 12, duration: 300, easing: expoOut }}
      class=""
    >
      <slot></slot>
    </main>
  {/key}
</div>
