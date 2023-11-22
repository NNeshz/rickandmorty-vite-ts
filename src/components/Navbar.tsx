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
    <form className="w-full  grid gap-y-2 my-4 lg:grid-cols-2 lg:gap-x-4">
      <div>
        <input type="text" placeholder="Are you looking for someone?" className="w-full px-2 py-2 rounded-md shadow-md" onChange={handleChange} />
      </div>
      <div className=" flex justify-between lg:justify-around lg:gap-x-4">
        <select onChange={handleFilterByStatus} className="bg-indigo-700 text-white px-2 py-2 rounded-md shadow-md lg:w-full">
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select onChange={handleFilterBySpecies} className="bg-indigo-700 text-white px-2 py-2 rounded-md shadow-md lg:w-full">
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Cronenberg">Cronenberg</option>
          <option value="Humanoid">Humanoid</option>
        </select>
      </div>
    </form>
  )
}
