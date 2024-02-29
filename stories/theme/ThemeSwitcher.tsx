"use client";
import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import Image from "next/image";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={50}
        height={50}
        sizes="50x50"
        alt="Loading dark/light mode"
        priority={false}
        title="Loading dark/light mode"
      />
    );
  if (resolvedTheme === "dark")
    return (
      <FiSun
        className="cursor-pointer"
        size={30}
        onClick={() => setTheme("light")}
      />
    );

  if (resolvedTheme === "light")
    return (
      <FiMoon
        className="cursor-pointer"
        size={30}
        onClick={() => setTheme("dark")}
      />
    );
};

export default ThemeSwitcher;
