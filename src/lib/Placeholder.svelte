<script lang="ts">
	interface Props {
		seed: string
	}
	let { seed }: Props = $props()

	function randomoklch(seed: string, count: number) {
		function hashString(str: string) {
			let hash = 0
			for (let i = 0; i < str.length; i++) {
				const char = str.charCodeAt(i)
				hash = (hash << 5) - hash + char
				hash = hash & hash
			}
			return Math.abs(hash)
		}

		function seededRandom(seed: string) {
			return ((hashString(seed) * 1664525 + 1013904223) % Math.pow(2, 32)) / Math.pow(2, 32)
		}

		const random = (seed: string, i: number) => seededRandom(i + seed)
		const colors = []

		for (let i = 0; i < count; i++) {
			const lightness = 0.3 + random(seed, i) * 0.6
			const chroma = 0.05 + random(seed, i) * 0.2

			const hue = 90 * (random(seed, i) * 100)

			const oklchColor = `oklch(${lightness.toFixed(3)} ${chroma.toFixed(3)} ${hue.toFixed(1)})`
			colors.push({ str: oklchColor, pos: random(seed, i) * 1000 })
		}

		return colors
	}

	let colors = $derived(randomoklch(seed, 12))
</script>

<svg width="120%" height="120%" viewBox="0 -100 1171 241" fill="none">
	<defs>
		<filter id="noiseFilter" x="0%" y="0%" width="100%" height="100%">
			<feTurbulence baseFrequency="0.9" numOctaves="3" seed="5" stitchTiles="stitch" />
		</filter>

		<filter id="mainBlur" x="-20%" y="-50%" width="140%" height="200%">
			<feGaussianBlur stdDeviation="45" result="blur" />
			<feBlend mode="normal" in="blur" in2="BackgroundImageFix" />
		</filter>

		<radialGradient id="grad1" cx="50%" cy="30%" r="60%">
			<stop offset="0%" stop-color={colors[0].str} />
			<stop offset="40%" stop-color={colors[1].str} />
			<stop offset="100%" stop-color={colors[2].str} />
		</radialGradient>

		<radialGradient id="grad2" cx="30%" cy="70%" r="70%">
			<stop offset="0%" stop-color={colors[3].str} />
			<stop offset="30%" stop-color={colors[4].str} />
			<stop offset="100%" stop-color={colors[5].str} />
		</radialGradient>

		<linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
			<stop offset="0%" stop-color={colors[6].str} />
			<stop offset="50%" stop-color={colors[7].str} />
			<stop offset="100%" stop-color={colors[8].str} />
		</linearGradient>
	</defs>

	<g filter="url(#mainBlur)">
		<ellipse cx={colors[5].pos} cy="-30" rx="300" ry="120" fill="url(#grad1)" opacity="0.8" />
		<circle cx={colors[6].pos} cy="-20" r="180" fill="url(#grad2)" opacity="0.7" />
		<ellipse cx={colors[7].pos} cy="10" rx="250" ry="100" fill="url(#grad3)" opacity="0.6" />
		<circle cx={colors[8].pos} cy="30" r="120" fill={colors[9].str} opacity="0.5" />
		<ellipse cx={colors[9].pos} cy="20" rx="150" ry="80" fill={colors[10].str} opacity="0.4" />
	</g>
	<rect width="100%" height="100%" fill="white" opacity="0.03" filter="url(#noiseFilter)" />
</svg>
