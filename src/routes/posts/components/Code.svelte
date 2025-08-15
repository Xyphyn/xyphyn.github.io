<script lang="ts">
	let { children, ...rest } = $props()
</script>

<code {...rest}>{@render children?.()}</code>
