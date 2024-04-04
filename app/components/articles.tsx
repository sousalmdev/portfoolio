/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Accordionn } from './accordion';
import { jost } from '../layout-font';
export const Articles = () => {
    return (
      <div
        className="animate-fade-in-bottom pb-10 text-left w-11/12 md:w-full"
      >
        <h2
          className={`text-green-400 text-sm md:text-lg tracking-wider font-bold`}
        >
          'MAN SHALL NOT LIVE BY CODE ALONE', SO FEEL WELCOME TO MY
        </h2>
        <br />
        <h1 className={`text-3xl md:text-6xl`}>Articles</h1>
        <br />
        <p
          className={` w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl  text-lg font-light ${jost.className}`}
        >
          As 2023 was passing by, I decided to write some stuff I knew, aiming to
          help either newcomers and experienced professional with fun facts, or
          true lessons. Here I'll show some of them:{" "}
        </p>
        <br />
        <Accordionn />
      </div>
    );
  };