import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

interface FavouritesState {
  favouritePropertyIds: string[]
  toggleFavourite: (propertyId: string) => void
  isFavourite: (propertyId: string) => boolean
  clearFavourites: () => void
}

export const useFavouritesStore = create<FavouritesState>()(
  persist(
    (set, get) => ({
      favouritePropertyIds: [],
      toggleFavourite: (propertyId) =>
        set((state) => {
          const exists = state.favouritePropertyIds.includes(propertyId)
          return {
            favouritePropertyIds: exists
              ? state.favouritePropertyIds.filter((id) => id !== propertyId)
              : [...state.favouritePropertyIds, propertyId]
          }
        }),
      isFavourite: (propertyId) => get().favouritePropertyIds.includes(propertyId),
      clearFavourites: () => set({ favouritePropertyIds: [] })
    }),
    {
      name: 'julaaz-favourites',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

