/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Accordionn } from "./accordion";
import { dm } from "../fonts/dm-sans";
export const Articles = () => {
  return (
    <div className="animate-fade-in-bottom pb-10 text-left w-11/12 md:w-full">
      <h2
        className={`text-green-400 text-sm md:text-lg tracking-wider font-bold`}
      >
        'MAN SHALL NOT LIVE BY CODE ALONE', SO... WELCOME TO MY
      </h2>
      <br />
      <h1 className={`text-3xl md:text-6xl ${dm.className}`}>Articles</h1>
      <br />
      <p
        className={` w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl  text-lg font-light `}
      >
        As 2023 passed by, I decided to write about what I know, aiming to
        help both newcomers and experienced professional with fun facts, or
        lessons I've learned along the way. Here are just a few:
      </p>
      <br />
      <Accordionn />
    </div>
  );
};
