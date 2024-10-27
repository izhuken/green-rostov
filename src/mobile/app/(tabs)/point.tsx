import ParallaxScrollView from "@/components/ParallaxScrollView";
import { AppMap } from "@/components/points";
import { PointFilter } from "@/components/points/point-filter";
import { PointList } from "@/components/points/point-list";
import { RecycleFraction } from "@/entities";
import { RecycleMapIntegrationInstance } from "@/lib";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Box } from "react-native-ficus-ui";

export default function PointMapScreen() {
  const [fractions, setFractions] = useState<RecycleFraction[]>([]);
  const { data } = useQuery({
    queryKey: [fractions],
    queryFn: async () =>
      (await RecycleMapIntegrationInstance.getPoints(fractions)).data.data
        .points
  });
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ dark: "white", light: "white" }}
      headerImage={<AppMap points={data} />}
    >
      <Box w={"100%"} bg={"white"}>
        <PointFilter fractions={fractions} setFractions={setFractions} />
        <PointList points={data} />
      </Box>
    </ParallaxScrollView>
  );
}
