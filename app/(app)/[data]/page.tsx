import React from "react";
import { getPost } from "@/services/getPost";
import PostContainer from "@/stories/Containers/Posts/PostContainer";

interface MetaProps {
  params: {
    data: string;
  };
}
interface Props {
  params: {
    data: string;
  };
}

export async function generateMetadata({ params }: MetaProps) {
  const data = await getPost(params.data); // Assuming params.data contains the post ID

  return {
    title: "Post By: " + data?.list.user_name,
  };
}

const Page = async ({ params }: Props) => {
  const data = await getPost(params.data); // Assuming params.data contains the post ID

  return (
    <main className="mt-1 flex min-h-screen justify-center">
      <PostContainer
        content={data.list.video ? "video" : "image"}
        data={data}
      />
    </main>
  );
};

export default Page;
