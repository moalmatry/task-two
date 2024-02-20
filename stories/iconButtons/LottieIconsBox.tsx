'use client';
import React from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import angryIcon from '../../Assets/lottie_json/angry.json';
import cryIcon from '../../Assets/lottie_json/cry.json';
import heartIcon from '../../Assets/lottie_json/heart.json';
import laughIcon from '../../Assets/lottie_json/laugh.json';
import likeIcon from '../../Assets/lottie_json/like.json';
import { PostReactions } from '../../services/types';

interface Props {
  reactions?: PostReactions | undefined;
}

const LottieIconsBox = ({ reactions }: Props) => {
  return (
    <div className="flex items-center">
      <div className="w-8 cursor-pointer mr-[-8px] relative ">
        <Lottie animationData={likeIcon} loop={false} />
        <p className="text-xs font-bold absolute p-0.5 bg-black rounded-full top-[1.1rem] left-[.40rem]">
          {reactions?.reactions ? reactions?.reactions['1'] : 0}
        </p>
      </div>
      <div className="w-8 cursor-pointer mr-[-15px] relative">
        <Lottie animationData={heartIcon} loop={false} />
        <p className="text-xs font-bold absolute p-0.5 bg-black rounded-full top-[1.1rem] left-[.40rem]">
          {reactions?.reactions ? reactions?.reactions['2'] : 0}
        </p>
      </div>
      <div className="w-10 cursor-pointer mr-[-15px] relative">
        <Lottie animationData={laughIcon} loop={false} />
        <p className="text-xs font-bold absolute p-0.5 bg-black rounded-full top-[1.35rem] left-[.60rem]">
          {reactions?.reactions ? reactions?.reactions['3'] : 0}
        </p>
      </div>
      <div className="w-10 cursor-pointer mr-[-20px] relative">
        <Lottie animationData={angryIcon} loop={false} />
        <p className="text-xs font-bold absolute p-0.5 bg-black rounded-full top-[1.30rem] left-[.65rem]">
          {reactions?.reactions ? reactions?.reactions['4'] : 0}
        </p>
      </div>
      <div className="w-11 cursor-pointer relative">
        <Lottie animationData={cryIcon} loop={false} />
        <p className="text-xs font-bold absolute p-0.5 bg-black rounded-full top-[1.50rem] left-3">
          {reactions?.reactions ? reactions?.reactions['5'] : 0}
        </p>
      </div>
    </div>
  );
};

export default LottieIconsBox;
