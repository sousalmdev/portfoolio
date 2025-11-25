/* eslint-disable react/no-unescaped-entities */
import React from "react"

import Carrossel from "./carrossel"
import { dm } from "../fonts/dm-sans"

export const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="animate-fade-in-bottom py-20 md:w-full w-11/12 text-center mx-auto"
      >
        <h2 className="text-[#23f392] text-center text-base md:text-xl tracking-widest font-semibold">
          EVERY GREAT DEVELOPER NEEDS STRONG QUALITY
        </h2>

        <br />

        <h1 className={`text-4xl md:text-6xl ${dm.className}`}>Projects.</h1>

        <br />

        <p className="w-full xl:w-2/5 md:w-4/5 sm:w-4/5 mx-auto text-base md:text-xl font-light">
          Here are some of my most meaningful projects — created for clients,
          companies, collaborations, and personal development. Feel free to
          explore the details and check out each one.
          <br />
          <br />
          <span className="text-green-400 font-bold">
            (Mobile users: just swipe!)
          </span>
        </p>
      </div>

      <section className="flex justify-center self-center">
        <Carrossel />
      </section>
    </>
  )
}
