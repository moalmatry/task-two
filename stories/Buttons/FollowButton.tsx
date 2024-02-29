import React from "react";

interface Props {
  className?: string;
}

const FollowButton = ({ className }: Props) => {
  return (
    <button
      type="button"
      className={` rounded-xl border border-gray-100 px-4 text-sm font-bold hover:border-gray-500 hover:text-gray-500
      ${className}`}
    >
      Follow
    </button>
  );
};

export default FollowButton;
