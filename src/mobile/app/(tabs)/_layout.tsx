import { Tabs } from "expo-router";
import React from "react";

import { ChequeIcon, HomeIcon, MapIcon, ProfileIcon } from "@/assets/svg";
import { Header } from "@/components/header";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <Header title="Главная" />,
          tabBarIcon: () => <HomeIcon />
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: "Products",
          header: () => <Header title="Продукты" />,
          tabBarIcon: () => <ChequeIcon />
        }}
      />
      <Tabs.Screen
        name="point"
        options={{
          title: "Points",
          header: () => <Header title="Зеленые точки" />,
          tabBarIcon: () => <MapIcon />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          header: () => <Header title="Профиль" />,
          tabBarIcon: () => <ProfileIcon />
        }}
      />
    </Tabs>
  );
}
