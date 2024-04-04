/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import {jost } from '../layout';
import Image from 'next/image';
import Leo from '@/app/assets/Imagem do WhatsApp de 2024-04-03 à(s) 23.48.16_d7ef4f48.png'
import { Divider } from '@chakra-ui/react';
export const About = () => {
    return (
      <>
        <div
          id="#about"
          className="animate-fade-in-bottom pb-32 text-left w-11/12 md:w-full"
        > <div className="py-20 flex flex-col md:flex-row items-center md:justify-between">
         <div className=""> <h2
            className={`text-green-400 md:text-lg text-sm tracking-wider font-bold`}
          >
            YOU ALREADY SAW WHAT I CAN DO

            , NOW, YOU'RE GONNA KNOW
          </h2>
          <br />
          <h1 className={`text-3xl md:text-6xl`}>
            Who I am
          </h1>
          <br />
          <br />
         
          <p
            className={`text-left w-full xl:w-3/5 md:w-4/5 sm:w-4/5 md:text-3xl text-sm font-light ${jost.className}`}
          >
           My name is Leandro Medeiros de Sousa, I'm 19 years old, and I'm a brazilian developer, born in Rio de Janeiro.
          I had my first touch with programming through the CC50 Harvard Course, first meeting C language and Programming Logic.
          After that, I went full on Front End Development, because I feel familiar to art and creative stuff.
          </p></div>
          <br />
          
          <Image src={Leo.src} width={400} height={400}  alt='abu' /></div>
          <h2
            className={`text-green-400 md:text-lg text-sm tracking-wider font-bold`}
          >
           KNOW MY
          </h2>
          <br />
          <h1 className={`text-3xl md:text-6xl`}>
            Hobbies
          </h1>
          <br /><br />
          <p
            className={`text-left w-full xl:w-2/5 md:w-4/5 sm:w-4/5 md:text-3xl text-lg font-light ${jost.className}`}
          >
            <span className="font-bold text-green-400">I am a musician</span> since 2016, I play three different instruments: Guitar, Electric Guitar and Bass.   <span className="font-bold text-green-400">I like to sing as well. </span> I have some personal music taste which involves Metal, Bossa Nova, Samba, R&B and Jazz.
            <br /><br />
            I write poetries since 2018, talking about love, life, lies and all its mysteries.
         
        <br />
        <br />
        I'm a football supporter too. A passionated and born <span className="font-bold text-red-600">Flamengo</span> supporter. One time Flamengo, always Flamengo.
         </p></div>
      </>
    );
  };