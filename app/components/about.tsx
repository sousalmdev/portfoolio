/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PeopleCard } from "./peopleCard";
import Image from "next/image";
import Leo from "@/app/assets/leo_image_base.png";
import { dm } from "../fonts/dm-sans";

export const About = () => {
  return (
    <div
      id="about"
      className="animate-fade-in-bottom pb-24 md:text-left text-center w-11/12 md:w-full"
    >
      <div className="py-20 flex flex-col xl:flex-row items-center justify-between gap-10">
        <div>
          <h2 className="text-[#23f392] md:text-left text-center text-base md:text-xl tracking-widest font-semibold">
            {" "}
            YOU'VE SEEN WHAT I CAN BUILD, NOW LEARN MORE ABOUT
          </h2>

          <h1 className={`${dm.className} text-4xl md:text-7xl mt-3`}>
            Who I Am
          </h1>

          <p className="mt-6 w-full xl:w-3/5 md:text-xl text-lg font-light leading-tight">
            <span className="font-bold text-[#23f392]">
              My name is Leandro Medeiros de Sousa
            </span>
            , a Brazilian developer born in Rio de Janeiro. My first real
            contact with programming came through Harvard’s CS50 course, where I
            learned C and the foundations of logic and problem-solving.
            <br />
            <br />I later dedicated myself to Front-End Development because I’ve
            always been driven by creativity and visual expression. When I
            discovered that UI development and design walk side by side, I
            embraced both — and every day I only confirm how naturally these two
            worlds connect.
          </p>
        </div>

        <Image
          src={Leo.src}
          width={420}
          height={380}
          alt="Leo Sousa"
          className="rounded-2xl"
        />
      </div>

      <div className="pb-24">
        <h2 className="text-[#23f392] tracking-wider font-bold text-sm md:text-xl">
          GET TO KNOW MY
        </h2>

        <h1 className={`${dm.className} text-4xl md:text-7xl mt-3`}>Hobbies</h1>

        <p className="mt-6 w-full xl:w-3/5 md:text-xl text-lg font-light leading-tight">
          <span className="font-bold text-[#23f392]">I’m a musician</span> since
          2016 — I play three instruments: Acoustic Guitar, Electric Guitar, and
          Bass.
          <span className="font-bold text-[#23f392]">
            {" "}
            I also enjoy singing.{" "}
          </span>
          My personal taste includes Metal, Bossa Nova, Samba, R&B, and Jazz.
          <br />
          <br />
          I’ve written poetry since 2018, touching themes like love, life,
          truth, and the mysteries in between.
          <br />
          <br />
          I’m a huge football fan — a passionate Flamengo supporter. Once
          Flamengo, always Flamengo.
          <br />
          <br />
          I’m also a gym regular. It’s been two years now, and I’ve never felt
          like stopping. Training keeps both my body and my mind sharp. Why
          would I quit?
        </p>
      </div>

       <h2 className="text-[#23f392] text-center text-base md:text-xl tracking-widest font-semibold">
        TALKING ABOUT MYSELF IS EASY, BUT YOU PROBABLY WANT TO KNOW
      </h2>

      <h1
        className={`${dm.className} text-center mx-auto  text-4xl md:text-7xl mt-3`}
      >
        What People Think
        <br />
        About Me
      </h1>

      <PeopleCard />
    </div>
  );
};
