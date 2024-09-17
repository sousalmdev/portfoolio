/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { PiFilmReelFill } from "react-icons/pi";
import {
  BiData,
  BiLogoAngular,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTypescript,
  BiSolidBrain,
} from "react-icons/bi";
import {
  SiCanva,
  SiFigma,
  SiInkscape,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiSequelize,
} from "react-icons/si";
import {
  TbBrain,
  TbHammer,
  TbLanguage,
  TbMoodHappy,
  TbMoodHappyFilled,
  TbPaintFilled,
} from "react-icons/tb";
import { Divider, Icon } from "@chakra-ui/react";
import { dm } from "../fonts/dm-sans";

export const Skills = () => {
  return (
    <>
      <div
        id="skills"
        className="animate-fade-in-bottom py-20 text-left xl:w-11/12 md:w-full sm:w-4/5 w-11/12"
      >
        <h2 className={`text-green-400 tracking-wider font-bold`}>
          UM DESENVOLVEDOR É TÃO BOM QUANTO SEUS
        </h2>

        <br />
        <h1 className={`text-4xl md:text-6xl ${dm.className}`}>Habilidades.</h1>

        <br />
        <p className="w-full md:w-2/4 text-xl h-auto md:text-3xl font-light">
          Habilidades técnicas ou interpessoais, habilidades são sempre
          habilidades. Abaixo estão uma combinação das minhas{" "}
          <span className="font-black text-green-400">
            habilidades interpessoais e técnicas.
          </span>
        </p>
        <br />
        <div className="py-10 flex items-center gap-1 justify-center">
          <Divider width={200} />
          <h2
            className={`text-green-400 text-center py-2 text-base md:text-4xl font-semibold `}
          >
            HABILIDADES <br />
            PROFISSIONAIS
          </h2>
          <Divider width={200} />
        </div>
        <ul className="w-full list-none gap-5 flex flex-col">
          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold text-yellow-500 md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiLogoJavascript(Icon)}{" "}
              <h2 className="text-white">Javascript</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Minha primeira linguagem! Foi útil para estudar algoritmos na
              época, e agora eu a uso muito com Programação Front End.
            </p>
          </li>

          <li
            className={`gap-2 items-end text-right justify-end flex flex-col`}
          >
            {" "}
            <span
              className={`font-bold  text-blue-500 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">ReactJS</h2>
              {BiLogoReact(Icon)}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Minha biblioteca JS mais usada! Pessoalmente, gosto do ReactJS
              pela sua curva de aprendizado, que é simples no início, mas
              escalável também se utilizando de Frameworks ReactJS como o
              NextJS.
            </p>
          </li>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-red-600 md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiLogoAngular(Icon)} <h2 className="text-white">Angular</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Meu primeiro framework. E eu aprendi este da maneira tradicional,
              autodidata, sob um pouco de pressão para uma avaliação de
              candidatura a emprego, e correu muito bem e eu me apaixonei por
              ele ao longo do caminho.
            </p>
          </li>

          <li className={`gap-2 items-end text-right flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-white md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">NextJS</h2> {SiNextdotjs(Icon)}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              O Framework React/Vercel surgiu para adicionar mais força e
              versatilidade ao ReactJS, e inclui em seu arsenal de serviços, um
              recurso de renderização no lado do servidor, que, se bem
              utilizado, pode fornecer uma aplicação 'Full-Stack', com rapidez e
              eficácia.
            </p>
          </li>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-blue-500 md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiLogoTypescript(Icon)}{" "}
              <h2 className="text-white">Typescript</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              O 'Grande Irmão' do Javascript, focado em Programação Orientada a
              Objetos. Sinto-me muito seguro usando TypeScript devido ao uso de
              tipagem estática.
            </p>
          </li>

          <li className={`items-end text-right gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-blue-300 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">Bancos de Dados</h2> {BiData(Icon)}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Todo programador deve lidar com pelo menos um servidor de banco de
              dados para criar uma aplicação de serviço completo, então estou
              trabalhando para adquirir experiência com bancos de dados SQL
              (mySQL) e noSQL (MongoDB).
            </p>
          </li>

          <div className="py-10 flex items-center gap-1 justify-center">
            <Divider width={200} />
            <h2
              className={`text-green-400 text-center py-2 text-xl md:text-4xl font-semibold`}
            >
              FERRAMENTAS <br />
              DE DESIGN
            </h2>
            <Divider width={200} />
          </div>
          <ul className="w-full list-none gap-5 flex flex-col">
            <li className="gap-2 flex flex-col">
              <span
                className={`font-bold text-white md:text-3xl text-lg items-center flex gap-2`}
              >
                <SiInkscape /> InkScape
              </span>
              <p className="text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
                Sou proficiente no uso do InkScape para criar e editar gráficos
                vetoriais, o que me permite produzir designs escaláveis e de
                alta qualidade.
              </p>
            </li>
            <li className="gap-2 flex items-end  flex-col">
              <span
                className={`font-bold text-right text-orange-400 md:text-3xl text-lg items-center flex gap-2`}
              >
                Figma <SiFigma />
              </span>
              <p className="text-white text-right text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
                Uso o Figma para criar protótipos interativos, diversos
                materiais visuais e colaborar com equipes de design e
                desenvolvimento, garantindo uma abordagem integrada no design de
                interfaces.
              </p>
            </li>
            <li className="gap-2 flex flex-col">
              <span
                className={`w-fit bg-gradient-to-r from-cyan-400 from-20% to-purple-500 to-70% bg-clip-text text-transparent font-black text-white flex  md:text-3xl text-lg items-center flex gap-2`}
              >
                <SiCanva className="text-cyan-400" />
                Canva
              </span>
              <p className="text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
                O Canva é minha ferramenta para criar materiais visuais rápidos
                e impactantes, ideal para projetos de design gráfico e
                marketing, uso também para vídeos que necessitem de mockups.
              </p>
            </li>
            <li className="gap-2 flex items-end  flex-col">
              <span
                className={`font-bold text-right bg-gradient-to-l from-green-400 to-cyan-400 bg-clip-text  text-transparent md:text-3xl text-lg items-center flex gap-2`}
              >
                Capcut <PiFilmReelFill className="text-green-400" />
              </span>
              <p className="text-white text-right text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
                Ele é meu recurso para vídeos promocionais, que mostram os
                resultados dos meus trabalhos, é a demonstração do produto
                final, e o material de divulgação.
              </p>
            </li>
          </ul>

          <div className="py-10 flex items-center gap-1 justify-center">
            <Divider width={200} />
            <h2
              className={`text-green-400 text-center py-2 text-xl md:text-4xl font-semibold `}
            >
              HABILIDADES <br />
              PESSOAIS
            </h2>
            <Divider width={200} />
          </div>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-white md:text-3xl text-lg items-center flex gap-2`}
            >
              {BiSolidBrain(Icon)}{" "}
              <h2 className="text-white">Comportamento Racional</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Você conhece aquele tipo de pessoa que pensa nas coisas vezes e
              vezes antes de tomar uma decisão? Sou eu! Sou extremamente
              minucioso quando se trata de fornecer soluções para atender às
              necessidades dos meus clientes.
            </p>
          </li>

          <li className={`items-end text-right gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-cyan-400 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">Mente Criativa</h2>{" "}
              {TbPaintFilled(Icon)}{" "}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              E é por isso que sou um Desenvolvedor Front-End / UI. Adoro arte e
              tudo o que ela traz para a cultura, então posso canalizar a arte
              para minhas aplicações, trazendo sonhos e idealizações à vida
              através dos meus códigos.
            </p>
          </li>

          <li className={`gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-red-600 md:text-3xl text-lg items-center flex gap-2`}
            >
              {TbLanguage(Icon)} <h2 className="text-white">Comunicação</h2>
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Mesmo quando criança, eu estava interessado em aprender novos
              idiomas, eu conhecia minhas primeiras palavras em inglês e
              espanhol quando tinha apenas 6 anos (Minha primeira língua é o
              português, a propósito). Ao longo da minha carreira, consegui
              expandir minhas habilidades multilíngues através de extensa
              comunicação internacional.
            </p>
          </li>

          <li className={`items-end text-right gap-2 flex flex-col`}>
            {" "}
            <span
              className={`font-bold  text-yellow-400 md:text-3xl text-lg items-center flex gap-2`}
            >
              <h2 className="text-white">Sempre de Bom Humor</h2>{" "}
              {TbMoodHappy(Icon)}{" "}
            </span>
            <p className=" text-white text-base md:text-2xl w-full md:w-4/5 xl:w-2/5">
              Clientes, toneladas de reuniões diárias e alinhamentos, obrigações
              pessoais, é realmente difícil manter um sorriso. E é por isso que
              você deve me contratar. Meu principal objetivo é trazer alegria
              com cada coisa que eu faço, para iluminar o dia de alguém. E
              geralmente funciona.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};
