'use client';
import React, { useRef, useState } from 'react';
import MoreIcon from '../iconButtons/MoreIcon';
import MuteIcon from '../iconButtons/MuteIcon';
import { FaPlay } from 'react-icons/fa';
import ReactPlayer from 'react-player';

const VideoPlayer = () => {
  const videoRef: React.RefObject<HTMLVideoElement> = useRef(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playVideoHandler = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };
  return (
    <>
      <div className="absolute top-10 z-50 flex w-full justify-between px-4">
        <MoreIcon />
        <MuteIcon videoRef={videoRef} />
      </div>
      <ReactPlayer
        width={466}
        height={585}
        url="https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8"
        controls
      />

      <video
        onClick={playVideoHandler}
        ref={videoRef}
        className="w-full h-full cursor-pointer"
      >
        <source
          src={
            'https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8'
          }
          type="application/x-mpegURL"
        />
      </video>
      <div
        className={`absolute top-60 left-[13rem] cursor-pointer ${
          isPlaying ? 'hidden' : 'block'
        }`}
        onClick={playVideoHandler}
      >
        <FaPlay size={70} />
      </div>
    </>
  );
};

export default VideoPlayer;
