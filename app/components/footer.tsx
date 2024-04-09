import Link from "next/link";
import React from "react";
export const Footer = () => {
  return (
    <footer
      className={` absolute bottom-0 pt-2 md:p-1  pb-11 bg-green-400 w-full text-black flex items-center justify-center`}
    >
      <ul className="flex items-center md:justify-evenly md:gap-0 justify-center text-center md:w-3/4 w-11/12 gap-7  text-sm md:text-base">
        <li className="flex flex-col">
          <p className="font-bold">©2024</p>
          <p className="underline">Leo Sousa</p>
        </li>

        <li className="flex flex-col">
          <p className="font-bold">Legal</p>
          <Link href={"/privacy"} className="underline">
            Privacy
          </Link>
        </li>
      </ul>
    </footer>
  );
};
