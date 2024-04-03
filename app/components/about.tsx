/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { dm, jost } from '../layout';
import Image from 'next/image';
import Test from '@/app/assets/0_3.webp'
export const About = () => {
    return (
      <>
        <div
          id="#presentation"
          className="animate-fade-in-bottom py-10 text-center w-11/12 md:w-full"
        >
          <h2
            className={`text-green-400 md:text-lg text-sm tracking-wider font-bold`}
          >
            YOU ALREADY SAW WHAT I CAN DO

            NOW, YOU'RE GONNA KNOW
          </h2>
          <br />
          <h1 className={`text-3xl md:text-6xl ${dm.className}`}>
            Who I am
          </h1>
          <br />
          <br />
          <div className="flex flex-col md:flex-row items-center md:justify-evenly">
          <p
            className={`text-left w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl text-lg font-light ${jost.className}`}
          >
           My name is Leandro Medeiros de Sousa, I'm 19 years old, and I'm a brazilian developer, born in Rio de Janeiro.
          I had my first touch with programming through the CC50 Harvard Course, first meeting C language and Programming Logic.
          </p>
          <br />
          <Image src={Test.src} width={300} height={500}  alt='abu' /></div>
        </div>
      </>
    );
  };