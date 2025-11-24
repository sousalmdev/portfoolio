/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Accordionn } from "./accordion";
import { dm } from "../fonts/dm-sans";

export const Articles = () => {
  return (
    <div className="animate-fade-in-bottom pb-10 text-center w-11/12 md:w-full">
      <h2 className="text-green-400 text-sm md:text-lg tracking-wider font-bold">
        NOT JUST CODE — WELCOME TO MY
      </h2>

      <br />

      <h1 className={`text-3xl md:text-6xl ${dm.className}`}>Articles</h1>

      <br />

      <p className="w-full mx-auto xl:w-2/5 leading-none md:w-4/5 sm:w-4/5 md:text-xl text-base font-light">
        Throughout 2023, I started writing about what I’ve learned — to help
        beginners, curious minds, and experienced developers who enjoy refined,
        honest insights.
        Here are a few of them:
      </p>

      <br />

      <Accordionn />
    </div>
  );
};
