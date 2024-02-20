"use client";
import React, { useState } from "react";
import RegularButton from "../Buttons/RegularButton";
import { BiLike } from "react-icons/bi";
import Lottie from "lottie-react";
import angryIcon from "../../Assets/lottie_json/angry.json";
import cryIcon from "../../Assets/lottie_json/cry.json";
import heartIcon from "../../Assets/lottie_json/heart.json";
import laughIcon from "../../Assets/lottie_json/laugh.json";
import likeIcon from "../../Assets/lottie_json/like.json";

const FloatingLottieContainer = () => {
  const [showBox, setShowBox] = useState<boolean>(false);
  const [selecting, setSelecting] = useState<boolean>(false);

  return (
    <>
      <RegularButton
        //   counter={data?.list.post_reactions.total_count}
        onMouseEnter={() => {
          setShowBox(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setShowBox(false);
          }, 1000);
        }}
        icon={<BiLike size={24} />}
      />
      <div
        onMouseEnter={() => {
          setSelecting(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setSelecting(false);
          }, 1000);
        }}
        className={`bg-gray-500  py-2 px-4 absolute  right-1 transition-all ease-in rounded-full bottom-11 gap-2  ${
          showBox || selecting ? "flex" : "hidden"
        }`}
      >
        <div className="w-8 cursor-pointer">
          <Lottie animationData={likeIcon} loop={true} />
        </div>
        <div className="w-8 cursor-pointer">
          <Lottie animationData={heartIcon} loop={true} />
        </div>
        <div className="w-8 cursor-pointer">
          <Lottie animationData={laughIcon} loop={true} />
        </div>
        <div className="w-8 cursor-pointer">
          <Lottie animationData={angryIcon} loop={true} />
        </div>
        <div className="w-8 cursor-pointer">
          <Lottie animationData={cryIcon} loop={true} />
        </div>
      </div>
    </>
  );
};

export default FloatingLottieContainer;
