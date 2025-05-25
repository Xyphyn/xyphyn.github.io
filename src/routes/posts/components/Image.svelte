<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements'

	interface Props extends HTMLImgAttributes {
		src: string
	}

	let { src, ...rest }: Props = $props()
</script>

<img {src} {...rest} class="rounded-xl inline-block" />
