import { FontAwesome } from "@expo/vector-icons"; // Ícones para os links sociais
import { Button, Card, Divider, Layout, Text, TextProps } from "@ui-kitten/components";
import React from "react";
import { Alert, Linking, ScrollView, StyleSheet, View } from "react-native";

// Componente individual para cada link de contato
interface ContactLinkProps {
  name: string;
  url: string;
  icon: string;
  color: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ name, url, icon, color }) => {
  
  const openLink = async (linkUrl: string) => {
    const supported = await Linking.canOpenURL(linkUrl);
    
    if (supported) {
      await Linking.openURL(linkUrl);
    } else {
      // Usando Alert nativo do React Native, em vez de alert()
      Alert.alert("Erro", `Não foi possível abrir o link para ${name}: ${linkUrl}`);
    }
  };

  return (
    <Button
      style={[styles.contactButton, { backgroundColor: color, borderColor: color }]}
      appearance="filled"
      // accessoryLeft deve ser compatível com UI Kitten. Usamos 'any' para aceitar FontAwesome.
      accessoryLeft={(props: any) => ( 
        <View style={styles.iconContainer}>
          <FontAwesome name={icon as any} size={20} color="white" />
        </View>
      )}
      onPress={() => openLink(url)}
    >
      {(evaProps: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<Text> & Readonly<TextProps>) => (
        <Text {...evaProps} style={styles.buttonText}>
          {name}
        </Text>
      )}
    </Button>
  );
};


export default function Contact() {
  const contacts = [
    {
      id: "1",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joaovmunizr",
      icon: "linkedin",
      color: "#0e76a8",
    },
    {
      id: "2",
      name: "GitHub",
      url: "https://github.com/JVMuniz01",
      icon: "github",
      color: "#171515",
    },
    {
      id: "3",
      name: "Instagram",
      url: "https://www.instagram.com/joaovmuniz_r/",
      icon: "instagram",
      color: "#E1306C",
    },
    {
      id: "4",
      name: "Whatsapp",
      url: "https://wa.me/5581981051727?text=Ol%C3%A1,%20vim%20do%20portf%C3%B3lio%20mobile!",
      icon: "whatsapp",
      color: "#25D366",
    },
    {
      id: "5",
      name: "Email",
      // Lembre-se de trocar este e-mail
      url: "mailto:joao.victor.dev@example.com?subject=Contato%20do%20Portf%C3%B3lio&body=Ol%C3%A1,%20vim%20do%20portf%C3%B3lio",
      icon: "envelope-o", // 'paper-plane' não é ideal para ícone de botão
      color: "#6c757d", // Cinza escuro para e-mail
    },
  ];

  return (
    <Layout level="3" style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        <View style={styles.header}>
            <Text category="h4" style={styles.title}>
              Fale Comigo!
            </Text>
            <Text category="s1" appearance="hint" style={styles.subtitle}>
              Estou sempre aberto a novas conexões e oportunidades.
            </Text>
            <Divider style={styles.headerDivider} />
        </View>

        <Card style={styles.contactCard}>
            {contacts.map((contact) => (
                <ContactLink
                    key={contact.id}
                    name={contact.name}
                    url={contact.url}
                    icon={contact.icon}
                    color={contact.color}
                />
            ))}
        </Card>

      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: { 
    flexGrow: 1, 
    padding: 20, 
    alignItems: 'center' 
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 70,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    textAlign: 'center',
  },
  headerDivider: {
    marginTop: 15,
    width: '50%',
    backgroundColor: '#e4e9f2',
  },
  contactCard: {
    width: '100%',
    maxWidth: 400, // Limita a largura em telas maiores
    borderRadius: 12,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactButton: {
    width: "100%",
    marginBottom: 15,
    borderRadius: 8,
    // Garante que o texto e o ícone fiquem alinhados e centralizados
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    height: 55, // Altura padronizada
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginLeft: 30, // Espaço entre o ícone e o texto
    textAlign: 'left'
  },
  iconContainer: {
    // Container vazio, pois o FontAwesome já lida com o estilo
  }
});