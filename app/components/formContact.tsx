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
  ModalHeader,
  useToast,
  Icon,
} from "@chakra-ui/react";
import { BiLogoGmail } from "react-icons/bi";
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
          title: "Email sent successfully!",
          status: "success",
          duration: 3000,
          position: "bottom-right",
        });

        onClose();
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        status: "error",
        duration: 3000,
        position: "bottom-right",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const initialRef = React.useRef(null);

  return (
    <>
      <Button
        fontSize={{ base: "medium", md: "xl" }}
        border=".5px solid rgb(74 222 128)"
        borderRadius={'50px'}
        bgColor="rgb(74 222 128)"
        color="black"
        _hover={{ bgColor: "white", color: "black" }}
        paddingInline={{ base: "26px" }}
        leftIcon={<BiLogoGmail size={16} />}
        onClick={onOpen}
      >
        Send me an Email
      </Button>

      <Modal
        size={{ base: "sm", sm: "lg" }}
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay backdropBlur="8px" />

        <ModalContent
          background="black"
          border=".5px solid rgb(74 222 128)"
          color="rgb(74 222 128)"
        >
          <ModalHeader className="font-semibold tracking-wide">
            Talk to Me
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody pb={6}>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Your name"
                  name="user_name"
                  isRequired
                  borderColor="rgb(74 222 128)"
                  _focus={{ borderColor: "rgb(74 222 128)" }}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  name="user_email"
                  isRequired
                  borderColor="rgb(74 222 128)"
                  _focus={{ borderColor: "rgb(74 222 128)" }}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Subject</FormLabel>
                <Input
                  placeholder="Project, question, etc."
                  name="subject"
                  isRequired
                  borderColor="rgb(74 222 128)"
                  _focus={{ borderColor: "rgb(74 222 128)" }}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Message</FormLabel>
                <Textarea
                  placeholder="Write your message here..."
                  name="message"
                  isRequired
                  borderColor="rgb(74 222 128)"
                  _focus={{ borderColor: "rgb(74 222 128)" }}
                />
              </FormControl>

              <Button
                mt={5}
                backgroundColor="rgb(74 222 128)"
                color="black"
                rightIcon={<TbSend size={20} />}
                type="submit"
                width="100%"
                isLoading={isSubmitting}
                loadingText="Sending..."
                rounded="md"
                _hover={{ bgColor: "white", color: "black" }}
              >
                Send Message
              </Button>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
