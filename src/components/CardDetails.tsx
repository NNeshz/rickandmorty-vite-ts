/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom"
import { useGeneralStore } from "../context/store.tsx"
import { useEffect } from "react"

export default function CardDetails() {
  const { id } = useParams()

  const fetchCharacterById = useGeneralStore(state => state.fetchCharacterById)
  const character = useGeneralStore(state => state.characterDetail)

  useEffect(() => {
    fetchCharacterById(Number(id))
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-zinc-900 p-4 rounded-md">
        <img src={character?.image} alt={character?.name} />
        <div>
          <h3>Name: {character?.name}</h3>
          <p>Origin: {character?.origin.name}</p>
          <p>Gender: {character?.gender}</p>
          <p>Status: {character?.status}</p>
          <p>Episodes: {character?.episode.length}</p>
        </div>
      </div>
    </div>
  )
}
