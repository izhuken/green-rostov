import { actionsApi } from "@/constants/api";
import { NewAuto } from "@/entities";
import { useStoreHook } from "@/hooks/use-store";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Center, Icon, Modal, useToast } from "react-native-ficus-ui";
import { FormedInput } from "../formed-input";

interface AddProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddProductModal: React.FC<AddProductModalProps> = ({
  isOpen,
  onClose
}) => {
  const t = useToast();
  const user = useStoreHook().user;
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<NewAuto>();
  const { mutate: calculate } = useMutation({
    mutationFn: async (data: NewAuto) => {
      return await axios.post(`${actionsApi}/user-movement/create`, {
        ...data,
        user_id: user.user?.id
      });
    },
    onError: () => {
      t.show({
        type: "error",
        text1: "не нашли автомобиль!"
      });
    },
    onSuccess: (data) => {
      console.log(data);

      t.show({
        type: "success",
        text1: `Ваш углеродный след: ${
          data.movement.co2_per_km * data.user_movement.km
        }`
      });
    }
  });

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <Modal isOpen={isOpen}>
      <Center h={"100%"} w="100%" p={20} minW={300} gap={20}>
        <FormedInput
          name="mark"
          placeholder="Марка"
          control={control}
          errors={errors}
        />
        <FormedInput
          name="model"
          placeholder="Модель"
          control={control}
          errors={errors}
        />
        <FormedInput
          name="distance_value"
          placeholder="Дистанция (км)"
          control={control}
          errors={errors}
        />
        <Button
          h={35}
          w={"100%"}
          bg={"#000"}
          onPress={() => {
            console.log("pressed");

            handleSubmit((data) => {
              console.log(data);
              calculate(data);
            });
          }}
        >
          Добавить
        </Button>
      </Center>

      <Button
        h={35}
        w={35}
        position="absolute"
        top={50}
        right={15}
        borderRadius="full"
        colorScheme="gray"
        onPress={() => {
          onClose();
        }}
      >
        <Icon color="white" name="close" />
      </Button>
    </Modal>
  );
};
