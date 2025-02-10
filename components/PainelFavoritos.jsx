import React from "react";
import CardAtleta from "./CardAtleta";
import { View, Text } from "react-native";

const PainelFavoritos = ({ favorites, removeFromFavorites }) => {
  return (
    <>
      <Text>Atletas Favoritos</Text>
      {favorites.length > 0 ? (
        <View className="painel-favoritos">
          {favorites.map((atleta) => (
            <CardAtleta
              key={atleta.id}
              atleta={atleta}
              isFavorite={true}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </View>
      ) : (
        <Text className="no-results">Nenhum atleta nos favoritos</Text>
      )}
    </>
  );
};

export default PainelFavoritos;
