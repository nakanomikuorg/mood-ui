<script lang="ts">
	export let radius: string;
	export let smoothing: number = 4;
	export let backgroundColorClass: string | undefined = undefined;
	export let backgroundColor: string | undefined = undefined;

	let polygon: string[] = [];

	function squircle(r: number) {
		return function (theta: number) {
			const x = Math.pow(Math.abs(Math.cos(theta)), 2 / r) * 50 * Math.sign(Math.cos(theta)) + 50;
			const y = Math.pow(Math.abs(Math.sin(theta)), 2 / r) * 50 * Math.sign(Math.sin(theta)) + 50;
			return { x, y };
		};
	}

	function toRadians(deg: number) {
		return (deg * Math.PI) / 180;
	}

	function generatePolygon() {
		const tempPolygon = new Array(91)
			.fill(0)
			.map((_, i) => i)
			.map(toRadians)
			.map(squircle(smoothing))
			.map(({ x, y }) => ({ x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 }))
			.map(({ x, y }) => `${(x - 50) * 2}% ${(y - 50) * 2}%`);

		polygon = [...tempPolygon, '0% 0%'];
	}

	import { onMount } from 'svelte';

	onMount(() => {
		generatePolygon();
	});

	$: s = `--squircle-radius: ${radius};
        --squircle-smoothing: ${smoothing};
        --squircle-polygon: ${'polygon(' + polygon.join(', ') + ')'};`;
	$: style = backgroundColor ? `background-color: ${backgroundColor};` : '';
</script>

<div class="grid absolute top-0 bottom-0 left-0 right-0 -z-10" style={s}>
	<div class="squircle-background grid">
		<div class={`${backgroundColorClass} squircle-segment rotate-180`} {style}></div>
		<div class={backgroundColorClass} {style}></div>
		<div class={`${backgroundColorClass} squircle-segment rotate-[270deg]`} {style}></div>
		<div class={backgroundColorClass} {style}></div>
		<div class={backgroundColorClass} {style}></div>
		<div class={backgroundColorClass} {style}></div>
		<div class={`${backgroundColorClass} squircle-segment rotate-90`} {style}></div>
		<div class={backgroundColorClass} {style}></div>
		<div class={`${backgroundColorClass} squircle-segment`} {style}></div>
	</div>
	<div class="squircle-slot">
		<slot />
	</div>
</div>

<style>
	.squircle-background {
		grid-template: var(--squircle-radius) auto var(--squircle-radius) / var(--squircle-radius) auto var(
				--squircle-radius
			);
	}

	.squircle-segment {
		width: var(--squircle-radius);
		height: var(--squircle-radius);
		clip-path: var(--squircle-polygon);
	}

	.squircle-slot,
	.squircle-background {
		grid-area: 1 / 1 / 1 / 1;
	}
</style>
