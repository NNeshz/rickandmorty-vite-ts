import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div>
      <h1>Rick and Morty</h1>
      <Link to="/home">Search</Link>
    </div>
  )
}
