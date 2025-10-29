import { Layout, Text } from "@ui-kitten/components";
import { useLocalSearchParams } from "expo-router";
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
      <Text style={{ marginTop: 10 }}>{project.description}</Text>
    </Layout>
  );
}