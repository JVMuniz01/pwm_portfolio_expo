import { Button, Layout, Text } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import { ScrollView } from "react-native";
export default function Home() {
  const router = useRouter();
  
  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Layout
        style={{
          alignItems: "center",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Text category="h1" style={{ marginBottom: 20 }}>
          João Victor Muniz
        </Text>
        <Text category="h2" style={{ marginBottom: 20 }}>
          Bem vindo ao meu portfólio
        </Text>

        <Layout style={{ width: "100%", marginBottom: 20 ,backgroundColor: "#f5f5f5",
}}>
          <Text category="h6" style={{ textAlign: "center", paddingTop: 10 }}>
            Estudante de Desenvolvimento Web e Mobile. Inicialmente focado no
            back-end (Java e Springboot), mas em constante aprendizado com o
            objetivo de me tornar um ótimo Desenvolvedor Fullstack.
          </Text>
        </Layout>
        <Button
          style={{ width: "40%", marginTop: 100 }}
          status="success"
          onPress={() => router.push("/forca")}
        >
          Jogar Forca 🎮
        </Button>
      </Layout>
    </ScrollView>
  );
}