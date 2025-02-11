import React, { useEffect, useState } from "react";
import { View, Image,Text, FlatList, TextInput } from "react-native";
import { fetchAthletes } from "../services/api";

const HomeScreen = () => {

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


  const [fighters, setFighters] = useState([]);
  const [search, setSearch] = useState("");



  useEffect(() => {
    const fetchFighters = async () => {
      setLoading(true);
      try {
        const data = await fetchAthletes();
        setFighters(data);
        setFilteredFighters(data);
      } catch (error) {
        console.error("Erro ao buscar lutadores:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFighters();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <Image source={{ uri: 'https://example.com/mma-logo.png' }} style={{ width: 100, height: 100 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Escolha seu Lutador</Text>

      <TextInput 
        placeholder="🔍 Buscar" 
        value={search} 
        onChangeText={setSearch} 
        style={{ width: '90%', borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 10 }} 
      />
      
      
      <FlatList
        data={fighters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            onPress={() => navigation.navigate('Info', { fighter: item })} 
            style={{ flexDirection: 'row', alignItems: 'center', padding: 10, borderWidth: 1, borderRadius: 10, marginBottom: 10, width: '90%' }}
          >
            <Image source={{ uri: item.image }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <Text style={{ marginLeft: 10, fontSize: 18 }}>{item.name}</Text>
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
