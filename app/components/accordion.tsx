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

export const Accordionn = () => {
  return (
    <Accordion
      className="py-4 flex flex-col text-lg justify-center"
      allowToggle
    >
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color={"rgb(74 222 128)"}
            _expanded={{ bg: "rgb(74 222 128)", color: "black" }}
            className="text-sm md:text-xl"
          >
            <Box
              className={`font-bold  text-sm md:text-xl`}
              as="span"
              flex="1"
              textAlign="left"
            >
              Meu Início como Desenvolvedor
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Um tópico muito interessante para discutir é: Como um desenvolvedor
          surge?
          <br />
          Como desenvolvedor, posso compartilhar um pouco sobre como eu "surgi"
          na programação.
          <br />
          <br />
          <ul className="list-none w-full p-0">
            <li>
              <strong>Aprendendo o Básico:</strong> Como todo bom começo,
              percebi que o primeiro passo era aprender a lógica. E depois de
              ter essa base, escolhi meu caminho de programação, Front End. E
              acredito que pode funcionar assim.
            </li>
            <br />
            <li>
              <strong>Criando Projetos Originais:</strong> É essencial não apenas
              "copiar" um projeto que aparecer, mas colocar seu toque pessoal,
              com seus próprios estilos. E mais tarde, usar os conceitos e criar
              seu próprio projeto com seu toque, não importa se é apenas uma
              tela de login, apenas faça.
            </li>
            <br />
            <li>
              <strong>Buscando Ajuda e Colaboração:</strong> E isso não me torna
              menos desenvolvedor. Pelo contrário, isso será muito útil na vida
              profissional, então aprenda a pedir ajuda e ganhe experiência na
              área em que pediu.
            </li>

            <br />
            <li>
              <strong>Aceitando Feedback:</strong> Tenho colegas, seniors, tech
              leads ao meu redor que sempre apontam algo que posso modificar
              para tornar o código mais amigável ao usuário. Aprenda a ouvir o
              feedback, por mais duro que seja, ele encurtará caminhos na sua
              carreira.
            </li>
            <br />
            <li>
              <strong>Compartilhando Conhecimento e Ajudando os Outros:</strong>{" "}
              Muitos dizem que a melhor maneira de aprender é ensinando. E em
              algumas coisas que domino, dou dicas, e é gratificante quando
              funciona. É ótimo ver meus colegas avançando juntos.
            </li>
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color={"rgb(74 222 128)"}
            _expanded={{ bg: "rgb(74 222 128)", color: "black" }}
            className="text-sm md:text-xl"
          >
            <Box
              className={`font-bold  text-sm md:text-xl`}
              as="span"
              flex="1"
              textAlign="left"
            >
              Animado e Eficiente ou Experiente e Entediado?
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Há uma piada circulando na comunidade dev sobre a analogia do pato: o
          desenvolvedor que nada, corre, voa, mas não faz nada direito. Mas para
          ser sincero... Eu gostaria de ser um pato, mas um dedicado.
          <br />
          <br />
          Qual é o sentido de se tornar o velho tigre, conhecendo a stack de
          cabo a rabo, e ficando confortável com ela? Repetindo o que já sei e
          não entregando nada? Nem mesmo me atualizando porque gosto do conforto
          do que já aprendi... Eu não quero isso.
          <br />
          <br />Eu adoro a adrenalina de receber um tijolo e devolver uma casa.
          Projeto em React? Vamos lá. Em Angular? (eu amo apaixonadamente)
          Vamos lá. Em Vue? Nunca vi. Vamos lá. Svelte? Ainda usam isso? Então
          vamos lá. Mexendo com backend? Vou fritar alguns neurônios por boas
          horas, mas vamos lá.
          <br />
          <br />
          Para mim, quanto mais ferramentas eu puder usar, melhor "construtor"
          eu posso ser. De que adianta ser especialista em chaves de fenda em um
          projeto que usa martelos e pregos? Combine sua curiosidade com o
          desejo de agregar valor à sua carreira e tenha várias ferramentas
          situacionais.
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
        <h2>
          <AccordionButton
            color={"rgb(74 222 128)"}
            className="text-sm md:text-xl"
            _expanded={{ bg: "rgb(74 222 128)", color: "black" }}
          >
            <Box
              className={`font-bold  text-sm md:text-xl`}
              as="span"
              flex="1"
              textAlign="left"
            >
              Como Manter uma Rotina de Estudos:
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          E aí pessoal, hoje eu gostaria de compartilhar uma experiência pessoal
          sobre minha rotina de estudos e como a desenvolvi. Queria dividi-la em
          alguns tópicos sobre como desenvolver sua própria rotina:
          <br />
          <br />
          <ul>
            <li>
              <strong>Não Tenha Pressa:</strong>
              <ul>
                <li>Sim, o mercado é competitivo.</li>
                <li>
                  Mas é competitivo principalmente por causa daqueles que caíram
                  na falácia de conseguir um emprego com um bootcamp de 30
                  horas. Leve seu tempo.
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Seja Consistente:</strong>
              <ul>
                <li>1 hora ou 8 horas em um dia? Essa é a questão.</li>
                <li>
                  Podem ser até 30 minutos, estudando todos os dias que puder (e
                  praticando sempre que possível), você aprende e evita o
                  esgotamento.
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Defina Metas:</strong>
              <ul>
                <li>Como é clichê, certo?</li>
                <li>
                  Mas você já saiu de casa sem saber para onde estava indo? Se
                  sim, certamente sentiu medo e a vontade de voltar em algum
                  momento.
                </li>
                <li>
                  O melhor a fazer é calcular sua rota e, se algo mudar seus
                  planos, recalcular, mas não parar.
                </li>
              </ul>
            </li>
            <br />
            <br />{" "}
            <li>
              <strong>Descanse:</strong>
              <ul>
                <li>"Trabalhe enquanto eles dormem!"</li>
                <li>E acabe esgotado.</li>
                <li>
                  Mesmo com alguns anos de experiência, entendo que me forçar a
                  estudar todos os dias não vai me levar a lugar nenhum.
                </li>
                <li>
                  Sem mencionar que pode levar a vários problemas de saúde
                  mental (e até física). Então descanse, é muito benéfico.
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Associe o Estudo a Algo que Você Gosta:</strong>
              <ul>
                <li>
                  Não faz mal (a menos que distraia você) ouvir sua playlist,
                  ouvir um podcast de pessoas falando besteira (adoro podcasts
                  de quinta série) enquanto pratica.
                </li>
                <li>
                  O que é prejudicial é fazer disso uma distração ocasional em
                  seus estudos, há tempo para tudo e você sabe disso.
                </li>
              </ul>
            </li>
            <br />
            <br />
            <li>
              <strong>Seja Disciplinado:</strong>
              <ul>
                <li>Descanso é essencial. Preguiça, não.</li>
                <li>
                  Existem várias maneiras de se estimular a estudar e não se
                  desanimar. A minha é tomar café e me imaginar daqui a uns 5
                  anos colhendo os frutos do que estou plantando hoje.
                </li>
              </ul>
            </li>
            <br />
            <br />
          </ul>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem className="w-11/12 md:w-3/5 xl:w-2/5">
  <h2>
    <AccordionButton
      color={"rgb(74 222 128)"}
      className="text-sm md:text-xl"
      _expanded={{ bg: "rgb(74 222 128)", color: "black" }}
    >
      <Box
        className={`font-bold  text-sm md:text-xl`}
        as="span"
        flex="1"
        textAlign="left"
      >
        Até que ponto a Inteligência Artificial é uma aliada?
      </Box>
      <AccordionIcon />
    </AccordionButton>
  </h2>
  <AccordionPanel>
    Desde o seu surgimento, têm havido inúmeras discussões em torno do uso ou não uso da famosa (e até temida) Inteligência Artificial. Gostaria de destacar 5 pontos positivos e 5 pontos negativos para indicar o limite de facilitação que o recurso pode nos proporcionar, sem tirar nossa identidade.
    <br />
    <br />
    <ul>
      <li>
        <strong>✅ Acesso à documentação:</strong>
        <br />
        <ul>
          <li>
            Para quem não quer perder tempo procurando documentação sobre uma determinada tecnologia ou instruções de serviço, instalações e afins:
          </li>
          <li>
            Peça objetivamente à inteligência artificial pela documentação que deseja usar, e ela fornecerá.
          </li>
        </ul>
        <br />
        <br />
      </li>
      <li>
        <strong>✅ Correções ortográficas:</strong>
        <br />
        <ul>
          <li>
            Para quem gosta de escrever, mas tem alguma dificuldade com ortografia, concordância e gramática:
          </li>
          <li>
            Coloque seu texto à disposição da IA, e ela apontará possíveis erros e sugerirá mudanças.
          </li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>✅ Avanço de serviço (para devs):</strong>
        <br />
        <ul>
          <li>
            Sabe aquele projeto que você consegue montar inteiro, mas é um dia muito corrido ou você está com preguiça?
          </li>
          <li>
            Faça um prompt preciso para obter um trecho de código para a marcação e estilização e adapte-o às suas necessidades.
          </li>
          <li>Pelo menos tente trabalhar na dinâmica do site.</li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>✅ Serviços personalizados:</strong>
        <br />
        <ul>
          <li>
            Desde questões profissionais até o café da tarde que você convidou seus amigos, a IA pode dar algumas ideias:
          </li>
          <li>
            Criar imagens, aprender conceitos, verificar sua receita de sanduíche, tudo muito rápido, basta saber como consultá-la.
          </li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>✅ Seja mais produtivo:</strong>
        <br />
        <ul>
          <li>
            Existem tarefas que antes levavam dias para reunir todos os recursos que você precisava dentro de uma ação rotineira ou de uma tarefa no trabalho.
          </li>
          <li>
            Agora, você pode fazer em poucas horas, combinando seu pensamento ágil e sua experiência com o pensamento multirrecursos da IA.
          </li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>⚠️ Complacência:</strong>
        <br />
        <ul>
          <li>
            Especialmente para iniciantes, abusar da gentileza da IA pode gerar um desenvolvedor preguiçoso.
          </li>
          <li>
            Sem autenticidade, sem pensamento lógico e incapaz de resolver problemas, pois tudo está nos ombros da IA.
          </li>
          <li>Fique firme por conta própria.</li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>⚠️ Saturação:</strong>
        <br />
        <ul>
          <li>
            Quem nunca rolou o feed do LinkedIn e percebeu que, de 10 posts, 7 começam da mesma forma e usam os mesmos adjetivos e estruturas?
          </li>
          <li>
            A IA apoia a inteligência humana, mas não possui a autenticidade que você tem.
          </li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>⚠️ Riscos para a comunicação:</strong>
        <br />
        <ul>
          <li>
            A automação é maravilhosa, mas substituir o diálogo orgânico e valioso, como é entre humanos, beira o ridículo.
          </li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>⚠️ Sabotagem:</strong>
        <br />
        <ul>
          <li>
            Imagine-se em um teste técnico onde você precisa resolver um algoritmo simples, mas sem consultar documentação e, certamente, sem IA. E aí?
          </li>
        </ul>
      </li>
      <br />
      <br />
      <li>
        <strong>⚠️ Desvalorização:</strong>
        <br />
        <ul>
          <li>Este é para os juniores:</li>
          <li>
            Que sensação de conquista você terá ao construir um sistema inteiramente feito por IAs? Nenhuma.
          </li>
          <li>
            Faça você mesmo, corrija com pesquisa e ouça o feedback HUMANO, e aí sim você pode chegar lá.
          </li>
        </ul>
      </li>
    </ul>
    <br />
    <br />
    Use a IA como meio, não como fim.
  </AccordionPanel>
</AccordionItem>

    </Accordion>
  );
};
