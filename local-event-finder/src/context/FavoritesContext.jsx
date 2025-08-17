import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (event) => {
    setFavorites((prev) => {
      if (prev.some((f) => f.id === event.id)) {
        // remove
        return prev.filter((f) => f.id !== event.id);
      } else {
        // add
        return [...prev, event];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}
