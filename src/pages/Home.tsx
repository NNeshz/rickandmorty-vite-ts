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
    <div className="px-24">
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 pb-8">
        {
          characters === undefined ? <p className="text-2xl font-bold text-center col-span-2 mt-48">Character not found</p> :
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
    </div>
  )
}