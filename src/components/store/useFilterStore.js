import { create } from 'zustand';

export const useFilterStore = create((set) => ({
  // States
  selectedRegions: [],
  currency: 'AMD',
  priceRange: { min: '', max: '' },
  guestsCount: 1,

  // Actions
  toggleRegion: (region) =>
    set((state) => ({
      selectedRegions: state.selectedRegions.includes(region)
        ? state.selectedRegions.filter((r) => r !== region)
        : [...state.selectedRegions, region],
    })),

  setCurrency: (currency) => set({ currency }),

  setPriceRange: (range) =>
    set((state) => ({
      priceRange: { ...state.priceRange, ...range },
    })),

  setGuestsCount: (count) => set({ guestsCount: count }),

  // Reset filter (եթե հետագայում պետք գա)
  resetFilters: () =>
    set({
      selectedRegions: [],
      currency: 'AMD',
      priceRange: { min: '', max: '' },
      guestsCount: 1,
    }),
}));