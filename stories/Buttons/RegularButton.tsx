import React, { ReactNode } from "react";

interface Props {
  comments?: string | undefined;
  icon: ReactNode;
  counter?: number;
  rounded?: "full" | "medium";
  className?: string;
  onMouseEnter?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  onMouseLeave?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
}

const RegularButton = ({
  icon,
  counter,
  rounded = "medium",
  comments,
  className,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      type="button"
      className={`flex gap-1 bg-gray-700 hover:opacity-50 rounded-full  ${
        rounded === "medium" && "py-1.5 px-3 "
      } ${rounded === "full" && "p-2"} ${className} `}
    >
      {icon}
      {counter && <p className="font-bold">{comments}</p>}
    </button>
  );
};

export default RegularButton;
