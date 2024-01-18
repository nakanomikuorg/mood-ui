<script lang="ts">
	/**
	 * 头像的类型
	 */
	export let types: 'img' | 'icon' | 'text';
	/**
	 * 头像的大小
	 */
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'md';
	/**
	 * 头像的图片地址
	 *
	 * 只有当头像类型为 `img` 时才有效
	 */
	export let src: string = '';
	/**
	 * 头像图片的 alt
	 *
	 * 只有当头像类型为 `img` 时才有效
	 */
	export let alt: string = '';
	/**
	 * 头像的文本
	 *
	 * 只有当头像类型为 `text` 时才有效
	 */
	export let label: string = '';

	$: sizeClass = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-12 h-12',
		xl: 'w-14 h-14',
		'2xl': 'w-16 h-16'
	}[size];
	$: textClass = {
		xs: 'text-[11px]',
		sm: 'text-[11px]',
		md: 'text-xs',
		lg: 'text-xs',
		xl: 'text-sm',
		'2xl': 'text-sm'
	}[size];
</script>

{#if types === 'img'}
	<img {src} {alt} class={`rounded-full ${sizeClass}`} />
{:else}
	<div
		class={`rounded-full bg-primaryContainer flex justify-center items-center text-onPrimaryContainer ${textClass} ${sizeClass}`}
	>
		{#if types === 'icon'}
			<slot />
		{:else if types === 'text'}
			{label}
		{/if}
	</div>
{/if}
