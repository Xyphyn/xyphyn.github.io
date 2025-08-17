<script lang="ts">
	let { text }: { text: string } = $props()

	let words = $derived(text.split(' '))
</script>

<div class="animate">
	{#each words as word, index}
		<span class="animate-word" style="--index: {index * 50}ms">{`${word} `}</span>
	{/each}
</div>

<style>
	@keyframes fly {
		from {
			transform: translateY(8%);
			opacity: 0;
		}
		to {
			transform: translateY(0%);
			opacity: 1;
		}
	}

	.animate-word {
		opacity: 0;
		animation: fly 0.7s forwards cubic-bezier(0.075, 0.82, 0.165, 1);
		animation-delay: var(--index);
		display: inline-block;
	}
</style>
