'use client';
import React, { useState } from 'react';
import { FaVolumeMute } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';

interface Props {
  videoRef: React.RefObject<HTMLVideoElement>;
}

const MuteIcon = ({ videoRef }: Props) => {
  const [volume, setVolume] = useState<boolean>(true);
  const muteVideoHandler = () => {
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted;
  };
  return (
    <div
      className="mr-2 cursor-pointer hover:opacity-50"
      onClick={() => {
        setVolume((volume) => !volume);
        muteVideoHandler();
      }}
    >
      {volume ? <FaVolumeUp /> : <FaVolumeMute />}
    </div>
  );
};

export default MuteIcon;

{
  /* 
  <button
type="button"
onClick={() => {
  if (videoRef.current)
    videoRef.current.muted = !videoRef.current.muted;
}}
>
mute
</button> */
}
