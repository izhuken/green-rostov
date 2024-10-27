import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface ProductItemProps {
  title: string;
  co2: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ co2, title }) => {
  return (
    <View style={style.container}>
      <View>
        <Text style={style.text}>{title}</Text>
      </View>
      <View>
        <Text style={style.text}>{co2} мг</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 10
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff"
  }
});
