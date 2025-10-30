import { Card, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React from "react";
interface Project {
  id: string;
  title: string;
  description: string;
  github: string;
  technologies: string[];
}
interface ProjectCardProps {
  project: Project;
}
export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  return (
    <Card
      style={{ marginBottom: 15 }}
      onPress={() => router.push(`/projects/${project.id}`)}
    >
      <Text category="s1">{project.title}</Text>
      <Text appearance="hint" category="p2" style={{ marginTop: 5 }}>
        {project.description}
      </Text>
    </Card>
  );
}