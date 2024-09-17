"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { BiLogoGmail } from "react-icons/bi";
import { MdSend } from "react-icons/md";
import { TbSend } from "react-icons/tb";

interface CustomOptions {
  user_email?: string;
  user_name?: string;
  subject?: string;
  message?: string;
  publicKey?: string;
}

export const FormContact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      if (form.current) {
        const options: CustomOptions = {
          user_email: form.current.user_email.value,
          user_name: form.current.user_name.value,
          subject: form.current.subject.value,
          message: form.current.message.value,
          publicKey: "Eku1Fdhoqs81Po5C0",
        };

        await emailjs.sendForm(
          "service_glr8yco",
          "template_927y3w8",
          form.current,
          options
        );
        toast({
          title: "Email sent successfully",
          status: "success",
          duration: 3000,
          isClosable: false,
          position: "bottom-right",
          colorScheme: "black",
        });
        onClose();
      }
    } catch (error) {
      console.log("FAILED...", error);
      toast({
        title: "Failed to send email",
        description: "An error occurred while sending the email.",
        status: "error",
        duration: 3000,
        isClosable: false,
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        fontSize={{ base: "medium", md: "x-large", xl: "x-large" }}
        border={".5px solid rgb(74 222 128)"}
        _hover={{ bgColor: "rgb(74 222 128)" }}
          bgColor={"rgb(74 222 128)"}
          color={"black"}
        paddingInline={{ base: "23px" }}
        leftIcon={BiLogoGmail(Icon)}
        onClick={onOpen}
      >
        Manda um e-mail
      </Button>
      <Modal
        size={{ base: "sm", sm: "lg" }}
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay backdropBlur={"8px"} />
        <ModalContent
          background={"black"}
          border={".5px solid rgb(78 222 128)"}
          color={"rgb(78,222,128)"}
        >
          <ModalHeader>Fala Comigo!</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  _focus={{ borderColor: "rgb(78 222 128)" }}
                  borderColor={"rgb(78 222 128)"}
                  ref={initialRef}
                  placeholder="Digite seu nome"
                  name="user_name"
                  isRequired
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  _focus={{ borderColor: "rgb(78 222 128)" }}
                  borderColor={"rgb(78 222 128)"}
                  type="email"
                  placeholder="Digite seu email"
                  name="user_email"
                  isRequired
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Assunto</FormLabel>
                <Input
                  _focus={{ borderColor: "rgb(78 222 128)" }}
                  borderColor={"rgb(78 222 128)"}
                  placeholder="Digite o Assunto"
                  name="subject"
                  isRequired
                />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel>Mensagem</FormLabel>
                <Textarea
                  _focus={{ borderColor: "rgb(78 222 128)" }}
                  borderColor={"rgb(78,222,128)"}
                  placeholder="Digite sua mensagem"
                  name="message"
                  isRequired
                />
              </FormControl>
              <Button
                mt={4}
                backgroundColor={"rgb(78 222 128)"}
                className="text-black"
                rightIcon={TbSend(Icon)}
                type="submit"
                width="100%"
                isLoading={isSubmitting}
                loadingText="Enviando..."
                colorScheme="white"
                variant="outline"
              >
                Enviar
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
