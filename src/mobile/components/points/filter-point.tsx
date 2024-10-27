import { RecycleFraction } from "@/entities";
import React from "react";
import { Button, Image, Text, VStack } from "react-native-ficus-ui";

interface FilterPointProps {
  fraction: RecycleFraction;
  onPress: (fraction: RecycleFraction, state: boolean) => unknown;
}

export const FilterPoint: React.FC<FilterPointProps> = ({
  fraction,
  onPress
}) => {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <Button
      bg={isPressed ? "rgb(64, 133, 243)" : "white"}
      onPress={() => {
        onPress(fraction, !isPressed);
        setIsPressed(!isPressed);
      }}
    >
      <VStack justifyContent={"center"} alignItems={"center"}>
        <Image
          style={{ width: 30, height: 20, objectFit: "contain" }}
          source={fraction.icon}
        />
        <Text color={isPressed ? "white" : "black"}>{fraction.title}</Text>
      </VStack>
    </Button>
  );
};
