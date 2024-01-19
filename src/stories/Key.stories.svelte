<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Key from '../lib/Key.svelte';

	export const meta = {
		title: 'Mood Design/Key',
		component: Key,
		tags: ['autodocs'],
		argTypes: {
			types: {
				control: { type: 'select' },
				options: ['icon', 'text']
			},
			size: {
				control: { type: 'select' },
				options: ['sm', 'md']
			}
		}
	} satisfies Meta<Key>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { Icon } from 'svelte-icon';
	import appleKeyboardCommand from '@mdi/svg/svg/apple-keyboard-command.svg?raw';
</script>

<Template let:args>
	<Key {...args} />
</Template>

<Story
	name="Text"
	args={{
		label: 'M',
		types: 'text',
		size: 'md'
	}}
></Story>

<Story name="Icon">
	<Key types="icon">
		<Icon data={appleKeyboardCommand} size="24px" stroke="transparent"></Icon>
	</Key>
</Story>
