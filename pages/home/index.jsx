import React, { useMemo, useRef, useState } from "react";
import CardAtleta from "../../components/CardAtleta";
import PainelFavoritos from "../../components/PainelFavoritos";
import { fetchAthletes } from "../../services/api";
import { View, Text, Button, TextInput } from "react-native";

function Home() {
  const [search, setSearch] = useState("");
  const [atleta, setAtleta] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const NoAthleteText = useMemo(() => {
    if (isLoading) return <Text className="loading">Carregando...</Text>;
    if (atleta && atleta.length > 0) return <></>;
    if (hasSearched)
      return <Text className="no-results">Nenhum atleta encontrado</Text>;
    return (
      <Text className="no-results">Pesquise por um atleta para vê-lo aqui</Text>
    );
  }, [isLoading, atleta, hasSearched]);

  const handleSearch = async () => {
    setHasSearched(true);
    if (!search) return;
    setIsLoading(true);
    const data = await fetchAthletes(search);
    setAtleta(data);
    setIsLoading(false);
    setSearch("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleSearch();
    }
  };

  const addToFavorites = (atleta) => {
    if (!favorites.find((fav) => fav.id === atleta.id)) {
      setFavorites([...favorites, atleta]);
    }
  };

  const removeFromFavorites = (atletaId) => {
    setFavorites(favorites.filter((fav) => fav.id !== atletaId));
  };

  return (
    <View className="App">
      <Text>Pesquisa de Atletas</Text>
      <Text>Mixed Martial Arts</Text>

      <TextInput
        className="input-search"
        placeholder="Digite o nome do atleta"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button
        title="Pesquisar"
        className="search-button"
        onPress={handleSearch}
      />

      {NoAthleteText}

      <View className="atleta-list">
        {atleta.map((atleta) => (
          <CardAtleta
            key={atleta.id}
            atleta={atleta}
            isFavorite={favorites.includes(atleta)}
            addToFavorites={addToFavorites}
            removeFromFavorites={removeFromFavorites}
          />
        ))}
      </View>

      <PainelFavoritos
        favorites={favorites}
        removeFromFavorites={removeFromFavorites}
      />
    </View>
  );
}

export default Home;
