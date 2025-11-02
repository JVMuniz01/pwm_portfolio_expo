import { FontAwesome } from "@expo/vector-icons";
import { Button, Layout, Text } from "@ui-kitten/components";
import { Linking, ScrollView } from "react-native";

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
      url: "https://wa.me/5581981051727?text=Olá,%20vim%20do%20portfólio%20mobile!",
      icon: "whatsapp",
      color: "#25D366",
    },
    {
      id: "5",
      name: "Email",
      url: "mailto:seuemail@exemplo.com?subject=Contato%20do%20Portfólio&body=Olá,%20vim%20do%20portfólio",
      icon: "paper-plane",
      color: "#828080ff",
    },
  ];

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Não foi possível abrir o link: " + url);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20, borderRadius: 10}}>
      <Layout style={{ flex: 1, alignItems: "center" }}>
        <Text category="h4" style={{ marginBottom: 100, marginTop: 20 }}>
          Fale comigo!
        </Text>

        {contacts.map((contact) => (
          <Button
            key={contact.id}
            style={{ width: "80%", marginBottom: 15, backgroundColor: contact.color }}
            accessoryLeft={() => (
              <FontAwesome name={contact.icon as any} size={20} color="white" />
            )}
            onPress={() => openLink(contact.url)}
          >
            {contact.name}
          </Button>
        ))}
      </Layout>
    </ScrollView>
  );
}