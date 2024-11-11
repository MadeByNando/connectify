import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    onClick: () => alert('Button clicked'),
    disabled: false,
    type: 'button',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    onClick: () => alert('Button clicked'),
    disabled: true,
    type: 'button',
  },
};
