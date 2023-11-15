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
  characterDetail: Character | null;
  errors: string[];
}

export interface Actions {
  setCharacters: (characters: Character[]) => void;
  setCharacter: (character: Character) => void;
  fetchCharacterById: (id: number) => Promise<void>;
  fetchCharacters: () => Promise<void>;
  setFilter: (filter: keyof Store["filters"], value: string ) => void;
}