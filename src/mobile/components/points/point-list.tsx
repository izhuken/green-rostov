import { RecyclePoint } from "@/entities";
import React from "react";
import { ScrollView } from "react-native";
import { HStack, Image, Text, VStack } from "react-native-ficus-ui";

interface PointListProps {
  points?: RecyclePoint[];
}

export const PointList: React.FC<PointListProps> = ({ points = [] }) => {
  return (
    <ScrollView style={{ padding: 10, marginTop: 10 }}>
      {points.map(({ address, title, pointId }) => (
        <VStack
          key={pointId}
          borderColor={"#E3E3E3"}
          borderWidth={4}
          p={5}
          mb={6}
          borderRadius={10}
        >
          <Text>{title}</Text>
          <HStack alignItems={"center"} gap={4}>
            <Image
              style={{ height: 12, width: 12 }}
              source={require("@/assets/images/address-pin.png")}
            />
            <Text>{address}</Text>
          </HStack>
        </VStack>
      ))}
    </ScrollView>
  );
};
