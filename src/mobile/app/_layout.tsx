import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Header } from "@/components/header";
import { RootStoreContext } from "@/hooks/use-store";
import { useColorScheme } from "@/hooks/useColorScheme";
import { RootStore } from "@/storage";
import { ThemeProvider as FicusThemeProvider } from "react-native-ficus-ui";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <FicusThemeProvider>
        <RootStoreContext.Provider value={RootStore}>
          <ThemeProvider
            value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
          >
            <Stack>
              <Stack.Screen
                name="index"
                options={{
                  headerShown: true,
                  header: () => <Header title="Вход" />
                }}
              />
              <Stack.Screen
                name="registration"
                options={{
                  headerShown: true,
                  header: () => <Header title="Регистрация" />
                }}
              />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="not-found" />
            </Stack>
          </ThemeProvider>
        </RootStoreContext.Provider>
      </FicusThemeProvider>
    </QueryClientProvider>
  );
}
