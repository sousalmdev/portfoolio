/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Image from 'next/image';
import Leo from '@/app/assets/Imagem do WhatsApp de 2024-04-04 à(s) 23.13.22_5cc7a10f.jpg'
import { Divider } from '@chakra-ui/react';
import { dm } from '../fonts/dm-sans';
export const About = () => {
    return (
      <>
        <div
          id="about"
          className="animate-fade-in-bottom pb-20 text-left w-11/12 md:w-full"
        > <div className="py-20 flex flex-col xl:flex-row items-center md:justify-between">
         <div className=""> <h2
            className={`text-green-400 md:text-lg text-base tracking-wider font-bold`}
          >
            YOU ALREADY SAW WHAT I CAN DO

            , NOW, YOU'RE GONNA KNOW
          </h2>
          <br />
          <h1 className={` ${dm.className} text-3xl md:text-6xl `}>
            Who I am
          </h1>
          <br />
     
         
          <p
            className={`text-left w-full xl:w-3/5 md:w-full sm:w-4/5 md:text-3xl text-base font-light `}
          >
            <span className="font-bold text-green-400">My name is</span> Leandro Medeiros de Sousa, a brazilian developer, born in Rio de Janeiro.
          I had my first touch with programming through the CC50 Harvard Course, first meeting C language and Programming Logic.
          After that, I went full on Front End Development, because I feel familiar to art and creative stuff.
          </p></div>
          <br />

          <Image style={{border:'1px solid  rgb(74 222 128) '}} src={Leo.src} width={350} height={300}  alt='abu' /></div>
         
         <h2
            className={`text-green-400 md:text-lg text-base tracking-wider font-bold`}
          >
           KNOW MY
          </h2>
          <br />
          <h1 className={`text-3xl md:text-6xl ${dm.className}`}>
            Hobbies
          </h1>
          <br />
          <p
            className={`text-left w-full xl:w-3/5 md:w-full sm:w-4/5 md:text-3xl text-lg font-light `}
          >
            <span className="font-bold text-green-400">I am a musician</span> since 2016, I play three different instruments: Guitar, Electric Guitar and Bass.   <span className="font-bold text-green-400">I like to sing as well. </span> I have some personal music taste which involves Metal, Bossa Nova, Samba, R&B and Jazz.
            <br /><br />
            I write poetries since 2018, talking about love, life, lies and all its mysteries.
         
        <br />
        <br />
        I'm a football supporter too. A passionated and born Flamengo supporter. One time Flamengo, always Flamengo.
         <br /><br />
         I'm a gym guy. It's been a year and six months since I started, and never ever wanted to stop since then. It helps either my body and my mind. Why should I stop?
         </p></div>
      </>
    );
  };