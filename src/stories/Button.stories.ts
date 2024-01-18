import type { Meta, StoryObj } from '@storybook/svelte';

import Button from '../lib/Button.svelte';

const meta = {
	title: 'Mood Design/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		types: {
			control: { type: 'select' },
			options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger', 'gradient']
		},
		backgroundColor: { control: 'color' },
		backgroundGradient: { control: 'text' },
		size: {
			control: { type: 'select' },
			options: ['sm', 'md', 'lg', 'xl', '2xl']
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: '按钮',
		types: 'primary',
		size: 'md'
	}
};

export const Secondary: Story = {
	args: {
		label: '按钮',
		types: 'secondary',
		size: 'md'
	}
};

export const Tertiary: Story = {
	args: {
		label: '按钮',
		types: 'tertiary',
		size: 'md'
	}
};

export const Ghost: Story = {
	args: {
		label: '按钮',
		types: 'ghost',
		size: 'md'
	}
};

export const Danger: Story = {
	args: {
		label: '按钮',
		types: 'danger',
		size: 'md'
	}
};

export const Gradient: Story = {
	args: {
		label: '按钮',
		types: 'gradient',
		size: 'md'
	}
};
