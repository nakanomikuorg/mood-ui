<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import avatar from '../assets/avatar.webp';
	import Avatar from '../lib/Avatar.svelte';

	export const meta = {
		title: 'Mood Design/Avatar',
		component: Avatar,
		tags: ['autodocs'],
		argTypes: {
			types: {
				control: { type: 'select' },
				options: ['img', 'icon', 'text']
			},
			size: {
				control: { type: 'select' },
				options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
			}
		}
	} satisfies Meta<Avatar>;
</script>

<script lang="ts">
	import { Story, Template } from '@storybook/addon-svelte-csf';
	import { Icon } from 'svelte-icon';
	import user from '@mdi/svg/svg/account-outline.svg?raw';
</script>

<Template let:args>
	<Avatar {...args} />
</Template>

<Story
	name="Img"
	args={{
		src: avatar,
		types: 'img',
		alt: 'avatar',
		size: 'md'
	}}
></Story>

<Story name="Icon">
	<Avatar types="icon">
		<Icon data={user} size="20px" stroke="transparent"></Icon>
	</Avatar>
</Story>

<Story
	name="Text"
	args={{
		label: 'MD',
		types: 'text',
		size: 'md'
	}}
></Story>
