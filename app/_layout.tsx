import * as eva from "@eva-design/eva";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ApplicationProvider } from "@ui-kitten/components";
import { Stack } from "expo-router";

const queryClient = new QueryClient();

export default function RootLayout() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <QueryClientProvider client={queryClient}>
        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="forca/index"
            options={{
              title: "Jogo da Forca", 
              headerShown: true
            }}
          />
          <Stack.Screen
            name="projects/[id]"
            options={{
              title: "Detalhes do Projeto",
              headerShown: true,
            }}
          />
        </Stack>
      </QueryClientProvider>
    </ApplicationProvider>
  );
}