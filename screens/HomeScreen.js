import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, FlatList } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filteredFighters, setFilteredFighters] = useState(fighters);
  const [favorite, setFavorite] = useState(null);

  const handleSearch = (text) => {
    setSearch(text);
    setFilteredFighters(fighters.filter(f => f.name.toLowerCase().includes(text.toLowerCase())));
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: 'https://imgur.com/wRDdZpf' }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Escolha seu Lutador</Text>
      <TextInput 
        placeholder="🔍 Buscar" 
        value={search} 
        onChangeText={handleSearch} 
        style={{ width: '90%', borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 10 }} 
      />
      
      <FlatList
        data={filteredFighters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Info', { fighter: item })} 
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 10, width: '90%' }}
          >
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.id}</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }} onPress={() => setFavorite(item)}>
              <Text style={{ fontSize: 24 }}>{favorite?.id === item.id ? '❤️' : '♡'}</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

       
    </View>
  );
};

export default HomeScreen;
