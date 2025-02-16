import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCallback, useEffect, useState } from "react";

export function useFavorite() {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = useCallback(
    async (item) => {
      let newFavorites;
      if (favorites && favorites.find((favorite) => favorite.id === item.id)) {
        newFavorites = favorites.filter((favorite) => favorite.id !== item.id);
      } else {
        newFavorites = [...favorites, item];
      }
      setFavorites(newFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(newFavorites));
    },
    [favorites]
  );

  const fetchFavorites = useCallback(async () => {
    const storedFavorites = await AsyncStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    } else {
      setFavorites([]);
    }
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  return { favorites, handleFavorite, fetchFavorites };
}
