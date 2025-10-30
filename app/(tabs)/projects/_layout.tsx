import { Stack } from "expo-router";

export default function ProjectsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="indext"
        options={{ title: "Meus Projetos", headerShown: false }}
      />
      <Stack.Screen
        name="[id]"
        options={{ title: "Meus projetos", headerShown: true }}
      />
    </Stack>
  );
}