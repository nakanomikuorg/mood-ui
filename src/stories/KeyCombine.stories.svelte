<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import KeyCombine from '../lib/KeyCombine.svelte';

	export const meta = {
		title: 'Mood Design/Key Combine',
		component: KeyCombine,
		tags: ['autodocs'],
		argTypes: {
			// size: {
			// 	control: { type: 'select' },
			// 	options: ['sm', 'md']
			// }
		}
	} satisfies Meta<KeyCombine>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { Icon } from 'svelte-icon';
	import appleKeyboardCommand from '@mdi/svg/svg/apple-keyboard-command.svg?raw';
	import Key from '../lib/Key.svelte';
</script>

<Template let:args>
	<KeyCombine {...args} />
</Template>

<Story name="Medium">
	<KeyCombine>
		<Key types="icon" size="md">
			<Icon data={appleKeyboardCommand} size="24px" stroke="transparent"></Icon>
		</Key>
		<Key types="text" size="md" label="K"></Key>
	</KeyCombine>
</Story>

<Story name="Small">
	<KeyCombine size="sm">
		<Key types="icon" size="sm">
			<Icon data={appleKeyboardCommand} size="8px" stroke="transparent"></Icon>
		</Key>
		<Key types="text" size="sm" label="K"></Key>
	</KeyCombine>
</Story>
