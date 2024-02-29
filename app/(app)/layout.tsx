import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Footer from "../../stories/Containers/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Ayyam",
};

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <div className="grid grid-cols-8 grid-rows-2 font-new ">
        <header className="col-span-8 row-span-2 bg-red-700 xl:col-span-1">
          <p>asdasdasdsaddsdas</p>
          <p>asdasdasdsaddsdas</p>
          <p>asdasdasdsaddsdas</p>
          <p>asdasdasdsaddsdas</p>
          <p>asdasdasdsaddsdas</p>
          <p>asdasdasdsaddsdas</p>
        </header>
        <section className="bg-gree-500 col-span-8 bg-green-300 xl:col-span-5">
          {children}
        </section>
        <aside className="hidden bg-yellow-600 xl:col-span-2 xl:block"></aside>
      </div>
      <div className="hidden xl:block">
        <Footer />
      </div>
    </Providers>
  );
}
