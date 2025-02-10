import React from "react";
// import { Heart } from "lucide-react-native";
import imageNotFound from "../assets/image_not_found.png";
import { View, Text, Button, Image } from "react-native";

const CardAtleta = ({
  atleta,
  isFavorite,
  addToFavorites,
  removeFromFavorites,
}) => {
  return (
    <View className="card">
      <Image
        src={atleta.photo}
        alt={atleta.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = imageNotFound;
        }}
      />
      <Text>{atleta.name}</Text>
      <Text>{atleta.nickname}</Text>
      <Text>{atleta.weight}</Text>
      <Text>{atleta.category}</Text>

      <Button
        title="Favoritos"
        className="fav-button"
        onPress={() => {
          isFavorite ? removeFromFavorites(atleta.id) : addToFavorites(atleta);
        }}
      />
    </View>
  );
};

export default CardAtleta;
