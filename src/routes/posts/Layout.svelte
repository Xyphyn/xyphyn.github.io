<script lang="ts" module>
	import Placeholder from '$lib/Placeholder.svelte'
	import { ArrowLeft, Home, Icon, type IconSource } from 'svelte-hero-icons'
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
	import { type Snippet } from 'svelte'
	import './highlight.css'

	interface Props {
		title: string
		description: string
		date: string
		link: string
		keywords: string
		children: Snippet
		headings: { depth: number; text: string; id: string }[]
	}

	let { children, date, title, description, keywords, link, headings, ...rest }: Props = $props()
</script>

<svelte:head>
	<meta name="description" content={description} />
	<title>{title}</title>
	<meta name="keywords" content={keywords} />
	<meta name="date" content={new Date().toLocaleDateString()} />
	<meta name="published" content={new Date().toLocaleDateString()} />
	<meta name="og:published" content={new Date().toLocaleDateString()} />
	<meta name="og:title" content={title} />
	<meta name="og:description" content={description} />
	<meta name="theme-color" content="#4f39f6" />
	<meta name="og:author" content="Xylight" />
</svelte:head>

{#snippet links(href: string, label: string, clazz?: string, icon?: IconSource)}
	<a
		{href}
		class={[
			'hover:underline dark:text-indigo-400 text-indigo-600 my-2 flex flex-row items-center gap-1',
			clazz
		]}
	>
		<Icon src={icon} mini size="20" />
		{label}
	</a>
{/snippet}

<div class={['main-grid mx-auto lg:space-x-24']} style="animation-delay: 100ms;">
	<nav class="flex flex-col gap-2 lg:sticky top-12 self-start">
		<h3 class="font-display text-lg">Table of Contents</h3>
		{#each headings as item}
			<a
				class="text-base text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 target-link text-balance active:text-indigo-600"
				href="#{item.id}"
			>
				{item.text}
			</a>
		{/each}
	</nav>
	<div>
		<header class="z-20 space-y-6 mx-auto pb-8 max-w-full w-5xl">
			{#if date}
				<date class="block text-sm md:text-base text-zinc-500 dark:text-zinc-300">
					{new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(new Date(date))}
				</date>
			{/if}
			<ul aria-label="Tags" class="flex flex-row flex-wrap gap-5">
				{#each keywords.split(', ').slice(0, 3) as keyword}
					<li class="font-bold text-sm uppercase text-indigo-400 dark:text-indigo-500">
						{keyword}
					</li>
				{/each}
			</ul>
			<h1 class="font-display text-4xl md:text-5xl">{title}</h1>
			<p class="text-base sm:text-lg md:text-xl max-w-2xl w-full">
				{description}
			</p>
		</header>
		<article class="post">
			{@render children?.()}
		</article>
	</div>
	<aside class="flex flex-col gap-2 lg:sticky top-12 self-start">
		<h3 class="font-display text-lg">Links</h3>
		<a
			class="text-base text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 target-link text-balance active:text-indigo-600"
			href="/"
		>
			Home
		</a>
		<a
			class="text-base text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 hover:dark:text-zinc-100 target-link text-balance active:text-indigo-600"
			href="/posts"
		>
			Posts
		</a>
	</aside>
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
			max-width: 90rem;
			width: 100%;
			display: grid;
			grid-template-columns: 20% 60% 20%;
			grid-template-areas: 'toc article other';
		}
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
				font-size: 2rem;
				@media screen and (min-width: 768px) {
					font-size: 2.25rem;
				}
			}
			h3 {
				font-size: 1.75rem;
				@media screen and (min-width: 768px) {
					font-size: 2rem;
				}
			}

			p {
				font-size: 1.125rem;
				color: var(--color-zinc-700);
				@media (prefers-color-scheme: dark) {
					color: var(--color-zinc-300);
				}
			}

			a {
				color: var(--color-indigo-600);
				@media (prefers-color-scheme: dark) {
					color: var(--color-indigo-400);
				}
				&:hover {
					text-decoration: underline;
				}
			}

			:not(pre) code {
				background-color: var(--color-zinc-100);
				padding: 0.1rem 0.25rem;
				font-size: var(--text-base);
				border-radius: var(--radius-sm);
				@media (prefers-color-scheme: dark) {
					background-color: var(--color-zinc-800);
				}
			}

			blockquote {
				border-left: 0.25rem solid var(--color-zinc-200);
				padding-left: 2rem;
				font-style: italic;
				@media (prefers-color-scheme: dark) {
					border-left: 0.25rem solid var(--color-zinc-700);
				}
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
				content: '•';
				font-size: var(--text-lg);
				color: var(--color-zinc-400);
				@media (prefers-color-scheme: dark) {
					color: var(--color-zinc-600);
				}
			}

			div {
				margin-top: 3rem;
				margin-bottom: 3rem;
			}

			pre {
				background-color: var(--color-zinc-100);
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

			hr {
				width: 20rem;
				border-color: var(--color-zinc-300);
				@media (prefers-color-scheme: dark) {
					border-color: var(--color-zinc-700);
				}
			}
		}
	}
</style>
