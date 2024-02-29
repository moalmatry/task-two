import ThemeSwitcher from "@/stories/theme/ThemeSwitcher";

import React from "react";

const Home = () => {
  return (
    <main className="flex items-center justify-center text-black dark:text-white">
      <ThemeSwitcher />
      <h1>dummy test</h1>
    </main>
  );
};

export default Home;

// <main className="flex min-h-screen flex-col items-center justify-around p-24">
// <div>
//   <h1 className="text-center text-4xl font-bold">
//     This is example for video and image post
//   </h1>
//   <p className="mt-6 text-center">
//     The Video from the api did not work so we replaced it with video with
//     the same format <br />
//     (https://live-par-2-cdn-alt.livepush.io/live/bigbuckbunnyclip/index.m3u8)
//     <br />
//     you can enter any valid id in url from 1000 to 8000 or choose from
//     links below. <br />
//     We tried to build small design system depending on atomic design &
//     storybook to see the system use{" "}
//     <span className="font-bold text-yellow-400">npm run storybook</span>
//   </p>
// </div>
// <div>
//   <p>
//     <Link href="/1000">Id:1000 (Video)</Link>
//   </p>
//   <p>
//     <Link href="/2000">Id:2000 (Video)</Link>
//   </p>
//   <p>
//     <Link href="/5000">Id:5000 (Image)</Link>
//   </p>
//   <p>
//     <Link href="/3000">Id:3000 (Video)</Link>
//   </p>
// </div>
// </main>
