import { RecyclePoint } from "@/entities";
import React from "react";
import { Image } from "react-native-ficus-ui";
import MapView, { Marker } from "react-native-maps";

interface AppMapProps {
  points?: RecyclePoint[];
}

export const AppMap: React.FC<AppMapProps> = ({ points = [] }) => {
  return (
    <MapView style={{ flex: 1 }}>
      {points.map(({ pointId, title, geom }) => {
        const coord = geom.replace("POINT(", "").replace(")", "").split(" ");
        return (
          <Marker
            key={pointId}
            coordinate={{
              latitude: Number(coord[1]),
              longitude: Number(coord[0])
            }}
            title={title}
          >
            <Image
              h={50}
              w={50}
              style={{ objectFit: "fill" }}
              source={require("@/assets/images/map-pin.png")}
            />
          </Marker>
        );
      })}
    </MapView>
  );
};
