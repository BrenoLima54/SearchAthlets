import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function PainelFavorito({ favoritos, onRemover }) {
  return (
    <View>
      <Text style={styles.header}>Favoritos</Text>
      {favoritos.length === 0 && <Text>Nenhum atleta favorito.</Text>}
      {favoritos.map((atleta) => (
        <View key={atleta.id} style={styles.card}>
          <Text>NOME</Text>
          <Button title="Remover" onPress={() => onRemover(atleta.id)} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
});
