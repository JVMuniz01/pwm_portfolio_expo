import { Button, Layout, Text } from "@ui-kitten/components";
import { useLocalSearchParams } from "expo-router";
import { Linking } from "react-native";
import { projects } from "../../data/projects";

export default function ProjectDetail() {
  const { id } = useLocalSearchParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Projeto não encontrado 😢</Text>
      </Layout>
    );
  }

  return (
    <Layout style={{ flex: 1, padding: 16 }}>
      <Text category="h5">{project.title}</Text>
      <Text appearance="hint" style={{ marginTop: 10 }}>{project.description}</Text>
      <Text category="s1" style={{ marginBottom: 5, marginTop: 20 }}>
          Tecnologias usadas:
        </Text>
        {project.technologies.map((tech, index) => (
          <Text key={index}>• {tech}</Text>
        ))}

        <Button
          style={{ marginTop: 60 }}
          onPress={() => Linking.openURL(project.github)}
        >
          Ver no GitHub
        </Button>
    </Layout>
  );
}