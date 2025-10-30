import { Button, Layout } from "@ui-kitten/components";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";


const palavras = ["REACT", "JAVA", "SPRINGBOOT", "MOBILE", "COMPILADOR", "NODE", "POSTGRES"];

export default function JogoForca() {
  const [palavra, setPalavra] = useState("");
  const [letrasAdivinhadas, setLetrasAdivinhadas] = useState<string[]>([]);
  const [erros, setErros] = useState(0);
  const [chute, setChute] = useState("");
  const [vitoria, setVitoria] = useState(false);
  const [derrota, setDerrota] = useState(false);

  const router = useRouter();

  useEffect(() => {
    novaPalavra();
  }, []);

  const novaPalavra = () => {
    const nova = palavras[Math.floor(Math.random() * palavras.length)];
    setPalavra(nova);
    setLetrasAdivinhadas([]);
    setErros(0);
    setVitoria(false);
    setDerrota(false);
    setChute("");
  };

  const handleLetraPress = (letra:string) => {
    if (vitoria || derrota) return;

    if (palavra.includes(letra)) {
      setLetrasAdivinhadas((prev) => [...prev, letra]);
    } else {
      setErros((prev) => prev + 1);
    }
  };

  const handleChute = () => {
    if (chute.trim().toUpperCase() === palavra) {
      setVitoria(true);
    } else {
      setDerrota(true);
    }
  };

  useEffect(() => {
    if (palavra && palavra.split("").every((l) => letrasAdivinhadas.includes(l))) {
      setVitoria(true);
    } else if (erros >= 6) {
      setDerrota(true);
    }
  }, [letrasAdivinhadas, erros]);

  const renderPalavra = () => {
    return palavra
      .split("")
      .map((letra, i) => (
        <Text key={i} style={{ fontSize: 30, marginHorizontal: 4 }}>
          {letrasAdivinhadas.includes(letra) || vitoria ? letra : "_"}
        </Text>
      ));
  };

  const renderTeclado = () => {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    return (
      <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginVertical: 20 }}>
        {alfabeto.map((letra:string) => (
          <TouchableOpacity
            key={letra}
            onPress={() => handleLetraPress(letra)}
            disabled={letrasAdivinhadas.includes(letra) || vitoria || derrota}
            style={{
              backgroundColor: letrasAdivinhadas.includes(letra) ? "#ccc" : "#007bff",
              padding: 10,
              margin: 4,
              borderRadius: 8,
              minWidth: 35,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>{letra}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <Layout style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>🎯 Jogo da Forca</Text>

      <Text style={{ fontSize: 20, marginBottom: 10 }}>Erros: {erros} / 6</Text>

      <View style={{ flexDirection: "row", marginVertical: 10 }}>{renderPalavra()}</View>

      {vitoria && <Text style={{ color: "green", fontSize: 20 }}>Parabéns! Você venceu 🎉</Text>}
      {derrota && <Text style={{ color: "red", fontSize: 20 }}>Você perdeu 😢 - Palavra: {palavra}</Text>}

      {renderTeclado()}

      <View style={{ flexDirection: "row", marginTop: 20, alignItems: "center" }}>
        <TextInput
          placeholder="Chutar palavra"
          value={chute}
          onChangeText={setChute}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 8,
            borderRadius: 8,
            width: 180,
            marginRight: 10,
            backgroundColor: "white",
          }}
        />
        <Button onPress={handleChute} size="small">
          Chutar
        </Button>
      </View>

      <Button style={{ marginTop: 20 }} onPress={novaPalavra}>
        🔁 Reiniciar
      </Button>
      <Button onPress={() => router.push("/(tabs)/home")} style={{ marginTop: 20 }}>
        Voltar para Home
        </Button>
    </Layout>
  );
}
