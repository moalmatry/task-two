import React from "react";
import SendMessage from "../icons/SVG";

interface Props {
  size: number;
}

const SendMessageIcon = ({ size }: Props) => {
  return (
    <div className="p group flex cursor-pointer items-center justify-center rounded-full border border-gray-100 p-2 hover:border-gray-500">
      <SendMessage
        name="send"
        className="opacity-100 group-hover:opacity-50"
        size={size}
      />
    </div>
  );
};

export default SendMessageIcon;
