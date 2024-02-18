import React from 'react';
import SendMessageIcon from '../iconButtons/SendMessageIcon';
import ProfileImage from '../Images/ProfileImage';
import FollowButton from '../Buttons/FollowButton';
import MoreIcon from '../iconButtons/MoreIcon';
import MuteIcon from '../iconButtons/MuteIcon';
import LottieIconsBox from '../iconButtons/LottieIconsBox';
import RegularButton from '../Buttons/RegularButton';
import { BiLike } from 'react-icons/bi';
import SVG from '../../components/icons/SVG';
import { IoIosMore } from 'react-icons/io';
import { getPost } from '../../services/getPost';
import { Data, RootObject } from '../../services/types';
import Image from 'next/image';
import img from '../../Assets/3760_1701057173_17276.jpg';
import VideoPlayer from '../Video/VideoPlayer';

interface Props {
  content: 'image' | 'video';
  data?: Data;
}

const PostContainer = ({ content, data }: Props) => {
  // console.log(data.list.post_content);
  return (
    <div className="border-b-[0.5px min-h-[730px] w-full border-t-[0.5px] border-gray-500 sm:w-[466px]">
      {content === 'image' && (
        <div className="flex justify-between my-2 px-4">
          <div className="flex items-center gap-2 ">
            <ProfileImage
              hasStory={true}
              src={`https://cdn1.ayyam.net/imgs/md/${data?.list.user_profile_pic}`}
            />
            <div>
              <p className="text-sm font-bold">{data?.list.user_name}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FollowButton className="py-2" />
            <IoIosMore size={24} className="cursor-pointer" />
            {/* <button type="button" onClick={() => getPost()}>
              test
            </button> */}
          </div>
        </div>
      )}
      {
        <div className="relative h-[585px] w-full border border-gray-500">
          {content === 'image' && <Image src={img} alt="test" fill />}
          {content === 'video' && (
            <>
              <VideoPlayer />

              <div className="absolute bottom-24 left-3">
                <SendMessageIcon size={24} />
              </div>
              <div className="absolute bottom-2 flex w-full justify-between px-4">
                <div className="flex items-center gap-2">
                  <ProfileImage />
                  <div>
                    <p className="text-sm font-bold">{data?.list.user_name}</p>
                    <p className="text-xs">20</p>
                  </div>
                </div>
                <FollowButton />
              </div>
            </>
          )}
        </div>
      }
      <div className="flex justify-between px-2 my-2">
        <div>
          <LottieIconsBox reactions={data?.list?.post_reactions} />
        </div>
        <div className="flex items-center gap-4">
          <RegularButton
            counter={data?.list.post_reactions.total_count}
            icon={<BiLike size={24} />}
          />
          <RegularButton
            comments={data?.list.comments_count}
            counter={20}
            icon={<SVG size={24} name="comments" />}
          />
          <RegularButton
            rounded="full"
            icon={<SVG size={24} name="repost-white" />}
          />
        </div>
      </div>
      <div className="px-4">
        <p className="flex font-bold">{data?.list.user_name}</p>
        <p className="text-sm">{data?.list.post_content}</p>
        <p className="text-sm">{data?.list.time} ago</p>
      </div>
    </div>
  );
};

export default PostContainer;
