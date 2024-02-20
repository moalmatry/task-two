import type { Meta, StoryObj } from '@storybook/react';

import MuteIcon from './MuteIcon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Containers/MuteIcon',
  component: MuteIcon,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof MuteIcon>;

export default meta;
type Story = StoryObj<typeof meta>;
export const example: Story = {
  args: {
    videoRef: undefined as unknown as React.RefObject<HTMLVideoElement>,
  },
};
