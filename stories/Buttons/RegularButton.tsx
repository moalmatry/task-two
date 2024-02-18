import React, { ReactNode } from 'react';

interface Props {
  comments?: string | undefined;
  icon: ReactNode;
  counter?: number;
  rounded?: 'full' | 'medium';
}

const RegularButton = ({
  icon,
  counter,
  rounded = 'medium',
  comments,
}: Props) => {
  return (
    <button
      type="button"
      className={`flex gap-1 bg-gray-700 hover:opacity-50 rounded-full ${
        rounded === 'medium' && 'py-1.5 px-3 '
      } ${rounded === 'full' && 'p-2'} `}
    >
      {icon}
      {counter && <p className="font-bold">{comments}</p>}
    </button>
  );
};

export default RegularButton;
