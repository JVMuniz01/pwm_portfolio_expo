import { Button, Card, Layout, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { FlatList } from "react-native";
import { projects } from "./data";

export default function ProjectsScreen() {
  const router = useRouter();

  return (
    <Layout style={{ flex: 1, padding: 15 }}>
      <Text category="h4" style={{ marginBottom: 20 }}>Meus Projetos</Text>

      <FlatList
        data={projects}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            style={{ marginBottom: 15 }}
            onPress={() => router.push(item.route)}
          >
            <Text category="s1">{item.title}</Text>
            <Text category="p2" style={{ marginTop: 5 }}>{item.description}</Text>
            <Button
              style={{ marginTop: 10 }}
              size="small"
              onPress={() => router.push(item.route)}
            >
              Ver projeto
            </Button>
          </Card>
        )}
      />
    </Layout>
  );
}