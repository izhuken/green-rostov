import { CredentialStorage, DefaultButton, DefaultInput } from '@/assets';
import { authApi, eventApi } from '@/assets/config/api';
import { FormBaseLayout } from '@/components/form-base-layout';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface ModalEventProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NewEventPayload {
  title: string;
  description: string;
  rating: number;
}

export const ModalEvent: React.FC<ModalEventProps> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const methods = useForm();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (data: NewEventPayload) => {
      const user = await axios.get(`${authApi}/user`, {
        headers: {
          Authorization: `Bearer ${CredentialStorage.get('access')}`,
        },
      });
      return await axios.post(`${eventApi}/event/create`, {
        ...data,
        creator_id: user.data.id,
      });
    },
    onSuccess: () => {
      toast.success('Успешно!');
      queryClient.invalidateQueries({
        queryKey: ['event-list'],
      });
    },
  });

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
            <FormBaseLayout
              methods={methods}
              onSub={(data: NewEventPayload) => {
                mutate(data);
                onClose();
              }}
            >
              <DefaultInput
                name='title'
                placeholder='Название'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
                }}
              />
              <DefaultInput
                name='description'
                placeholder='Описание'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
                }}
              />
              <DefaultInput
                name='rating'
                type='number'
                placeholder='Рейтинг'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
                  valueAsNumber: true,
                }}
              />
              <DefaultButton type='submit'>Создать</DefaultButton>
            </FormBaseLayout>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
