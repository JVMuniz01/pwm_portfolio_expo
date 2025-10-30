import { Layout, Text } from "@ui-kitten/components";

export default function Home() {
  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text category="h4">Bem-vindo ao meu Portfólio!</Text>
      <Text category="p1" style={{ marginTop: 20, textAlign: "center" }}>
        Aqui você pode conhecer meus projetos e entrar em contato comigo.
      </Text>
    </Layout>
  );
}