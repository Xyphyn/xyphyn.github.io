<script lang="ts" module>
	import Placeholder from '$lib/Placeholder.svelte'
	import { ArrowLeft, Icon } from 'svelte-hero-icons'
	import {
		H1 as h1,
		H2 as h2,
		H3 as h3,
		Paragraph as p,
		Code as code,
		Img as img,
		Pre as pre
	} from './components/index'

	export { h1, h2, h3, p, code }
</script>

<script lang="ts">
	import type { Snippet } from 'svelte'
	import './highlight.css'
	import { Toc } from '@svelte-put/toc'

	const toc = new Toc({})

	interface Props {
		title: string
		description: string
		date: string
		link: string
		keywords: string
		children: Snippet
	}

	let { children, date, title, description, keywords, link, ...rest }: Props = $props()
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="keywords" content={keywords} />
	<meta name="description" content={description} />
	<meta name="date" content={new Date().toLocaleDateString()} />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
</svelte:head>

<div class="relative z-0 -mt-20">
	<header
		class="z-20 px-4 sm:px-8 md:px-16 space-y-6 pt-40 w-4xl mx-auto pb-8 max-w-full animate-pop-in"
	>
		<a
			href="/posts"
			class="hover:underline dark:text-indigo-400 text-indigo-600 my-2 px-6 flex flex-row items-center gap-1"
		>
			<Icon src={ArrowLeft} micro size="16" />
			Back
		</a>
		{#if date}
			<div class="text-sm md:text-base text-slate-500 dark:text-zinc-300 px-6">
				{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(date))}
			</div>
		{/if}
		<div
			class="w-full h-full rounded-2xl overflow-hidden grid place-items-center border border-slate-200 dark:border-zinc-800"
		>
			<Placeholder seed={title} />
		</div>
		<h1 class="font-display text-4xl md:text-5xl px-6">{title}</h1>
		<p class="text-base md:text-lg px-6">
			{description}
		</p>
	</header>
	<div
		class={['animate-pop-in main-grid mx-auto lg:space-x-8']}
		style="animation-delay: 100ms; opacity: 0;"
	>
		<!-- <nav class="flex flex-col gap-2 lg:sticky top-12 self-start">
			{#each toc.items.values() as item}
				<a
					class="text-lg font-display text-slate-500 dark:text-zinc-400 focus:text-indigo-500"
					href="#{item.id}"
				>
					{item.text}
				</a>
			{/each}
		</nav> -->
		<article use:toc.actions.root class="post">
			{@render children?.()}
		</article>
		<!-- <aside>aaaaaaaaaa</aside> -->
	</div>
</div>

<style>
	.main-grid {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
	@media screen and (min-width: 1024px) {
		.main-grid {
			max-width: 80rem;
			width: 100%;
			display: grid;
			grid-template-columns: 20% 60% 20%;
			grid-template-areas: 'toc article other';
		}
	}

	.main-grid > aside:first-child {
		grid-area: toc;
	}
	.main-grid > article {
		grid-area: article;
	}
	.main-grid > aside:last-child {
		grid-area: other;
	}

	article.post {
		:global {
			& > * {
				margin-top: 1.3333rem;
				margin-bottom: 1.3333rem;
				max-width: 65ch;
				line-height: 1.8;
			}

			h1,
			h2,
			h3 {
				font-family: var(--font-display);
				font-weight: var(--font-weight-bold);
				margin-top: 3rem;
			}

			h1 {
				font-size: var(--text-4xl);
				@media screen and (min-width: 768px) {
					font-size: var(--text-5xl);
				}
			}
			h2 {
				font-size: 1.75rem;
				@media screen and (min-width: 768px) {
					font-size: 2rem;
				}
			}
			h3 {
				font-size: var(--text-2xl);
			}

			p {
				font-size: 1.125rem;
				color: var(--color-slate-700);
				@media (prefers-color-scheme: dark) {
					color: var(--color-zinc-300);
				}
			}

			a {
				color: var(--color-indigo-500);
				&:hover {
					text-decoration: underline;
				}
			}

			:not(pre) code {
				background-color: var(--color-slate-100);
				padding: 0.1rem 0.25rem;
				font-size: var(--text-base);
				border-radius: var(--radius-sm);
			}

			blockquote {
				border-left: 0.25rem solid var(--color-slate-200);
				padding-left: 2rem;
				font-style: italic;
			}

			ul,
			ol {
				padding-left: 3rem;
			}

			ul > li,
			ol > li {
				padding-left: 1rem;
				margin-top: 1rem;
				margin-bottom: 1rem;
				font-size: var(--text-lg);
			}

			ol {
				list-style-type: decimal;
			}

			ul {
				list-style: circle;
			}

			li::marker {
				font-size: var(--text-lg);
				color: var(--color-slate-400);
				@media (prefers-color-scheme: dark) {
					color: var(--color-zinc-600);
				}
			}

			div {
				margin-top: 3rem;
				margin-bottom: 3rem;
			}

			pre {
				background-color: var(--color-slate-100);
				@media (prefers-color-scheme: dark) {
					background-color: var(--color-zinc-800);
				}
				width: 100%;
				display: block;
				white-space: pre-wrap;
				word-break: normal;
				overflow-wrap: break-word;
				overflow-x: auto;
				padding: 1rem;
				max-width: 100%;
				border-radius: var(--radius-xl);
				font-size: var(--text-sm);
			}
		}
	}
</style>
