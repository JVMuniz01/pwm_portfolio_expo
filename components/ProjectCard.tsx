import { Button, Card, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";

export function ProjectCard({ project }) {
  const router = useRouter();

  return (
    <Card style={{ marginBottom: 15 }} onPress={() => router.push(project.route)}>
      <Text category="s1">{project.title}</Text>
      <Text category="p2" style={{ marginTop: 5 }}>{project.description}</Text>
      <Button style={{ marginTop: 10 }} size="small" onPress={() => router.push(project.route)}>
        Ver projeto
      </Button>
    </Card>
  );
}