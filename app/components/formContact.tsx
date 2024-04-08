'use client'

import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormControl, FormLabel, Input, Textarea, Button, useDisclosure, ModalOverlay, ModalContent, ModalCloseButton, Modal, ModalBody, ModalFooter, ModalHeader, useToast, Icon } from '@chakra-ui/react';
import { BiLogoGmail } from 'react-icons/bi';
import { MdSend } from 'react-icons/md';
import { TbSend } from 'react-icons/tb';

// Estendendo o tipo Options para incluir a propriedade from_email
interface CustomOptions  {
  from_email?: string;
  from_name?:string;
  subject?:string;
  message?:string;
  publicKey?:string;
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
          from_email: form.current.user_email.value,
          from_name: form.current.user_name.value,
          subject: form.current.subject.value,
          message: form.current.message.value,
          publicKey: 'Eku1Fdhoqs81Po5C0',
        };

        await emailjs.sendForm('service_glr8yco', 'template_927y3w8', form.current, options);
        toast({
          title: 'Email sent successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        onClose();
      }
    } catch (error) {
      console.log('FAILED...', error);
      toast({
        title: 'Failed to send email',
        description: 'An error occurred while sending the email.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
    finally{
        setIsSubmitting(false)
    }
  };

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  return (
    <>
      <Button
        fontSize={{ base: 'medium', md: 'x-large', xl: 'x-large' }}
        border={'.5px solid rgb(74 222 128)'}
        bgColor={'black'}
        _hover={{ bgColor: 'black', color: 'rgb 74 222 128' }}
        color={'rgb(74 222 128)'}
        paddingInline={{ base: '23px' }}
        leftIcon={BiLogoGmail(Icon)}
        onClick={onOpen}
      >
        Send me an e-mail
      </Button>
      <Modal
  size={{base:'sm',sm:'lg'}}
  initialFocusRef={initialRef}
  finalFocusRef={finalRef}
  isOpen={isOpen}
  onClose={onClose}
  isCentered
>
  <ModalOverlay backdropBlur={'8px'} />
  <ModalContent
  
    background={'black'}
    border={'.5px solid rgb(78 222 128)'}
    color={'rgb(78,222,128)'}
  >
    <ModalHeader>Contact Me</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
      <form ref={form} onSubmit={sendEmail}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            _focus={{ borderColor: 'rgb(78 222 128)' }}
            borderColor={'rgb(78 222 128)'}
            ref={initialRef}
            placeholder="Enter your name"
            name="user_name"
            isRequired
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            _focus={{ borderColor: 'rgb(78 222 128)' }}
            borderColor={'rgb(78 222 128)'}
            type="email"
            placeholder="Enter your email"
            name="user_email"
            isRequired
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Subject</FormLabel>
          <Input
            _focus={{ borderColor: 'rgb(78 222 128)' }}
            borderColor={'rgb(78 222 128)'}
            placeholder="Enter the subject"
            name="subject"
            isRequired
          />
        </FormControl>
        <FormControl mt={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            _focus={{ borderColor: 'rgb(78 222 128)' }}
            borderColor={'rgb(78,222,128)'}
            placeholder="Enter your message"
            name="message"
            isRequired
          />
        </FormControl>
        <Button
          mt={4}
          backgroundColor={'rgb(78 222 128)'}
          rightIcon={TbSend(Icon)}
          type="submit"
          width="100%"
          isLoading = {isSubmitting}
          loadingText='Submitting...'
    colorScheme='teal'
    variant='outline'
        >
          Send Mail
        </Button>
      </form>
    </ModalBody>
  </ModalContent>
</Modal>

    </>
  );
};
