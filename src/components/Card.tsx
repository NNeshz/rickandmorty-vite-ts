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
    <div className="grid rounded-lg mb-4 shadow-lg lg:grid-cols-2">
      <div>
        <img src={image} alt={name + ' image'} className="w-full rounded-t-lg lg:rounded-l-lg" />
      </div>
      <div className="p-5 lg:flex lg:flex-col lg:justify-center">
        <p><strong className={`${status === "Alive" ? "text-green-600" : "text-red-600"}`}>{status}</strong> -  {species}</p>
        <p className="font-bold text-2xl">{name}</p>
        <p className="font-semibold text-zinc-700">Last known location:</p>
        <p className="font-semibold">{lastLocation}</p>
        <p className="font-semibold text-zinc-700">First seen in:</p>
        <p className="font-semibold">{firstSeen}</p>
        <button className="bg-indigo-700 py-1 font-semibold text-white rounded-md w-full">
          <Link to={`/${id}`}>Details &nbsp; &rarr;</Link>
        </button>
      </div>
    </div>
  )
}
