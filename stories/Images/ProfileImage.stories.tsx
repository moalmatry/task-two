import type { Meta, StoryObj } from '@storybook/react';
import img from '../../Assets/3760_1701057173_17276.jpg';

import ProfileImage from './ProfileImage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'images/ProfileImage',
  component: ProfileImage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof ProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const example: Story = {
  args: {
    hasStory: true,
    size: 10,
    src: img,
  },
};
