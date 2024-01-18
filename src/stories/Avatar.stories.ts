import type { Meta, StoryObj } from '@storybook/svelte';

import Avatar from '../lib/Avatar.svelte';

const meta = {
	title: 'Mood Design/Avatar',
	component: Avatar,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
