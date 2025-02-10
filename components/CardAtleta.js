import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CardAtleta({ atleta, onFavorito }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>NOME</Text>
      <Text>Categoria: </Text>
      <Text>Vitórias: </Text>
      <Text>Derrotas: </Text>
      <Button title="Favoritar" onPress={() => onFavorito(atleta)} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
