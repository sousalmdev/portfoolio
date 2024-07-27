/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  BiData,
  BiLogoAngular,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiSolidBrain,
} from "react-icons/bi";
import { SiMongodb, SiMysql, SiNextdotjs, SiSequelize } from "react-icons/si";
import {
  TbBrain,
  TbHammer,
  TbLanguage,
  TbMoodHappy,
  TbMoodHappyFilled,
  TbPaintFilled,
} from "react-icons/tb";
import { Divider, Icon } from "@chakra-ui/react";
import { dm } from "../fonts/dm-sans";
export const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="animate-fade-in-bottom py-20 text-left xl:w-11/12 md:w-full sm:w-4/5 w-11/12"
      >
        <h2 className={`text-green-400 tracking-wider font-bold`}>
          A DEVELOPER IS ONLY AS GOOD AS THEIR
        </h2>

        <br />
        <h1 className={`text-4xl md:text-6xl ${dm.className}`}>Skills.</h1>

        <br />
        <p className="w-full md:w-2/4 text-xl h-auto md:text-3xl font-light">
          Hard or soft, skills are always skills. Featured below are a
          combination of my{" "}
          <span className="font-black text-green-400">
            soft and hard skills.
          </span>
        </p>
        <br />
        <div className="py-10 flex items-center gap-1 justify-center">
          <Divider width={200} />
          <h2
            className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold `}
          >
            WORK <br />
            SKILLS
          </h2>
          <Divider width={200} />
        </div>
        <ul className="w-full list-none gap-5 flex flex-col">
          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold text-yellow-500 md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiLogoJavascript(Icon)}{" "}
              <h2 className="text-white">Javascript</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              My first ever language! It was helpful for studying algorithms
              back at the day, and now I use it a lot with Front End
              Programming.
            </p>
          </li>

          <li
            className={`gap-2 items-end text-right justify-end flex flex-col`}
          >
            {" "}
            <span
              className={`font-bold  text-blue-500 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">ReactJS</h2>
              {BiLogoReact(Icon)}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              My most used JS library! I personally like ReactJS for its
              learning curve, which is, at the beginning, simple, but escalable
              as well if using ReactJS Frameworks like NextJS.
            </p>
          </li>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-red-600 md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiLogoAngular(Icon)} <h2 className="text-white">Angular</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              My first ever framework. And I learned this one the old-fashioned
              self-taught way, under some pressure for an asessment for a job
              application, and it went very well and I fell in love with it
              along the way.
            </p>
          </li>

          <li className={`gap-2 items-end text-right flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-white md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">NextJS</h2> {SiNextdotjs(Icon)}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              The React/Vercel Framework came into existence to add more
              strenght and versatility to ReactJS, and included in its arsenal
              of services, a server-side-rendering feature, which being
              well-used, can provide a 'Full-Stack' application, with speed and
              effectiveness.
            </p>
          </li>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-blue-500 md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiLogoTypescript(Icon)}{" "}
              <h2 className="text-white">Typescript</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              The 'Big Brother' of Javascript, focused on Object Orientated
              Programming. I feel very secure using TypeScript due to the use of
              static typing.
            </p>
          </li>

          <li className={`items-end text-right gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-blue-300 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">Databases</h2> {BiData(Icon)}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Every programmer has to handle at least one database server to
              create a full-service application, so, I'm working on acquire
              experiences with SQL (mySQL) and noSQL (MongoDB) databases.
            </p>
          </li>
          <div className="py-10 flex items-center gap-1 justify-center">
            <Divider width={200} />
            <h2
              className={`text-green-400 text-center py-2 text-xl md:text-4xl font-semibold `}
            >
              PERSONAL <br />
              SKILLS
            </h2>
            <Divider width={200} />
          </div>
          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-white md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiSolidBrain(Icon)}{" "}
              <h2 className="text-white">Rational Behavior</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              You know the kind of person who thinks through things times and
              times before taking a decision? That's me! I'm extremely thorough
              when it comes to providing solutions to address my client's needs.
            </p>
          </li>

          <li className={`items-end text-right gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-cyan-400 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">Creative Mind</h2>{" "}
              {TbPaintFilled(Icon)}{" "}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              And that's why I'm a Front-End / UI Developer. I love art and all
              things it brings to the culture, so I can channel art to my
              applications, bringing dreams and idealizations to life through my
              codes.
            </p>
          </li>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-red-600 md:text-3xl text-lg items-center flex gap-2`}
            >
              {TbLanguage(Icon)} <h2 className="text-white">Communication</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Even as a child, I was interested in learning new languages, I
              knew my first english and spanish words when I was only 6 (My
              first language is Portuguese, by the way) . Throughout my career,
              I was able expand my multilingual abilities through extensive international communication.
            </p>
          </li>

          <li className={`items-end text-right gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-yellow-400 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">Always in a good mood</h2>{" "}
              {TbMoodHappy(Icon)}{" "}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Clients, tons of daily reunions and alignments, personal
              obligations, its really hard to keep walking with a smile. And
              that's why you should hire me. My main purpose is to bring joy
              along with every single thing I do, to enlighten someone's day.
              And usually it works.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
