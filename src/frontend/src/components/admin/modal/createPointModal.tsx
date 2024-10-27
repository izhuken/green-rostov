import { DefaultButton, DefaultInput } from '@/assets';
import { pointApi } from '@/assets/config/api';
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

interface ModalPointProps {
  isOpen: boolean;
  onClose: () => void;
  latLon: [number, number];
}

interface NewPointPayload {
  title: string;
  address: string;
}

export const ModalPoint: React.FC<ModalPointProps> = ({
  isOpen,
  onClose,
  latLon,
}) => {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const methods = useForm<NewPointPayload>();
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (data: NewPointPayload) => {
      return await axios.post(`${pointApi}/create`, {
        ...data,
        latitude: String(latLon[0]),
        longitude: String(latLon[1]),
        is_hidden: false,
      });
    },
    onSuccess: () => {
      toast.success('Успешно!');
      queryClient.invalidateQueries({
        queryKey: ['point-list'],
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
          <ModalHeader textAlign='center'> Добавить точку</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormBaseLayout
              methods={methods}
              onSub={(data: NewPointPayload) => {
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
                name='address'
                placeholder='Адрес'
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
