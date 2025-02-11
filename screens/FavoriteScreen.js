import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const soco = {
  uri: 'https://i.imgur.com/bmvRLJr.png',
  flex: 10,
  padding: 40,
  width: 80,
  height: 64,
};
const MMA = {
  uri: 'https://i.imgur.com/wRDdZpf.png',
  flex: 10,
  padding: 182,
  width: 81,
  height: 25,
};

const FavoriteScreen = ({ route }) => {
  const [favorite, setFavorite] = useState(route.params?.favorite || null);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        
      <Image source={soco} />
      <Image source={MMA} />

      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Meu Favorito</Text>

      {favorite ? (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 10, marginTop: 10, width: '90%' }}>
          <Image source={{ uri: favorite.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
          <View style={{ marginLeft: 10 }}>
            <Text style={{ fontSize: 18 }}>{favorite.name}</Text>
            <Text style={{ fontSize: 16, color: 'gray' }}>{favorite.nickname}</Text>
          </View>
          <TouchableOpacity style={{ marginLeft: 'auto', backgroundColor: 'gray', padding: 5, borderRadius: 5 }} onPress={() => setFavorite(null)}>
            <Text style={{ color: 'white' }}>Remover</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={{ marginTop: 20, fontSize: 18, color: 'gray' }}>Nenhum favorito selecionado. Escolha um na Home.</Text>
      )}
    </View>
  );
};

export default FavoriteScreen;
