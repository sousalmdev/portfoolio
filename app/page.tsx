/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Introducing } from "./components/introducing";
import { Articles } from "./components/articles";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";

import { About } from "./components/about";




const Page = () => {
  return (
    <div
      className={` flex items-center min-h-screen my-20 flex-col p-2 w-11/12 md:w-3/4 text-white`}
    >
      <Introducing />
      <br />
      <br />
      <Articles />
      <Projects />
      <Skills />
      <About/>
    </div>
  );
};
export default Page;
