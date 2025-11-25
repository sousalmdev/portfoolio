/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { dm } from "../fonts/dm-sans"
import Image from "next/image"
import skillset from "@/app/assets/Untitled.svg"
import { BiDownArrow, BiSolidDownArrow } from "react-icons/bi"

export const Introducing = () => {
  return (
    <section
      id="presentation"
      className="animate-fade-in-bottom min-h-screen w-full flex flex-col items-center justify-center text-center"
    >
      <h2 className="text-white md:tracking-[1em] tracking-[.5em] font-bold md:text-base text-xs md:text-xl mb-5">
        HI, MY NAME IS LEO <br className="md:hidden" /> AND I’M A
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

      <div className="mt-12 mx-auto w-full flex md:flex-row flex-col justify-center items-center gap-6">
        <a
          href="#projects"
          className="inline-flex gap-2 flex md:w-1/3 w-full justify-center items-center bg-gradient-to-r from-[#23F392] to-[#0FFFC8]/80 text-[#171717] px-8 py-3 rounded-full xl:text-lg text-sm font-semibold hover:scale-[1.01] transition-transform duration-200"
        >
          View My Work <BiSolidDownArrow/>
        </a>

        <a
          href="#contact"
          className="inline-flex flex md:w-1/3 w-full justify-center items-center gap-2 text-sm md:text-lg border border-[#d9d9d9] text-[#d9d9d9] px-6 py-3 rounded-full hover:bg-[#23F392]/20 transition-all"
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
