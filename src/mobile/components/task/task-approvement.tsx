import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  Button,
  Center,
  Icon,
  Modal,
  Text,
  useToast
} from "react-native-ficus-ui";

interface TaskApprovementModalProps {
  isOpen: boolean;
  onClose: () => void;
  submitter: (description: string) => unknown;
}

export const TaskApprovementModal: React.FC<TaskApprovementModalProps> = ({
  isOpen,
  onClose,
  submitter
}) => {
  const t = useToast();
  const [description, setDescription] = useState("");

  return (
    <Modal isOpen={isOpen}>
      <Center h={"100%"} w="100%" p={20} minW={300} gap={20}>
        <Text>Кратко опишите опыт участия!</Text>
        <View style={{ width: "100%" }}>
          <Text>Опыт участия</Text>
          <TextInput
            placeholder="Описание"
            onChangeText={(e) => setDescription(e)}
            value={description}
            style={style.input}
          />
        </View>

        <Button
          h={35}
          w={"100%"}
          bg={"#000"}
          onPress={() => {
            submitter(description);
            onClose();
            t.show({
              type: "success",
              text1: "Ваш ответ записан!"
            });
          }}
        >
          Подтвердить участие
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

const style = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    fontSize: 16,
    paddingLeft: 10
  }
});
