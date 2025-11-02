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
          justifyContent: "center",
          padding: 20,
          borderRadius: 10,
          backgroundColor: "#f5f5f5",
        }}
      >
        <Text category="h2" style={{ marginBottom: 20, textAlign: "center" }}>
          João Victor Muniz
        </Text>
        <Text category="h3" style={{ marginBottom: 20, textAlign: "center" }}>
          Bem vindo ao meu projeto mobile
        </Text>

        <Layout style={{ width: "100%", marginBottom: 20 ,backgroundColor: "#f5f5f5",
}}>
          <Text category="p1" style={{ textAlign: "center", paddingTop: 10 }}>
            Sou estudante de Ciência da Computação, Desenvolvedor de Software e aspirante de Desenvolvedor Web/Mobile. Inicialmente focado no
            back-end (Java, Springboot e SpringSecurity), mas em constante aprendizado com o
            objetivo de me tornar um ótimo Desenvolvedor Fullstack.
          </Text>
          <Text category="p1" style={{ textAlign: "center", paddingTop: 50 }}>
            Aqui está um jogo dentro do App
          </Text>
        </Layout>
        <Button
          style={{ width: "40%", marginTop: 40}}
          status="success"
          onPress={() => router.push("/forca")}
        >
          Jogar Forca
        </Button>
      </Layout>
    </ScrollView>
  );
}