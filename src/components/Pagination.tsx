import { useGeneralStore } from "../context/store"

export default function Pagination() {

  const characters = useGeneralStore((state) => state.characters)
  const prevPage = useGeneralStore((state) => state.prevPage)
  const fetchNextPage = useGeneralStore((state) => state.fetchNextPage)
  const fetchPrevPage = useGeneralStore((state) => state.fetchPrevPage)
  
  return (
    <span className="pb-8 grid grid-cols-2 gap-x-4">
      {prevPage && <button className="bg-indigo-600 px-3 py-2 font-semibold text-white rounded-md" onClick={fetchPrevPage}>&larr; Prev</button>}
      {characters !== undefined && <button className={`bg-indigo-600 px-3 py-2 font-semibold text-white rounded-md ${!prevPage ? "col-span-2" : "" }`} onClick={fetchNextPage}>Next &rarr;</button>}
    </span>
  )
}
