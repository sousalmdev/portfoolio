/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { dm } from "../fonts/dm-sans";
import { Button, ButtonGroup, Divider, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FormContact } from "./formContact";
import {
  BiLogoGithub,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="animate-fade-in-bottom flex flex-col items-center justify-center mb-64 text-center w-11/12 md:w-full"
    >
      <div className="flex flex-col items-center gap-2 md:pb-20">
        <h2 className="text-green-400 text-center text-base md:text-xl tracking-widest font-semibold">
          INTERESTED?
        </h2>
        <h1 className={`${dm.className} text-3xl md:text-5xl font-bold`}>
          Let's Work Together
        </h1>
        <p className="text-gray-300 md:text-lg text-sm max-w-xl mt-4">
          Whether you need a high-impact website or a modern visual identity,
          feel free to reach out. I'm always open to new challenges.
        </p>
      </div>

      <br />

      <ButtonGroup className="flex flex-col w-fit items-center gap-4">
        <Button
          as={Link}
          href="https://linkedin.com/in/leosousadev"
          fontSize={{ base: "medium", md: "large" }}
          bgColor="rgb(74 222 128)"
          border="1px solid rgb(74 222 128)"
          _hover={{ bgColor: "white", color: "black" }}
          color="black"
          leftIcon={<BiLogoLinkedin size={22} />}
          paddingInline={8}
          rounded="full"
        >
          Connect on LinkedIn
        </Button>

        <Button
          as={Link}
          href="https://github.com/sousalmdev"
          fontSize={{ base: "medium", md: "large" }}
          bgColor="rgb(74 222 128)"
          border="1px solid rgb(74 222 128)"
          _hover={{ bgColor: "white", color: "black" }}
          color="black"
          leftIcon={<BiLogoGithub size={22} />}
          paddingInline={8}
          rounded="full"
        >
          Visit my GitHub
        </Button>
      </ButtonGroup>

      <div className="flex items-center gap-2 md:py-20 py-10 w-full justify-center">
        <Divider width="100px" borderColor="#23F392" />
        <h2 className="text-green-400 text-center text-base md:text-xl font-semibold">
          OR
        </h2>
        <Divider width="100px" borderColor="#23F392" />
      </div>

      <div className="flex flex-col w-fit items-center">
        <FormContact />

        <Button
          as={Link}
          href="https://wa.link/sqisqd"
          fontSize={{ base: "medium", md: "large" }}
          bgColor="rgb(74 222 128)"
          border="1px solid rgb(74 222 128)"
          _hover={{ bgColor: "white", color: "black" }}
          color="black"
          marginTop={6}
          paddingInline={8}
          rounded="full"
          leftIcon={<BiLogoWhatsapp size={22} />}
        >
          Send me a Message
        </Button>
      </div>
    </div>
  );
};
