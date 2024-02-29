import Image from "next/image";
import React from "react";
import logo from "../../../Assets/logo/logo_w.png";
import ThemeSwitcher from "@/stories/theme/ThemeSwitcher";
import Link from "next/link";
const LandingPage = () => {
  return (
    <main className="relative flex h-[200%] flex-col-reverse items-center justify-center gap-20  overflow-hidden bg-[#00000054] text-white xl:flex-row-reverse xl:py-10">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute bottom-0 top-0 -z-10 hidden w-full xl:block"
        src="/Ayyam.mp4"
      />

      <div className="flex flex-col items-center gap-6 rounded-xl bg-gray-300 p-20 dark:bg-[#000000c5]">
        <div className="flex w-96 flex-col items-center gap-10 rounded-xl border border-white py-10 dark:bg-gray-950">
          <Image src={logo} alt="ayyam logo" height={100} width={100} />
          <form action="" className="flex flex-col  gap-2">
            <div>
              <input
                className="w-72 rounded-full  px-4 py-2 text-black dark:text-white"
                type="text"
                placeholder="username or email"
              />
            </div>
            <div>
              <input
                className="w-72 rounded-full px-4 py-2  text-black dark:text-white"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className="mt-4 rounded-full border py-2 dark:bg-white dark:text-black"
              type="submit"
            >
              Login
            </button>

            <div>
              <p className="text-center ">
                <Link href="#" className="hover:font-bold">
                  forget password?
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div className="flex w-96 flex-col items-center rounded-xl border border-white py-2 dark:bg-gray-950">
          {/*eslint-disable-next-line react/no-unescaped-entities */}
          <p>Don't have an account?</p>
          <p>
            <Link href="#" className="hover:font-bold">
              Sign up
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <h4>Get the app.</h4>
          <div className="flex gap-2">
            <button className="mt-4 rounded-xl border px-4 py-2">
              Google Play
            </button>
            <button className="mt-4 rounded-xl border px-4 py-2">
              App Store
            </button>
          </div>
        </div>
      </div>
      <div className="hidden flex-col  items-center xl:flex">
        <h1 className="text-center text-4xl xl:text-5xl">
          First Arabic social media Platform
          {/* <ThemeSwitcher /> */}
        </h1>
        <p className="text-xl">By Arabs for Arabs</p>
      </div>
    </main>
  );
};

export default LandingPage;
