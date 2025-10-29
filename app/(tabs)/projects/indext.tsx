import { ProjectCard } from "@/components/ProjectCard";
import { Layout, Text } from "@ui-kitten/components";
import React from "react";
import { FlatList } from "react-native";
import { projects } from "../../data/projects";

export default function ProjectsScreen() {
  return (
    <Layout style={{ flex: 1, padding: 16 }}>
      <Text category="h5" style={{ marginBottom: 15 }}>
        Meus Projetos
      </Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProjectCard project={item} />}
      />
    </Layout>
  );
}