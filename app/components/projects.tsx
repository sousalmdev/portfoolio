/* eslint-disable react/no-unescaped-entities */
import React from 'react'


import Carrossel from './carrossel';

export const Projects = () => {
    return (
      <>
        <div id="projects" className="animate-fade-in-bottom py-20 text-left">
          <h2 className={`text-green-400 tracking-wider font-bold`}>
            EVERY GOOD DEVELOPER HAS TO HAVE MANY GOOD
          </h2>
          <br />
          <h1 className={`text-4xl md:text-6xl`}>Projects.</h1>
          <br />
          <p className=" w-full xl:w-2/5 md:w-4/5 sm:w-4/5 text-lg h-auto md:text-3xl font-light">
            There's some of my most important projects, that I created for
            clients, enterprises, voluntary works, and stuff. Take your time and
            appreciate these projects.
          </p>
        </div>
  
        <section className="flex justify-center self-center">
          <Carrossel />
        </section>
      </>
    );
  };
  