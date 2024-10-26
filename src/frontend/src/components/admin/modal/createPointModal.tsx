import {
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
} from '@chakra-ui/react';
import React from 'react';

interface ModalPointProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalPoint: React.FC<ModalPointProps> = ({ isOpen, onClose }) => {
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
          <ModalHeader textAlign='center'> Добавить точку</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize='12px'>Название</FormLabel>
              <Input ref={initialRef} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize='12px'>Адрес</FormLabel>
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
              Утвердить
            </Button>
            <Button
              width='400px'
              backgroundColor='black'
              color='white'
              _hover='color: black'
              mr={3}
              variant='outline'
            >
              Отказать
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
