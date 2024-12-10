import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    outfit: require("../assets/fonts/Outfit-Regular.ttf"),
    outfitBold: require("../assets/fonts/Outfit-Bold.ttf"),
    outfitMedium: require("../assets/fonts/Outfit-Medium.ttf"),
  });
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="(tabs)"
        // options={{ headerShown: false }}
      />
    </Stack>
  );
}
