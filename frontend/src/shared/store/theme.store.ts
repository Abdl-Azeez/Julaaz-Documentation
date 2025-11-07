import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type ThemeId = 
  | 'naija-fresh'
  | 'eko-luxe'
  | 'arewa-calm'
  | 'ulo-oma'
  | 'rainy-9ja'
  | 'ajebo-blend'

export interface Theme {
  id: ThemeId
  name: string
  displayName: string
  emoji: string
  type: 'light' | 'dark'
}

export const themes: Theme[] = [
  { id: 'naija-fresh', name: 'Naija Fresh', displayName: 'Naija Fresh', emoji: '🌞', type: 'light' },
  { id: 'eko-luxe', name: 'Eko Luxe', displayName: 'Eko Luxe', emoji: '🌃', type: 'dark' },
  { id: 'arewa-calm', name: 'Arewa Calm', displayName: 'Arewa Calm', emoji: '🏜️', type: 'light' },
  { id: 'ulo-oma', name: 'Ụlọ Oma', displayName: 'Ụlọ Oma', emoji: '🏠', type: 'light' },
  { id: 'rainy-9ja', name: 'Rainy 9ja', displayName: 'Rainy 9ja', emoji: '🌧️', type: 'dark' },
  { id: 'ajebo-blend', name: 'Ajébo Blend', displayName: 'Ajébo Blend', emoji: '🎨', type: 'dark' },
]

interface ThemeState {
  theme: ThemeId
  setTheme: (theme: ThemeId) => void
  getTheme: () => Theme | undefined
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'naija-fresh',
      setTheme: (theme: ThemeId) => {
        set({ theme })
        // Apply theme to document
        document.documentElement.setAttribute('data-theme', theme)
        // Update body class for dark/light mode
        const selectedTheme = themes.find(t => t.id === theme)
        if (selectedTheme) {
          if (selectedTheme.type === 'dark') {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        }
      },
      getTheme: () => {
        return themes.find(t => t.id === get().theme)
      },
    }),
    {
      name: 'julaaz-theme-storage',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        // Apply theme on hydration
        if (state?.theme) {
          document.documentElement.setAttribute('data-theme', state.theme)
          const selectedTheme = themes.find(t => t.id === state.theme)
          if (selectedTheme) {
            if (selectedTheme.type === 'dark') {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          }
        }
      },
    }
  )
)

