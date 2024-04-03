/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { dm, jost } from '../layout';

export const Introducing = () => {
    return (
      <>
        <div
          id="#presentation"
          className="animate-fade-in-bottom py-10 text-left w-11/12 md:w-full"
        >
          <h2
            className={`text-green-400 md:text-lg text-sm tracking-wider font-bold`}
          >
            HELLO, MY NAME IS LEO AND IM A
          </h2>
          <br />
          <h1 className={`text-3xl md:text-6xl ${dm.className}`}>
            Front End / UI
            <br />
            Developer.
          </h1>
          <br />
          <p
            className={` w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl text-lg font-light ${jost.className}`}
          >
            Since my very first contact, I've been dedicating my life to solve problems and
            translate ideas into code, it's not different right now, and that's
            why this portfolio exists.
          </p>
        </div>
      </>
    );
  };