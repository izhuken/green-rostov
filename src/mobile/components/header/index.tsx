import { LogoSvg } from "@/assets/svg";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <View style={style.container}>
      <View>
        <LogoSvg />
      </View>
      <Text style={style.text}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: 10,
    paddingTop: 40
  },
  text: {
    fontSize: 16,
    fontWeight: "semibold"
  }
});
