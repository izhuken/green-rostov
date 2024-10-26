import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

interface ModalEventProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalEvent: React.FC<ModalEventProps> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader textAlign='center'>Создание Ивента</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize='12px'>Название</FormLabel>
              <Input ref={initialRef} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize='12px'>Описание</FormLabel>
              <Textarea />
            </FormControl>

            <FormLabel mt={4} variant={'events'} htmlFor='newUser'>
              <Text fontSize='12px' mb='4px'>
                Загрузить фото
              </Text>
              <Box
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='center'
                border='0.5px solid black '
                width={400}
                height={200}
                borderRadius={8}
              >
                <Box
                  display='flex'
                  flexDirection='column'
                  alignItems='center'
                  justifyContent='center'
                >
                  <img src='/file-input-plus.svg' width={100} />
                  <Text fontSize='12px'>Добавить фото</Text>
                </Box>
              </Box>
            </FormLabel>
            <Input display={'none'} type='file' id='newUser' />

            <FormControl mt={4}>
              <FormLabel fontSize='12px'>Рейтинг за участие</FormLabel>
              <Input ref={finalRef} />
            </FormControl>
          </ModalBody>
          <ModalFooter
            width='100%'
            display='flex'
            flexDirection='column'
            alignItems='baseline'
            justifyContent='center'
          >
            <Button
              width='400px'
              backgroundColor='black'
              color='white'
              _hover='color: black'
              mr={3}
              variant='outline'
            >
              Создать
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
