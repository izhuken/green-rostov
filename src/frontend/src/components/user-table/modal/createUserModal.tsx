import { DefaultButton, DefaultInput } from '@/assets';
import { authApi } from '@/assets/config/api';
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

interface ModalUserProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NewModeratorPayload {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export const ModalUser: React.FC<ModalUserProps> = ({ isOpen, onClose }) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const methods = useForm<NewModeratorPayload>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (data: NewModeratorPayload) => {
      return await axios.post(`${authApi}/sign-up`, {
        ...data,
        rating: 0,
        is_admin: true,
      });
    },
    onSuccess: () => {
      toast.success('Успешно!');
      queryClient.invalidateQueries({
        queryKey: ['user-list'],
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
          <ModalHeader textAlign='center'>Добавить модератора</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormBaseLayout
              methods={methods}
              onSub={(data: NewModeratorPayload) => {
                mutate(data);
                onClose();
              }}
            >
              <DefaultInput
                name='username'
                placeholder='Имя'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
                }}
              />
              <DefaultInput
                name='email'
                placeholder='E-mail'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
                }}
              />
              <DefaultInput
                name='phone'
                placeholder='Телефон'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
                }}
              />
              <DefaultInput
                name='password'
                placeholder='Пароль (сохраните себе)'
                registerOptions={{
                  required: {
                    value: true,
                    message: 'Обязательное поле',
                  },
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
