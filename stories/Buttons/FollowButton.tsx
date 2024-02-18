import React from 'react';

interface Props {
  className?: string;
}

const FollowButton = ({ className }: Props) => {
  return (
    <button
      type="button"
      className={`font-bold border-gray-100 border px-4 text-sm rounded-xl hover:border-gray-500 hover:text-gray-500 "
      type="button ${className}`}
    >
      Follow
    </button>
  );
};

export default FollowButton;
