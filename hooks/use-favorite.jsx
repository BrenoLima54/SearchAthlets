import { useCallback, useEffect, useState } from "react";

export function useFavorite() {
  const [favorites, setFavorites] = useState([]);

  const handleFavorite = useCallback(
    (item) => {
      if (favorites.find((favorite) => favorite.id === item.id)) {
        setFavorites((prev) => {
          const newFavorites = prev.filter(
            (favorite) => favorite.id !== item.id
          );
          sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
          return newFavorites;
        });
      } else {
        setFavorites((prev) => {
          const newFavorites = [...prev, item];
          sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
          return newFavorites;
        });
      }
    },
    [favorites, setFavorites]
  );

  const fetchFavorites = useCallback(() => {
    setFavorites(JSON.parse(sessionStorage.getItem("favorites")) || []);
  }, []);

  useEffect(() => {
    fetchFavorites();
  }, []);

  return { favorites, handleFavorite, fetchFavorites };
}
