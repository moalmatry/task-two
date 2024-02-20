import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <div>
        <h1 className="font-bold text-4xl text-center">
          This is example for video and image post
        </h1>
        <p className="text-center mt-6">
          The Video from the api did not work so we replaced it with video with
          the same format <br />
          (https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8)
          <br />
          you can enter any valid id in url from 1000 to 8000 or choose from
          links below. <br />
          We tried to build small design system depending on atomic design &
          storybook to see the system use{' '}
          <span className="text-yellow-400 font-bold">npm run storybook</span>
        </p>
      </div>
      <div>
        <p>
          <Link href="/1000">Id:1000 (Video)</Link>
        </p>
        <p>
          <Link href="/2000">Id:2000 (Video)</Link>
        </p>
        <p>
          <Link href="/5000">Id:5000 (Image)</Link>
        </p>
        <p>
          <Link href="/3000">Id:3000 (Video)</Link>
        </p>
      </div>
    </main>
  );
}
