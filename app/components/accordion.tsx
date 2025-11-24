/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const Accordionn = () => {
  return (
    <Accordion
      allowToggle
      className="py-6 flex items-center flex-col text-lg justify-center gap-4"
    >
      {/* ITEM 1 */}
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color="#23F392"
            _expanded={{ bg: "#23F392", color: "#171717" }}
            className="text-sm md:text-xl"
          >
            <Box
              className="font-bold text-sm md:text-xl"
              as="span"
              flex="1"
              textAlign="left"
            >
              How My Journey as a Developer Started
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          My path into development wasn’t glamorous — it was curiosity, obsession
          and a need to create things that actually *look* and *feel* good.
          <br />
          <br />
          <ul className="list-none p-0 flex flex-col gap-4">
            <li>
              <strong>Understanding the Logic:</strong> I started by learning how
              things work under the hood. Once logic clicked, Front-End became
              the place where tech meets art — perfect fit.
            </li>
            <li>
              <strong>Building with Intention:</strong> I avoid just copying
              templates. Every project needs a bit of personality. Even a simple
              login screen deserves identity.
            </li>
            <li>
              <strong>Learning from People:</strong> Asking for help doesn't
              make you weak. It makes you faster, smarter and more collaborative.
            </li>
            <li>
              <strong>Feedback as Fuel:</strong> Critics helped sharpen my eye
              for UX and aesthetics. Each iteration made me more precise.
            </li>
            <li>
              <strong>Sharing Knowledge:</strong> Teaching reinforces mastery.
              Helping others evolve is just as rewarding as leveling myself up.
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>

      {/* ITEM 2 */}
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color="#23F392"
            _expanded={{ bg: "#23F392", color: "#171717" }}
            className="text-sm md:text-xl"
          >
            <Box
              className="font-bold text-sm md:text-xl"
              as="span"
              flex="1"
              textAlign="left"
            >
              Curious & Fast or Experienced & Bored?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          The dev world has a “duck” joke — the one that tries to do everything
          but masters nothing. Honestly? I prefer being that duck, but a
          disciplined one.
          <br />
          <br />
          I never want to be the “old tiger” who knows everything but does
          nothing new. I want the thrill — breaking things, fixing things,
          jumping into stacks I've never touched.
          <br />
          <br />
          React? Let’s go.  
          Angular? I love that chaos.  
          Vue? Never touched, but sure.  
          Svelte? If it still exists, I'll learn.  
          Backend? Coffee + neurons = magic.  
          <br />
          <br />
          The more tools I know, the better I build. Being adaptable is my
          specialty — not stuck on one screwdriver in a world full of hammers.
        </AccordionPanel>
      </AccordionItem>

      {/* ITEM 3 */}
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color="#23F392"
            _expanded={{ bg: "#23F392", color: "#171717" }}
            className="text-sm md:text-xl"
          >
            <Box
              className="font-bold text-sm md:text-xl"
              as="span"
              flex="1"
              textAlign="left"
            >
              How I Built a Consistent Study Routine
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          My study routine wasn’t about motivation — it was about discipline,
          clarity and pacing.
          <br />
          <br />
          <ul className="flex flex-col gap-4">
            <li>
              <strong>Go Slow:</strong> Speed kills understanding. Mastery comes
              with patience, not rush.
            </li>
            <li>
              <strong>Consistency Beats Intensity:</strong> 30 minutes daily
              8 hours once a month.
            </li>
            <li>
              <strong>Set Clear Goals:</strong> You can't reach a destination you
              never defined.
            </li>
            <li>
              <strong>Rest When Needed:</strong> Burnout doesn’t make you
              better. Recovery does.
            </li>
            <li>
              <strong>Make It Fun:</strong> Music, podcasts, a vibe — anything
              that keeps the mind in flow without distracting.
            </li>
            <li>
              <strong>Discipline Over Mood:</strong> Rest is good. Laziness
              isn’t. I imagine my future self thanking me.
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>

      {/* ITEM 4 — AI */}
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color="#23F392"
            _expanded={{ bg: "#23F392", color: "#171717" }}
            className="text-sm md:text-xl"
          >
            <Box
              className="font-bold text-sm md:text-xl"
              as="span"
              flex="1"
              textAlign="left"
            >
              How Much Should We Rely on AI?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          AI is powerful — but like any tool, it has limits. Here’s where it
          helps and where it hurts:
          <br />
          <br />

          <ul className="flex flex-col gap-4">
            <li>
              <strong>+ Instant Documentation:</strong> Stop digging around.
              Ask, get, apply.
            </li>
            <li>
              <strong>+ Writing Assistant:</strong> Grammar, clarity,
              consistency — fixed in seconds.
            </li>
            <li>
              <strong>+ Development Boost:</strong> Sometimes you just need a
              fast layout to unblock progress.
            </li>
            <li>
              <strong>+ Ideas on Demand:</strong> From UI concepts to food
              recipes — instant brainstorming partner.
            </li>
            <li>
              <strong>+ Productivity Multiplier:</strong> AI + your skillset =
              speed and precision.
            </li>
            <li>
              <strong>- Lazy Thinking:</strong> Rely too much, and you stop
              learning how to think.
            </li>
            <li>
              <strong>- Generic Outputs:</strong> AI doesn’t have your identity.
              Don’t lose your voice.
            </li>
            <li>
              <strong>- Communication Gaps:</strong> Automating everything kills
              real conversation.
            </li>
            <li>
              <strong>- Test Sabotage:</strong> No AI in technical challenges.
              If you depend on it, you're done.
            </li>
            <li>
              <strong>- No Sense of Achievement:</strong> If the AI builds
              everything, what did *you* actually grow?
            </li>
          </ul>

          <br />
          Use AI as a *tool*, not a *replacement*.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
