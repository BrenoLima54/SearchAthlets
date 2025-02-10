import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const FavoriteScreen = ({ route }) => {
  const [favorite, setFavorite] = useState(route.params?.favorite || null);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
        
      <Image source={{ uri: 'https://example.com/mma-logo.png' }} style={{ width: 100, height: 100 }} />
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
