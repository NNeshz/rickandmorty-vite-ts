export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  gender: string;
  episode: string[];
  location: {
    name: string;
    url: string;
  };
  origin: {
    name: string;
    url: string;
  };
  species: string;
}

export interface Store {
  characters: Character[];
  filters: {
    name: string | null;
    status: string | null;
    species: string | null;
  };
  nextPage: string | null;
  prevPage: string | null;
  characterDetail: Character | null;
  errors: string[];
}

export interface Actions {
  setCharacter: (character: Character) => void;
  fetchCharacterById: (id: number) => Promise<void>;
  fetchCharacters: () => Promise<void>;
  setFilter: (filter: keyof Store["filters"], value: string ) => void;
  fetchNextPage: () => Promise<void>;
  fetchPrevPage: () => Promise<void>;
}