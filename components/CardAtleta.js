/* eslint-disable react/prop-types */
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

export default function CardAtleta({ athete, isFavorite, onFavorite }) {
  return (
    <View
      key={athete.id}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        width: "90%",
      }}
    >
      <Image
        source={{ uri: athete.photo }}
        style={{ width: 50, height: 50, borderRadius: 25 }}
      />

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontSize: 18 }}>{athete.name}</Text>
        <Text style={{ fontSize: 16, color: "gray" }}>{athete.nickname}</Text>
      </View>

      <TouchableOpacity
        style={{
          marginLeft: "auto",
          backgroundColor: isFavorite ? "gray" : "blue",
          padding: 5,
          borderRadius: 5,
        }}
        onPress={() => onFavorite(athete)}
      >
        <Text style={{ color: "white" }}>
          {isFavorite ? "Remover" : "Favoritar"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
