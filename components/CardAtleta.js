import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

export default function CardAtleta({ atleta, onFavorito }) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: atleta.photo }}
        style={{ width: 100, height: 100, resizeMode: "cover" }}
      />
      <Text style={styles.title}>{atleta.name}</Text>
      <Text>Categoria: {atleta.category}</Text>
      <Text>Apelido: {atleta.nickname}</Text>
      <Text>Altura: {atleta.height}</Text>
      <Button title="Favoritar" onPress={() => onFavorito(atleta)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
