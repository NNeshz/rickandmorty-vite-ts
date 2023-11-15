import { useGeneralStore } from "../context/store.tsx"
import { ChangeEvent, FormEvent } from "react"

export default function Navbar() {

  const setFilter = useGeneralStore(state => state.setFilter)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter('name', e.target.value)
  }

  const handleFilterByStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter('status', e.target.value)
  }

  const handleFilterBySpecies = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter('species', e.target.value)
  }

  return (
    <form className="px-24 my-4 flex justify-between">
      <div>
        <input type="text" placeholder="Are you looking for someone?" className="px-3 py-2 w-80 rounded-md bg-zinc-300 text-black " onChange={handleChange} />
      </div>
      <div className="grid grid-flow-col gap-x-2">
        <select onChange={handleFilterByStatus} className="px-3 py-2 rounded-md bg-indigo-600 text-white font-semibold">
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select onChange={handleFilterBySpecies} className="px-3 py-2 rounded-md bg-indigo-600 text-white font-semibold">
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Humanoid">Humanoid</option>
        </select>
      </div>
    </form>
  )
}
