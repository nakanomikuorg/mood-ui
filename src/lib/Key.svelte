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
</script>

<div
	class="w-16 h-16 bg-primaryContainer rounded-[13px] border border-solid border-primary relative"
>
	<div
		class="w-[55px] h-[49px] rounded-[7px] absolute top-[3.5px] left-[3.5px] border border-solid border-wb text-2xl flex justify-center items-center text-primary"
		style="background-image: var(--g);"
	>
		{#if types === 'icon'}
			<slot />
		{:else}
			{label}
		{/if}
	</div>
</div>
