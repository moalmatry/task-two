import type { Meta, StoryObj } from '@storybook/react';

import SendMessageIcon from './SendMessageIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'icons/SendMessageIcon',
  component: SendMessageIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SendMessageIcon>;

export default meta;
type Story = StoryObj<typeof meta>;
export const example: Story = {
  args: {
    size: 24,
  },
};
