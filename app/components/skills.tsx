/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { BiData, BiLogoAngular, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoReact, BiLogoTypescript, BiSolidBrain } from "react-icons/bi";
import { SiMongodb, SiMysql, SiNextdotjs, SiSequelize } from "react-icons/si";
import { TbBrain, TbHammer, TbLanguage, TbMoodHappy, TbMoodHappyFilled, TbPaintFilled } from "react-icons/tb";
import { Divider,Icon } from '@chakra-ui/react';
import { dm } from '../fonts/dm-sans';
export const Skills = () => {
    return (
      <>
        <div
          id="skills"
          className="animate-fade-in-bottom py-20 text-left md:w-full w-11/12"
        >
          <h2 className={`text-green-400 tracking-wider font-bold`}>
            THERE'S NO DEVELOPER WITHOUT SOME
          </h2>
  
          <br />
          <h1 className={`text-4xl md:text-6xl ${dm.className}`}>Skills.</h1>
  
          <br />
          <p className="w-full md:w-2/4 text-xl h-auto md:text-3xl font-light">
            Hard or soft, skills are always skills.
           And I'm going to list some of my skills, all I can remember by
            now.
          </p>
          <br />
  <div className="py-10 flex items-center gap-1 justify-center">
    <Divider width={200} />
          <h2 className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold `}>WORK <br />SKILLS</h2>
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
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
                This programming language was my first ever, and helped me through
                my algorithms studying back at the day, and now I keep using, but
                with Front End Programming.
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
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
                Not my first library/framework using JS, but it's my most-used
                one. I have appreciation for its learning method, it helps a lot a
                beginner, but using just the basics, showcases a comfortable
                professional mind, which is{" "}
                <span className="font-bold text-red-600">dangerous.</span>
              </p>
            </li>
  
            <li className={`gap-2 flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-red-600 md:text-3xl text-lg items-center flex gap-2`}
              >
                {BiLogoAngular(Icon)} <h2 className="text-white">Angular</h2>
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
                Now...yes.
                <br />
                That was my first ever framework. And I learned it like an
                old-fashioned self-taught, under pressure. I needed to do an
                asessment for a job application, and it went very well, and the safety Angular possess, made myself fall in love with it.
              </p>
            </li>
  
            <li className={`gap-2 items-end text-right flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-white md:text-3xl text-lg items-center flex gap-2`}
              >
               
                <h2 className="text-white">NextJS</h2> {" "}{SiNextdotjs(Icon)}
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
                The React/Vercel Framework came into existence to add more strenghtness and versatility to ReactJS, and included in its arsenal of services, a server-side-rendering feature, which being well-used, can provide a 'Full-Stack' application, with speed and effectiveness.
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
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
                The 'Big Brother' of Javascript, T-Script it's a huge guy.
                Focused on OOP, Typescript keep always both eyes on your code and assures that you're doing the right thing. I feel so much secure using Typescript because of it.
              </p>
            </li>
  
            <li className={`items-end text-right gap-2 flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-blue-300 md:text-3xl text-lg items-center flex gap-2`}
              >
              
                <h2 className="text-white">Databases</h2> {" "} {BiData(Icon)}
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
            Every programmer has to handle at least one database server to create a full-service application, so, I'm working on acquire experiences with SQL (mySQL) and noSQL (MongoDB) databases.
              </p>
            </li>
            <div className="py-10 flex items-center gap-1 justify-center">
    <Divider width={200} />
            <h2 className={`text-green-400 text-center py-2 text-xl md:text-4xl font-semibold `}>PERSONAL <br />SKILLS</h2>
  <Divider width={200}/>
  </div>
            <li className={`gap-2 flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-white md:text-3xl text-lg items-center flex gap-2`}
              >
                {BiSolidBrain(Icon)}{" "}
                <h2 className="text-white">Racional Behavior</h2>
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
                Do you know this kind of person who thinks thirty times before taking a decision? That's me. I can't do for myself or for the clients, what I want to do, I do what I have to, because that's what does a good professional.
              </p>
            </li>
  
            <li className={`items-end text-right gap-2 flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-cyan-400 md:text-3xl text-lg items-center flex gap-2`}
              >
               
                <h2 className="text-white">Creative Mind</h2> {TbPaintFilled(Icon)}{" "}
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
               And that's why I'm a Front-End / UI Developer. I love art and all things it brings to the culture, so I can channel art to my applications, bringing dreams and idealizations to life through my codes. 
              </p>
            </li>
  
            <li className={`gap-2 flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-red-600 md:text-3xl text-lg items-center flex gap-2`}
              >
                {TbLanguage(Icon)}{" "}
                <h2 className="text-white">Communication</h2>
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
               Since I was a kid, I was very interested into learning new languages, I did put my first english and spanish words when I was only 6. And I can say through my career, I was able to speak these two languages aside my native one,  to improve my worldwide communication.
              </p>
            </li>
  
            <li className={`items-end text-right gap-2 flex flex-col`}>
              {" "}
              <span
                className={`font-bold  text-yellow-400 md:text-3xl text-lg items-center flex gap-2`}
              >
              
                <h2 className="text-white">Always in a good mood</h2>  {TbMoodHappy(Icon)}{" "}
              </span>
              <p className=" text-white text-sm md:text-2xl w-full md:w-2/5">
   Clients, tons of daily reunions and alignments, personal obligations, its really hard to keep walking with a smile. And that's why you should hire me.
  My main purpose is to bring joy along with every single thing I do, to enlighten someone's day. And usually it works.
              </p>
            </li>
          </ul>
        </div>
      </>
    );
  };
  