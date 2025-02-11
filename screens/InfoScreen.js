import React from 'react';
import { View, Text, Image } from 'react-native';

const InfoScreen = ({ route }) => {
  const fighter = route.params?.fighter || null;

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: 'https://imgur.com/wRDdZpf' }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Seu Lutador</Text>

      {fighter ? (
        <>
          <Image source={{ uri: fighter.image }} style={{ width: 100, height: 100, borderRadius: 50, marginVertical: 10 }} />
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{fighter.name}</Text>
          <Text style={{ fontSize: 18, color: 'gray' }}>{fighter.nickname}</Text>
          <Text style={{ fontSize: 16, color: 'darkgray' }}>{fighter.category}</Text>
        </>
      ) : (
        <Text style={{ fontSize: 18, color: 'gray', marginTop: 20 }}>Nenhum lutador selecionado. Escolha um na Home.</Text>
      )}
    </View>
  );
};

export default InfoScreen;
