import { create } from "zustand";
import { debounce } from "ts-debounce";

import { Store, Actions } from "./types";

const baseURL = "https://rickandmortyapi.com/api/character"

const initialValue: Store = {
  characters: [],
  filters: {
    status: null,
    species: null,
    name: null,
  },
  characterDetail: null,
  errors: []
};

export const useGeneralStore = create<Store & Actions>((set, get) => ({
  ...initialValue,

  fetchCharacters: async () => {
    const filters = get().filters

    // Estudiar este pedazo
    let filter = (Object.keys(filters) as (keyof Store["filters"])[]).map((key) => {
      if (filters[key]) {
        return `${key}=${filters[key]}&`
      }
      return ""
    }).join("")


    if (filter.length > 0) {
      filter = "?" + filter.slice(0, -1)
    }

    const newURL = baseURL + filter
    const response = await fetch(newURL)
      .then((response) => response.json())
      .catch((error) => set({ errors: [...initialValue.errors, error] }))
    set({ characters: response.results })
  },
    
  setFilter: (filter, value) => {
    set(state => ({ filters: { ...state.filters, [filter]: value } }))
    debounce(get().fetchCharacters, 300)() 
  },

  setCharacter: (character) => set((state) => ({
    characters: [...state.characters, character],
  })),

  fetchCharacterById: async (id) => {
    const response = await fetch(baseURL + `/${id}`)
      .then((response) => response.json())
      .catch((error) => set({ errors: [...initialValue.errors, error] }))
    set({ characterDetail: response })
  },
}))