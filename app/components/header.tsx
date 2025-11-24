import React from "react"
import { Avatar, Button, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { MenuUi } from "@/app/components/menu"
import { MdVerified } from "react-icons/md"
import { BiSolidContact } from "react-icons/bi"
import leo from "@/app/assets/leo_image_base.png"

export const Header = () => {
  return (
    <header
      className="sticky top-10 z-50 w-11/12 md:w-3/4 mx-auto
      flex items-center justify-between
      px-6 py-3
      backdrop-blur-xl bg-black/20
      border border-white/10
      rounded-2xl
      shadow-[0_0_40px_-15px_rgba(35,243,146,0.2)]"
    >
      <div id="title" className="flex gap-3 items-center">
        <Avatar
          loading="lazy"
          size="xs"
          name="Leo Sousa"
          src={leo.src}
          objectFit="cover"
        />
        <h2 className="font-semibold flex items-center gap-1 text-[#D9D9D9]">
          Leo Sousa
          <MdVerified className="text-[#23F392]" />
        </h2>
      </div>

      <div className="sm:hidden">
        <MenuUi />
      </div>

      <nav className="hidden sm:flex justify-end">
        <ul className="flex items-center gap-10 text-sm md:text-base">
          <li className="text-[#D9D9D9] hover:text-white transition-all duration-200">
            <Link href="/">Home</Link>
          </li>
          <li className="text-[#D9D9D9] hover:text-white transition-all duration-200">
            <Link href="#projects">Projects</Link>
          </li>
          <li className="text-[#D9D9D9] hover:text-white transition-all duration-200">
            <Link href="#skills">Skills</Link>
          </li>
          <li className="text-[#D9D9D9] hover:text-white transition-all duration-200">
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="
              inline-flex items-center gap-2 text-sm
              bg-gradient-to-r from-[#23F392] to-[#0FFFC8]/80
              text-black font-semibold
              px-4 py-2 rounded-full
              hover:scale-105 active:scale-95
              transition-transform
              shadow-[0_0_20px_-5px_rgba(35,243,146,0.4)]
              "
            >
              Talk to me →
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
