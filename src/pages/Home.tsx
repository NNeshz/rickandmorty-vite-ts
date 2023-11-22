/* eslint-disable react-hooks/exhaustive-deps */
import { useGeneralStore } from "../context/store.tsx";

import Card from "../components/Card.tsx"
import { useEffect } from "react";

interface CharacterProps {
  id: number;
  image: string;
  name: string;
  status: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  species: string;
}

export default function Home() {

  const characters = useGeneralStore(state => state.characters)
  const fetchCharacters = useGeneralStore(state => state.fetchCharacters)

  useEffect(() => {
    fetchCharacters()
  }, [])

  return (
    <div className="grid lg:grid-cols-2 lg:gap-x-4">
      {
        characters === undefined ? <p className="text-center text-4xl font-bold text-zinc-700 py-24 md:col-span-2 md:py-24">Character not found</p> :
          characters.map((character: CharacterProps) => (
            <Card
              key={character.id}
              id={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              lastLocation={character.location.name}
              firstSeen={character.origin.name}
              species={character.species}
            />
          ))
      }
    </div>
  )
}