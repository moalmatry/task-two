import React from 'react';
import { getPost } from '@/services/getPost';
import PostContainer from '@/stories/Containers/PostContainer';

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
  const data = await getPost();

  return {
    title: 'Post By: ' + data?.list.user_name,
  };
}

const page = async ({ params }: Props) => {
  const data = await getPost();

  return (
    <main className="mt-1 flex min-h-screen justify-center">
      <PostContainer content="image" data={data} />
    </main>
  );
};

export default page;
