import React from 'react';
import { IoIosMore } from 'react-icons/io';

const MoreIcon = () => {
  return (
    <div className="group font-bold p-1 text-sm rounded-full cursor-pointer bg-gray-500 hover:bg-gray-100">
      <IoIosMore size={24} className=" group-hover:text-black" />
    </div>
  );
};

export default MoreIcon;
