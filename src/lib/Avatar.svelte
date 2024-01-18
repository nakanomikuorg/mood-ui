<script lang="ts">
	/**
	 * 头像的类型
	 */
	export let types: 'img' | 'icon' | 'text';
	/**
	 * 头像的大小
	 */
	// export let size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';
	/**
	 * 头像的图片地址
	 */
	export let src: string = '';
	/**
	 * 头像的 alt
	 */
	export let alt: string = '';
	/**
	 * 头像的文本
	 */
	export let label: string = '';
</script>

{#if types === 'img'}
	<img {src} {alt} class="rounded-full w-16 h-16" />
{:else}
	<div
		class="rounded-full bg-primaryContainer w-16 h-16 flex justify-center items-center text-onPrimaryContainer"
	>
		{#if types === 'icon'}
			<slot />
		{:else if types === 'text'}
			{label}
		{/if}
	</div>
{/if}
