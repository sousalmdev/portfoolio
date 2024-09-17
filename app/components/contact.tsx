import React from "react";
import { dm } from "../fonts/dm-sans";
import { Divider, ButtonGroup, Button, Icon } from "@chakra-ui/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";
import {
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
  BiLogoWhatsapp,
} from "react-icons/bi";
import { FormContact } from "./formContact";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="animate-fade-in-bottom flex flex-col items-center justify-center mb-64 text-center w-11/12 md:w-full"
    >
      <div className="flex items-center gap-1 md:pb-20 p-0 justify-center">
        <h2
          className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold`}
        >
          INTERESSADO?
        </h2>
      </div>
      <br />
      <ButtonGroup className="flex flex-col w-fit items-center justify center gap-4">
        <Button
          as={Link}
          fontSize={{ base: "medium", md: "x-large", xl: "x-large" }}
          href={"https://linkedin.com/in/leosousadev"}
          border={".5px solid rgb(74 222 128)"}
          _hover={{ bgColor: "rgb(74 222 128)" }}
          bgColor={"rgb(74 222 128)"}
          color={"black"}
          leftIcon={BiLogoLinkedin(Icon)}
        >
          Encontre-me no LinkedIn
        </Button>
        <Button
          as={Link}
          fontSize={{ base: "medium", md: "x-large", xl: "x-large" }}
          href={"https://github.com/sousalmdev"}
          border={".5px solid rgb(74 222 128)"}
          _hover={{ bgColor: "rgb(74 222 128)" }}
          bgColor={"rgb(74 222 128)"}
          color={"black"}
          leftIcon={BiLogoGithub(Icon)}
          padding={"auto"}
          margin={"0 auto"}
        >
          Encontre-me no Github
        </Button>
      </ButtonGroup>
      <div className="flex items-center gap-1  md:py-20 py-10  justify-center">
        <Divider width={100} />
        <h2
          className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold`}
        >
          OU
        </h2>
        <Divider width={100} />
      </div>
      <div className="flex flex-col w-fit items-center justify center">
        <FormContact />

        <Button
          as={Link}
          fontSize={{ base: "medium", md: "x-large", xl: "x-large" }}
          href={"https://wa.link/sqisqd"}
          border={".5px solid rgb(74 222 128)"}
          _hover={{ bgColor: "rgb(74 222 128)" }}
          bgColor={"rgb(74 222 128)"}
          color={"black"}
          marginTop={4}
          paddingInline={{ base: "16px" }}
          leftIcon={BiLogoWhatsapp(Icon)}
        >
          Envie-me uma mensagem
        </Button>
      </div>
    </div>
  );
};
