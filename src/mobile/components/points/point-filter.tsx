import { RecycleFraction, RecycleFractions } from "@/entities";
import React, { Dispatch, SetStateAction } from "react";
import { Box, HStack, Text } from "react-native-ficus-ui";
import { FilterPoint } from "./filter-point";

interface PointFilterProps {
  fractions: RecycleFraction[];
  setFractions: Dispatch<SetStateAction<RecycleFraction[]>>;
}

export const PointFilter: React.FC<PointFilterProps> = ({
  fractions,
  setFractions
}) => {
  return (
    <Box>
      <Text mb={10} fontSize={16} mt={10} fontWeight={"bold"} pl={10}>
        Что хотите сдать?
      </Text>
      <HStack flexWrap={"wrap"} gap={3}>
        {Object.values(RecycleFractions).map((fraction) => (
          <FilterPoint
            key={fraction.position}
            fraction={fraction}
            onPress={(fraction, state) => {
              if (state) {
                return setFractions(() => [...fractions, fraction]);
              }

              return setFractions(() =>
                fractions.filter(
                  ({ position }) => position !== fraction.position
                )
              );
            }}
          />
        ))}
      </HStack>
    </Box>
  );
};
