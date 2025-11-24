/* eslint-disable react/no-unescaped-entities */
import React from "react"
import { PiFilmReelFill } from "react-icons/pi"
import {
  BiData,
  BiLogoAngular,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiSolidBrain,
} from "react-icons/bi"
import {
  SiCanva,
  SiFigma,
  SiInkscape,
  SiMysql,
  SiNextdotjs,
} from "react-icons/si"
import {
  TbBrain,
  TbHammer,
  TbLanguage,
  TbMoodHappy,
  TbPaintFilled,
} from "react-icons/tb"
import { Divider, Icon } from "@chakra-ui/react"
import { dm } from "../fonts/dm-sans"

export const Skills = () => {
  return (
    <div
      id="skills"
      className="animate-fade-in-bottom py-24 text-left flex flex-col items-center justify-center xl:w-11/12 md:w-full w-11/12"
    >
     <h2 className="text-green-400 mx-auto tracking-wider font-bold">
        A DEVELOPER IS ONLY AS GOOD AS THEIR
      </h2>

       <h1 className={`text-4xl mb-5 mx-auto md:text-6xl ${dm.className}`}>
        Skills.
      </h1>

       <p className="w-full md:text-left text-center xl:w-2/5 md:w-4/5 sm:w-4/5 mx-auto text-base md:text-xl font-light">
        Technical or interpersonal — skills are skills. Below is a combination of my{" "}
        <span className="font-black text-green-400">technical and personal abilities.</span>
      </p>

      <div className="py-12 flex items-center gap-2 justify-center">
        <Divider width={200} />
        <h2 className="text-green-400 text-center text-2xl md:text-5xl font-semibold">
          PROFESSIONAL <br /> SKILLS
        </h2>
        <Divider width={200} />
      </div>

      <ul className="w-full list-none gap-10 flex flex-col">
        <li className="gap-3 flex flex-col">
          <span className="font-bold text-yellow-500 md:text-4xl text-2xl flex items-center gap-2">
            {BiLogoJavascript(Icon)} <h2 className="text-white">Javascript</h2>
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            My very first programming language, originally used to study algorithms. Today it's one of my main tools for Front-End development.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-blue-500 md:text-4xl text-2xl flex items-center gap-2">
            <h2 className="text-white">ReactJS</h2> {BiLogoReact(Icon)}
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            My favorite library. It has a simple learning curve, yet scales beautifully with frameworks like Next.js.
          </p>
        </li>

        <li className="gap-3 flex flex-col">
          <span className="font-bold text-red-600 md:text-4xl text-2xl flex items-center gap-2">
            {BiLogoAngular(Icon)} <h2 className="text-white">Angular</h2>
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:text-4/5 xl:w-2/5">
            My first framework — learned in a traditional, self-taught, under-pressure scenario for a job test. Surprisingly fell in love with it.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-white md:text-4xl text-2xl flex items-center gap-2">
            <h2 className="text-white">NextJS</h2> {SiNextdotjs(Icon)}
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            The powerful React/Vercel framework that brings SSR and full-stack capability into one ecosystem.
          </p>
        </li>

        <li className="gap-3 flex flex-col">
          <span className="font-bold text-blue-500 md:text-4xl text-2xl flex items-center gap-2">
            {BiLogoTypescript(Icon)} <h2 className="text-white">Typescript</h2>
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            The “big brother” of JavaScript — static typing, organization, and structure. Makes everything feel safer and cleaner.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-blue-300 md:text-4xl text-2xl flex items-center gap-2">
            <h2 className="text-white">Databases</h2> {BiData(Icon)}
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            Experience with SQL (MySQL) and NoSQL (MongoDB). A dev eventually needs to master data handling to build full-stack apps.
          </p>
        </li>

        <div className="py-12 flex items-center gap-2 justify-center">
          <Divider width={200} />
          <h2 className="text-green-400 text-center text-2xl md:text-5xl font-semibold">
            DESIGN <br /> TOOLS
          </h2>
          <Divider width={200} />
        </div>

        <li className="gap-3 flex flex-col">
          <span className="font-bold text-white md:text-4xl text-2xl flex items-center gap-2">
            <SiInkscape /> Inkscape
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            My go-to for vector creation and editing, producing scalable and high-quality visual assets.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-orange-400 md:text-4xl text-2xl flex items-center gap-2">
            Figma <SiFigma />
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            My main UI/UX environment for prototypes, layouts, and team collaboration.
          </p>
        </li>

        <li className="gap-3 flex flex-col">
          <span className="font-black w-fit bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent md:text-4xl text-2xl flex items-center gap-2">
            <SiCanva className="text-cyan-400" /> Canva
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            Perfect for fast, impactful visuals — from design pieces to social templates and mockup videos.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-transparent bg-gradient-to-l from-green-400 to-cyan-400 bg-clip-text md:text-4xl text-2xl flex items-center gap-2">
            CapCut <PiFilmReelFill className="text-green-400" />
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            My tool for promotional videos, showcasing project outcomes and delivering polished visual materials.
          </p>
        </li>

        <div className="py-12 flex items-center gap-2 justify-center">
          <Divider width={200} />
          <h2 className="text-green-400 text-center text-2xl md:text-5xl font-semibold">
            PERSONAL <br /> SKILLS
          </h2>
          <Divider width={200} />
        </div>

        <li className="gap-3 flex flex-col">
          <span className="font-bold text-white md:text-4xl text-2xl flex items-center gap-2">
            {BiSolidBrain(Icon)} <h2 className="text-white">Rational Thinking</h2>
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            I'm the type who thinks things through multiple times before making a decision — extremely detail-oriented when solving client needs.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-cyan-400 md:text-4xl text-2xl flex items-center gap-2">
            <h2 className="text-white">Creative Mind</h2> {TbPaintFilled(Icon)}
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            Art inspires my work. As a Front-End/UI Developer, I channel creativity into interfaces that feel alive and meaningful.
          </p>
        </li>

        <li className="gap-3 flex flex-col">
          <span className="font-bold text-red-600 md:text-4xl text-2xl flex items-center gap-2">
            {TbLanguage(Icon)} <h2 className="text-white">Communication</h2>
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            Always loved languages — learned English and Spanish as a kid, and expanded multilingual communication throughout my career.
          </p>
        </li>

        <li className="gap-3 flex flex-col items-end text-right">
          <span className="font-bold text-yellow-400 md:text-4xl text-2xl flex items-center gap-2">
            <h2 className="text-white">Good Mood Always</h2> {TbMoodHappy(Icon)}
          </span>
          <p className="text-white text-lg md:text-2xl w-full md:w-4/5 xl:w-2/5">
            Clients, deadlines, daily calls — it's hard to keep a smile. That's exactly why I do. Bringing good energy is part of my work.
          </p>
        </li>
      </ul>
    </div>
  )
}
