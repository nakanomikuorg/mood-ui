<script lang="ts">
	/**
	 * 按钮的类型
	 */
	export let types: 'text' | 'icon' = 'text';
	/**
	 * 按键的文本
	 *
	 * 只有在按键类型为 `text` 时才会显示
	 */
	export let label: string = '';
	/**
	 * 按钮的大小
	 */
	export let size: 'sm' | 'md' = 'md';

	$: outerClass = {
		sm: 'w-5 h-5 rounded shadow',
		md: 'w-16 h-16 rounded-[13px] border border-solid border-primary'
	}[size];
	$: innerClass = {
		sm: 'w-4 h-3.5 top-0.5 left-0.5 text-[10px] rounded-sm',
		md: 'w-[55px] h-[49px] rounded-lg top-[3.5px] left-[3.5px] border border-solid border-wb text-2xl'
	}[size];
</script>

<div class={`bg-primaryContainer relative ${outerClass}`}>
	<div
		class={`absolute flex justify-center items-center text-primary ${innerClass}`}
		style="background-image: var(--g);"
	>
		{#if types === 'icon'}
			<slot />
		{:else}
			{label}
		{/if}
	</div>
</div>
