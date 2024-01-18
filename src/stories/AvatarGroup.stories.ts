import type { Meta, StoryObj } from '@storybook/svelte';

import AvatarGroup from '../lib/AvatarGroup.svelte';

const meta = {
	title: 'Mood Design/AvatarGroup',
	component: AvatarGroup,
	tags: ['autodocs'],
	argTypes: {}
} satisfies Meta<AvatarGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
