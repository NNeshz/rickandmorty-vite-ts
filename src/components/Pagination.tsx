import { useGeneralStore } from "../context/store"

export default function Pagination() {

  const nexPage = useGeneralStore((state) => state.nextPage)
  const prevPage = useGeneralStore((state) => state.prevPage)
  const fetchNextPage = useGeneralStore((state) => state.fetchNextPage)
  const fetchPrevPage = useGeneralStore((state) => state.fetchPrevPage)

  return (
    <span className="px-24 flex justify-center items-center gap-x-4 mb-10">
      {prevPage && <button className="bg-indigo-600 px-3 py-2 font-semibold text-white rounded-md" onClick={fetchPrevPage}>&larr; Prev</button>}
      {nexPage && <button className="bg-indigo-600 px-3 py-2 font-semibold text-white rounded-md" onClick={fetchNextPage}>Next &nbsp; &rarr;</button>}
    </span>
  )
}
