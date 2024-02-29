import React from "react";
import Image from "next/image";
import logo from "../../../Assets/logo/logo_w.png";
import ThemeSwitcher from "@/stories/theme/ThemeSwitcher";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact us",
};

const ContactUs = () => {
  return (
    <>
      <ThemeSwitcher />
      {/* bg-[#00000045] */}
      <main className=" flex h-screen justify-center py-28 ">
        <div className="flex w-[85%] flex-col items-center gap-10 rounded-xl border  bg-gray-200 py-10 shadow-lg dark:bg-gray-950 dark:shadow-sm dark:shadow-white xl:flex-row xl:justify-evenly">
          <div className="relative h-32 w-32 xl:h-72 xl:w-72">
            <Image
              src={logo}
              alt="ayyam logo"
              fill
              className="rounded-xl dark:bg-black dark:bg-none"
            />
          </div>
          <form action="" className="flex flex-col gap-2">
            <div>
              <input
                className="w-72 rounded-full  px-4 py-2 shadow-lg xl:w-96"
                type="text"
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="w-72 rounded-full px-4 py-2 shadow-lg xl:w-96 "
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <textarea
                className="h-40 w-72 resize-none rounded-3xl px-4 py-2 shadow-lg xl:h-60 xl:w-96"
                placeholder="Message"
              />
            </div>
            <button
              className="mt-4 rounded-full bg-black py-2.5 text-white shadow-lg dark:bg-white dark:text-black"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ContactUs;
