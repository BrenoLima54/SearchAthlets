import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import CardAtleta from './CardAtleta';
import { searchFighterByName } from '../services/api';

export default function PesquisarAtleta({ onSelecionar }) {
  const [nome, setNome] = useState('');
  const [resultados, setResultados] = useState([]);

  const handlePesquisar = async () => {
    const atletas = await searchFighterByName(nome);
    setResultados(atletas || []);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do atleta"
        value={nome}
        onChangeText={setNome}
      />
      <Button title="Pesquisar" onPress={handlePesquisar} />
      {resultados.map((atleta) => (
        <CardAtleta key={atleta.id} atleta={atleta} onFavorito={onSelecionar} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
});
