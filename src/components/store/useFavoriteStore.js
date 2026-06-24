import { create } from "zustand";

export const useFavoriteStore = create((set) => ({
  // Պահում ենք սիրված տների index-ները
  favorites: [], 

  // Ավելացնել կամ հեռացնել սրտիկը
  toggleFavorite: (id) =>
    set((state) => {
      const isFavorite = state.favorites.includes(id);
      return {
        favorites: isFavorite
          ? state.favorites.filter((favId) => favId !== id) // Եթե կա՝ հեռացնում ենք
          : [...state.favorites, id], // Եթե չկա՝ ավելացնում ենք
      };
    }),
}));