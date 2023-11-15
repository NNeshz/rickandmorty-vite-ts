import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  name: string;
  status: string;
  id: number;
  lastLocation: string;
  firstSeen: string;
  species: string;
}

export default function Card({ image, name, status, id, lastLocation, firstSeen, species }: CardProps) {
  return (
    <div className="bg-slate-50 grid grid-cols-2 rounded-xl shadow-md">
      <div className="">
        <img src={image} alt={name + ' image'} className="rounded-l-xl" />
      </div>
      <div className="pl-8 flex flex-col justify-center">
        <div className="pr-4">
          <p className="text-xl font-bold text-zinc-900">{name}</p>
          <p><strong className={`${status === "Alive" ? "text-green-600" : "text-red-600"}`}>{status}</strong> -  {species}</p>
          <p className="text-zinc-800 font-bold">Last known location:</p>
          <p className="">{lastLocation}</p>
          <p className="text-zinc-800 font-bold">First seen in:</p>
          <p className="pb-2">{firstSeen}</p>
          <button>
            <Link to={`/home/${id}`} className="bg-indigo-600 px-3 text-center text-white font-semibold rounded py-1">Details &nbsp; &rarr;</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
