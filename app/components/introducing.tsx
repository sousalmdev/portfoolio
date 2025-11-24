/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { dm } from "../fonts/dm-sans"
import Image from "next/image"
import skillset from "@/app/assets/Untitled.svg"

export const Introducing = () => {
  return (
    <section
      id="presentation"
      className="animate-fade-in-bottom min-h-screen w-11/12 md:w-full flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-white md:tracking-[1em] tracking-[.5em] font-bold md:text-base text-xs md:text-xl mb-5">
        HI, MY NAME IS LEO AND I’M A
      </h2>

      <h1
        className={`text-green-400 uppercase font-black tracking-tight text-4xl md:text-7xl`}
      >
        Front-End / UI Developer
      </h1>

      <h2
        className={`uppercase font-normal text-white tracking-tight text-2xl md:text-6xl`}
      >
        And Graphic Designer.
      </h2>

      <p
        className={`mt-10 w-full xl:w-2/5 md:w-4/5 text-base md:text-xl leading-tight text-[#D9D9D9]/90 font-light`}
      >
        Since my very first contact with programming, I’ve been dedicating my
        days to solving problems and translating ideas into high-impact
        interfaces. Feel free to explore what I’ve been building.
      </p>

      <div className="mt-12 flex md:flex-row flex-col items-center gap-6">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 text-sm md:text-lg bg-gradient-to-r from-[#23F392] to-[#0FFFC8]/80 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 active:scale-95 transition-transform shadow-[0_0_20px_-5px_rgba(35,243,146,0.4)]"
        >
          View My Work →
        </a>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm md:text-lg border border-[#d9d9d9] text-[#d9d9d9] px-6 py-3 rounded-full hover:bg-[#23F392]/20 transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
