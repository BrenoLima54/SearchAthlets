import React, { useState, useCallback } from "react";
import {
  View,
  Image,
  Text,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { fetchAthletes } from "../services/api";
import CardAtleta from "../components/CardAtleta";

const HomeScreen = () => {
  const punchImage = {
    uri: "https://i.imgur.com/bmvRLJr.png",
    flex: 10,
    padding: 40,
    width: 80,
    height: 64,
  };
  const mmaImage = {
    uri: "https://i.imgur.com/wRDdZpf.png",
    flex: 10,
    padding: 182,
    width: 81,
    height: 25,
  };

  const [fighters, setFighters] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchFighters = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await fetchAthletes(search);
      setFighters(data);
    } catch (error) {
      console.error("Erro ao buscar lutadores:", error);
    } finally {
      setIsLoading(false);
    }
  }, [search]);

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <Image source={punchImage} />
      <Image source={mmaImage} />

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Escolha seu Lutador
      </Text>

      <TextInput
        placeholder="Digite um lutador para pesquisar!"
        value={search}
        onChangeText={setSearch}
        style={{
          width: "90%",
          borderWidth: 1,
          padding: 10,
          marginVertical: 10,
          borderRadius: 10,
        }}
      />

      <Button title="🔍 Buscar" onPress={fetchFighters} />

      {isLoading && <ActivityIndicator />}

      <FlatList
        data={fighters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CardAtleta atleta={item} />}
      />
    </View>
  );
};

export default HomeScreen;
