import { Icon } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";

const Page = () => {
  return (
    <div
      className={`flex items-center pt-20 min-h-screen flex-col mb-10 p-2 w-11/12 md:w-3/4 text-white`}
    >
      <div
        className="animate-fade-in-bottom mb-64 text-left xl:w-11/12 md:w-full sm:w-4/5 w-11/12"
      >
        <h1 className="text-center md:text-6xl text-2xl font-bold text-green-400 mb-4">
          Política de Privacidade para Portfólio Online
        </h1>

        <h2 className="text-gray-400 md:text-xl text-center text-base mb-4">
          Esta Política de Privacidade descreve como as informações pessoais são coletadas, usadas e protegidas quando você acessa e usa meu portfólio online.
        </h2>
        <br />
        <ol className="list-decimal pl-6">
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">
              Coleta de Informações:
            </strong>{" "}
            Ao acessar meu portfólio online, eu coleto apenas o seu endereço de e-mail quando você opta por entrar em contato através do formulário de contato disponível no site. Não coleto outras informações pessoais sem o seu consentimento explícito.
          </li>{" "}
          <br />
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">
              Uso das Informações:
            </strong>{" "}
            O único propósito de coletar seu endereço de e-mail é possibilitar a comunicação entre você e minha equipe em resposta às mensagens que você nos envia através do formulário de contato. Não compartilho, vendo ou transfiro suas informações pessoais para terceiros sem o seu consentimento, exceto conforme exigido por lei.
          </li>{" "}
          <br />
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">
              Proteção das Informações:
            </strong>{" "}
            Estou comprometido em proteger suas informações pessoais e utilizo medidas de segurança apropriadas para garantir que suas informações não sejam acessadas, divulgadas, alteradas ou destruídas sem autorização.
          </li>{" "}
          <br />
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">Consentimento:</strong> Ao enviar sua mensagem através do formulário de contato no meu portfólio online, você consente com a coleta e uso das suas informações pessoais conforme descrito nesta Política de Privacidade.
          </li>{" "}
          <br />
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">
              Retenção das Informações:
            </strong>{" "}
            Não retenho suas informações pessoais por mais tempo do que o necessário para cumprir os propósitos para os quais foram coletadas, a menos que seja exigido por lei.
          </li>{" "}
          <br />
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">
              Alterações na Política de Privacidade:
            </strong>{" "}
            Reservo-me o direito de atualizar esta Política de Privacidade periodicamente. Recomendo que você revise esta Política de Privacidade ocasionalmente para estar ciente de quaisquer alterações.
          </li>{" "}
          <br />
          <li className="md:text-2xl text-base text-white font-light mb-2">
            <strong className="text-green-400 font-bold">Contato:</strong> Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou o uso das suas informações pessoais, entre em contato conosco através do e-mail fornecido no meu portfólio online.
          </li>{" "}
          <br />
        </ol>

        <p className="text-center md:text-2xl text-base mt-4 text-green-400">
          Ao usar meu portfólio online, você concorda com os termos e condições desta Política de Privacidade. <br />{" "}
          <span className="ml-2 underline font-bold">
            <Link href="/" passHref>
              Voltar para a Página Inicial
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};
export default Page;
