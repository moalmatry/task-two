import SendMessage from '../../components/icons/SVG';
import React from 'react';

interface Props {
  size: number;
}

const SendMessageIcon = ({ size }: Props) => {
  return (
    <div className="flex group cursor-pointer items-center p justify-center rounded-full border hover:border-gray-500 border-gray-100 p-2">
      <SendMessage
        name="send"
        className="opacity-100 group-hover:opacity-50"
        size={size}
      />
    </div>
  );
};

export default SendMessageIcon;
