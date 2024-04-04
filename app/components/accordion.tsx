/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { jost } from "@/app/layout";
export const Accordionn = () => {
  return (
    <Accordion
      className="py-4 flex flex-col text-lg justify-center"
      allowToggle
    >
      <AccordionItem className="w-11/12 xl:w-2/5">
        <h2>
          <AccordionButton color={"rgb(74 222 128)"}
        
            _expanded={{ bg: "rgb(74 222 128)", color: "black" }}
        className="text-sm md:text-xl">
            <Box
              className={`font-bold ${jost.className} text-sm md:text-xl`}
              as="span"
              flex="1"
              textAlign="left"
            >
              My Beginning as a Developer
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          A very interesting topic to discuss is: How does a developer come into
          being?
          <br />
          As a developer, I can share a bit about how I "came into being" in
          programming.
          <br />
          <br />
          <ul className="list-none w-full p-0">
            <li>
              <strong>Learning the Basics:</strong> Like any proper beginning, I
              realized that the first step was to learn the logic. And after
              having this foundation, I chose my programming path, Front End.
              And I believe it can work out this way.
            </li>
            <br />
            <li>
              <strong>Creating Original Projects:</strong> It's essential not
              just to initially "copy" a project that comes your way, but to put
              your own spin on it, with your own styles. And later on, use the
              concepts and create your own project with your touch, no matter if
              it's just a login screen, just do it.
            </li>
            <br />
            <li>
              <strong>Seeking Help and Collaboration:</strong> And this doesn't
              make me any less of a developer. On the contrary, it will be
              highly utilized in professional life, so learn to ask for help and
              gain experience in the area you asked for.
            </li>

            <br />
            <li>
              <strong>Embracing Feedback:</strong> I have peers, seniors, tech
              leads around me who always point out something I can modify to
              make it more user-friendly. Learn to listen to feedback, no matter
              how harsh it may be, it will shorten paths in your career.
            </li>
            <br />
            <li>
              <strong>Sharing Knowledge and Helping Others:</strong> Many say
              that the best way to learn is by teaching. And in some things I am
              knowledgeable about, I give tips, and it feels fulfilling when it
              works. It's great to see my colleagues advancing together.
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem className="w-11/12 xl:w-2/5 md:w-2/5">
        <h2>
          <AccordionButton color={"rgb(74 222 128)"}
            _expanded={{ bg: "rgb(74 222 128)", color: "black" }}
        className="text-sm md:text-xl">
            <Box
              className={`font-bold ${jost.className} text-sm md:text-xl`}
              as="span"
              flex="1"
              textAlign="left"
            >
 Excited and Efficient or Experienced and Bored?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          There's been a joke circulating in the dev community about the analogy
          of the duck: the developer who swims, runs, flies, but doesn't do
          anything right. But to be honest... I'd like to be a duck, but a
          dedicated one.
 <br /><br />
          What's the point of becoming the old tiger, knowing the stack inside
          out, and getting comfortable with it? Repeating what I know and not
          delivering anything?

          Not even bothering to update myself because I enjoy the comfort of
          what I've already learned... I don't want that.
          <br />
          <br />I love the adrenaline of being thrown a brick and returning a
          house.
          Project in React? Let's go.
          In Angular? (I love it passionately) Let's go.
          In Vue? Never seen it. Let's go.
          Svelte? Do they still use that? Then let's go.
          Playing with backend? I might fry some neurons for a good few hours,
          but let's go.
          <br />
          <br />
          For me, the more tools I have the ability to use, the better "builder"
          I can be.
          What's the use of being a specialist in screwdrivers in a project that
          uses hammers and nails?
          Combine your curiosity with the desire to add value to your career,
          and have various situational tools.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-11/12 xl:w-2/5 md:w-2/5">
  <h2>
    <AccordionButton color={"rgb(74 222 128)"} className="text-sm md:text-xl" _expanded={{ bg: "rgb(74 222 128)", color: "black" }}>
      <Box className={`font-bold ${jost.className} text-sm md:text-xl`} as="span" flex="1" textAlign="left">
        How to maintain a studying routine:
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel>
  Hey everyone, today I'd like to share a personal experience about my study routine and how I developed it.

I wanted to break it down into a few topics on how to develop your own routine:
<br />
<br />
    <ul>
      <li><strong>Don't Rush:</strong>
        <ul>
          <li>Yes, the market is competitive.</li>
          <li>But it's competitive largely because of those who fell into the fallacy of being able to land a job with a 30-hour bootcamp. Take your time.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>Be Consistent:</strong>
        <ul>
          <li>1 hour or 8 hours in a day? That's the question.</li>
          <li>It could even be 30 minutes, studying every day that you can (and practicing whenever possible), you learn and avoid burnout.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>Set Goals:</strong>
        <ul>
          <li>How cliché, right?</li>
          <li>But have you ever left home without knowing where you were going, and if you did, surely you felt fear and the desire to turn back at some point.</li>
          <li>The best thing to do is to calculate your route, and if something changes your plans, recalculate, but don't stop.</li>
        </ul>
      </li>
      <br />
      <br />      <li><strong>Rest:</strong>
        <ul>
          <li>"Work while they sleep!"</li>
          <li>And end up burnt out.</li>
          <li>Even with a few years of experience, I understand that driving myself crazy studying every day won't get me anywhere.</li>
          <li>Not to mention it can lead to various mental (and even physical) health problems. So rest, it's very beneficial.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>Associate Study with Something You Enjoy:</strong>
        <ul>
          <li>It doesn't hurt (unless it distracts you) to listen to your playlist, listen to a podcast of people talking nonsense (I love fifth grade podcasts) while you practice.</li>
          <li>What's harmful is making it a occasional distraction in your studies, there's time for everything and you know it.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>Be Disciplined:</strong>
        <ul>
          <li>Rest is essential. Laziness is not.</li>
          <li>There are various ways to stimulate yourself to study and not get discouraged. Mine is to drink coffee and imagine myself in about 5 years reaping the fruits of what I'm planting today.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>Don't Go Alone:</strong>
        <ul>
          <li>Yes, you evolve alone.</li>
          <li>But the process when you have someone who knows the ropes by your side is much smoother.</li>
          <li>Today I have some friends and mentors who constantly tell me where I'm wrong (and that's exactly what I want to hear), and I can improve, and that's what happens. I improve.</li>
        </ul>
      </li>
    </ul>
    <br />
Here are some general tips, and speaking of myself, I have been applying them for months and there are results, so it's not fallacy, it's not a course seller, it's me.

A developer like you. A student like you.
  </AccordionPanel>
</AccordionItem>
<AccordionItem className="w-11/12 xl:w-2/5 md:w-2/5">
  <h2>
    <AccordionButton color={"rgb(74 222 128)"} className="text-sm md:text-xl" _expanded={{ bg: "rgb(74 222 128)", color: "black" }}>
      <Box className={`font-bold ${jost.className} text-sm md:text-xl`} as="span" flex="1" textAlign="left">
        To what extent is Artificial Intelligence an ally? 
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel>
    
Since its emergence, there have been numerous discussions surrounding the use or non-use of the famous (and even feared) Artificial Intelligence.

 I would like to highlight 5 Positive Points and 5 Negative Points to indicate the limit of facilitation that the resource can provide us, without taking away our identity.
<br /><br />
    <ul>
      <li><strong>✅ Access to documentation:</strong><br/>
        <ul>
          <li>For those who don't want to spend time searching for documentation on a particular technology or service instructions, installations, and the like:</li>
          <li>Ask the artificial intelligence objectively for the documentation you want to use, and it will provide it.</li>
        </ul>
        <br /><br />
      </li>
      <li><strong>✅ Spelling Corrections:</strong><br/>
        <ul>
          <li>For those who enjoy writing but have some difficulty with spelling, agreement, and grammar:</li>
          <li>Put your text at the disposal of AI, and it will point out possible errors and suggest changes.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>✅ Service Advancement (for devs):</strong><br/>
        <ul>
          <li>You know that project that you can put together entirely but it's a very busy day or you're feeling lazy?</li>
          <li>Make a precise prompt to get a code snippet for markup and styling, and adapt it to your needs.</li>
          <li>At least try to work on the site's dynamics.</li>
        </ul>
      </li>
      <br />
      <br />
      <li><strong>✅ Personalized Services:</strong><br/>
        <ul>
          <li>From professional matters to the afternoon coffee you invited your friends for, AI can give some ideas:</li>
          <li>Build images, learn concepts, look at your sandwich recipe, all very quickly, you just need to know how to query.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>✅ Be more productive:</strong><br/>
        <ul>
          <li>There are tasks that used to take you days to gather all the resources you needed within a routine action or a task from your job.</li>
          <li>Now, you can do it within hours, combining your agile thinking and experience with AI's multi-resource thinking.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>⚠️ Complacency:</strong><br/>
        <ul>
          <li>Especially for beginners, abusing the kindness of AI can generate a lazy developer.</li>
          <li>Without authenticity, without logical thinking, and unable to solve problems because everything is on the shoulders of AI.</li>
          <li>Stand on your own feet.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>⚠️ Saturation:</strong><br/>
        <ul>
          <li>Who has never scrolled through LinkedIn and noticed that out of 10 posts, 7 start the same and use the same adjectives and structures?</li>
          <li>AI supports human intelligence, but it doesn't possess the authenticity you do.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>⚠️ Risks to communication:</strong><br/>
        <ul>
          <li>Automation is wonderful, but replacing organic and valuable dialogue, as it is between humans, borders on the ridiculous.</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>⚠️ Sabotage:</strong><br/>
        <ul>
          <li>Imagine yourself in a technical test where you need to solve a simple algorithm, but without consulting documentation and certainly not AIs. What then?</li>
        </ul>
      </li>
      <br /><br />
      <li><strong>⚠️ Depreciation:</strong><br/>
        <ul>
          <li>This one goes out to juniors:</li>
          <li>What sense of achievement will you feel by building a system entirely constructed by AIs? None.</li>
          <li>Do it yourself, correct it with research, and listen to HUMAN feedback, and you can indeed get there.</li>
        </ul>
      </li>
    </ul>
    <br />
    <br />
    Use AI as a means, not as the end.
  </AccordionPanel>
</AccordionItem>

    </Accordion>
  );
};
