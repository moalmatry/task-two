import Image, { StaticImageData } from 'next/image';
import React from 'react';
import image from '../../Assets/Melbourne-Corporate-Headshots-Julia-Nance-Portraits1.webp';

interface Props {
  size?: number;
  src?: string | StaticImageData;
  hasStory?: boolean;
}

const ProfileImage = ({ size = 10, src = image, hasStory = false }: Props) => {
  return (
    <div
      // w-${size} h-${size}
      className={`w-10 h-10 flex overflow-hidden rounded-full relative cursor-pointer border-white ${
        hasStory && 'border-2'
      }`}
    >
      <Image src={src} alt="profile pic" className="w-full" fill />
    </div>
  );
};

export default ProfileImage;
