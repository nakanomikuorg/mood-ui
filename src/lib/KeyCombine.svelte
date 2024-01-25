<script lang="ts">
	/**
	 * 按钮组合的大小
	 */
	export let size: 'sm' | 'md' = 'md';

	$: sizeClass = {
		sm: 'gap-1',
		md: 'bg-surfaceVariant rounded-2xl p-2 gap-2'
	}[size];
</script>

<div class={`inline-flex ${sizeClass}`}>
	<slot />
</div>
