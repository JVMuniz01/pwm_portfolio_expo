import {
  Button,
  Layout,
  Text,
} from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React from 'react';
import { ScrollView, StyleSheet, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    // Layout principal com nível de fundo levemente diferente (level 2 é cinza claro)
    <Layout level="3" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.profileBox}>
            {/* Título Principal */}
            <Text category="h2" style={styles.nameText}>
              João Victor Muniz
            </Text>
            
            {/* Subtítulo mais sutil */}
            <Text category="h5" style={styles.welcomeText}>
              Bem-vindo ao meu projeto mobile
            </Text>

            {/* Divisor visual sutil */}
            <View style={styles.separator} />

            {/* Seção de Biografia */}
            <Layout style={styles.bioLayout}>
              <Text category="p1" style={styles.bioText}>
                Sou estudante de Ciência da Computação, Desenvolvedor de Software e aspirante a Desenvolvedor Web/Mobile.
              </Text>
              
              <Text category="p2" appearance="hint" style={styles.bioDetails}>
                Inicialmente focado no back-end (Java, Springboot e SpringSecurity), mas em constante aprendizado com o objetivo de me tornar um ótimo Desenvolvedor Fullstack.
              </Text>
            </Layout>

            {/* Chamada para o Jogo */}
            <Text category="s1" style={styles.gameCall}>
              Aqui está um jogo simples dentro do App para demonstração:
            </Text>

            {/* Botão de Ação */}
            <Button
              style={styles.playButton}
              status="success"
              size="large"
              onPress={() => router.push("/forca")}
            >
              JOGAR FORCA
            </Button>
        </View>

      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:50
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  profileBox: {
    width: '100%',
    padding: 20,
    paddingBottom:50,
    paddingTop: 50,
    borderRadius: 12,
    backgroundColor: '#ffffff', // Fundo branco dentro do Layout cinza
    alignItems: 'center',
    // Sombra leve para efeito 3D sutil (universitário)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  nameText: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  separator: {
    height: 1,
    width: '80%',
    backgroundColor: '#e4e9f2',
    marginVertical: 20,
  },
  bioLayout: {
    width: "100%",
    backgroundColor: 'transparent', // Para não ter fundo duplo
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  bioText: {
    textAlign: 'justify',
    lineHeight: 22,
    marginBottom: 10,
  },
  bioDetails: {
    textAlign: 'justify',
    lineHeight: 20,
  },
  gameCall: {
    marginTop: 30,
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
  },
  playButton: {
    width: "60%", // Largura mais controlada
    borderRadius: 8,
    marginBottom: 10,
  }
});