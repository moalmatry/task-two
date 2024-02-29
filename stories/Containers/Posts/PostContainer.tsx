import React from "react";
import SendMessageIcon from "../../iconButtons/SendMessageIcon";
import ProfileImage from "../../Images/ProfileImage";
import FollowButton from "../../Buttons/FollowButton";
import LottieIconsBox from "../../iconButtons/LottieIconsBox";
import RegularButton from "../../Buttons/RegularButton";
import SVG from "../../icons/SVG";
import { IoIosMore } from "react-icons/io";
import { Data } from "../../../services/types";
import Image from "next/image";
import img from "../../Assets/3760_1701057173_17276.jpg";
import FloatingLottieContainer from "./FloatingLottieContainer";
import dynamic from "next/dynamic";

interface Props {
  content: "image" | "video";
  data?: Data;
}

const PostContainer = ({ content, data }: Props) => {
  // to fix video hydration issues
  const NoSSR = dynamic(() => import("../../Video/VideoPlayer"), {
    ssr: false,
  });

  return (
    <div className="border-b-[0.5px min-h-[730px] w-full border-t-[0.5px] border-gray-500 sm:w-[466px]">
      {content === "image" && (
        <div className="my-2 flex justify-between px-4">
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
          {content === "image" && (
            <Image
              src={`https://cdn1.ayyam.net/imgs/md/${data?.list.image?.name}`}
              alt="test"
              fill
            />
          )}
          {content === "video" && (
            <>
              {/* Video element after disabling SSR */}
              <NoSSR />

              <div className="absolute bottom-24 left-3">
                <SendMessageIcon size={24} />
              </div>
              <div className="absolute bottom-2 flex w-full justify-between px-4">
                <div className="flex items-center gap-2">
                  <ProfileImage
                    hasStory={true}
                    src={`https://cdn1.ayyam.net/imgs/md/${data?.list.user_profile_pic}`}
                  />
                  <div>
                    <p className="text-sm font-bold">{data?.list.user_name}</p>
                    <p className="text-xs">{data?.list.video?.views_count}</p>
                  </div>
                </div>
                <FollowButton />
              </div>
            </>
          )}
        </div>
      }
      <div className="my-2 flex justify-between px-2">
        <div>
          <LottieIconsBox reactions={data?.list?.post_reactions} />
        </div>
        <div className="relative flex items-center gap-4">
          <FloatingLottieContainer />
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
