/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { Text, Image, SafeAreaView } from "react-native";
import CardAtleta from "../components/CardAtleta";
import { useFavorite } from "../hooks/use-favorite";

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

const FavoriteScreen = ({ navigation }) => {
  const { favorites, handleFavorite, fetchFavorites } = useFavorite();

  useEffect(() => {
    navigation.addListener("focus", () => {
      fetchFavorites();
    });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <Image source={punchImage} />
      <Image source={mmaImage} />

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Meus Favoritos</Text>

      {favorites ? (
        favorites.map((favorite) => (
          <CardAtleta
            key={favorite.id}
            athete={favorite}
            onFavorite={() => handleFavorite(favorite)}
            isFavorite
          />
        ))
      ) : (
        <Text style={{ marginTop: 20, fontSize: 18, color: "gray" }}>
          Nenhum favorito selecionado. Escolha um na Home.
        </Text>
      )}
    </SafeAreaView>
  );
};

export default FavoriteScreen;
