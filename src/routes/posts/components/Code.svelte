<script lang="ts">
	let { children, ...rest } = $props()
</script>

<code {...rest}>aa {@render children?.()}</code>
