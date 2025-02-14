import React from "react";
import { View, Text, Image } from "react-native";

const InfoScreen = () => {
  const socoImage = {
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

  const fighter = null;

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 20 }}>
      <Image source={socoImage} />
      <Image source={mmaImage} />

      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Seu Lutador</Text>

      {fighter ? (
        <>
          <Image
            source={{ uri: fighter.image }}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginVertical: 10,
            }}
          />

          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {fighter.name}
          </Text>

          <Text style={{ fontSize: 18, color: "gray" }}>
            {fighter.nickname}
          </Text>

          <Text style={{ fontSize: 16, color: "darkgray" }}>
            {fighter.category}
          </Text>
        </>
      ) : (
        <Text style={{ fontSize: 18, color: "gray", marginTop: 20 }}>
          Nenhum lutador selecionado. Escolha um na Home.
        </Text>
      )}
    </View>
  );
};

export default InfoScreen;
