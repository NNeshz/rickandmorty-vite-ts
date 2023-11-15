import { BrowserRouter, Routes, Route } from "react-router-dom"

import Landing from "./pages/Landing.tsx"
import Home from "./pages/Home.tsx"
import CardDetails from "./components/CardDetails.tsx"

import Header from "./components/Header.tsx"
import Navbar from "./components/Navbar.tsx"
import Pagination from "./components/Pagination.tsx"

export default function App() {
  return (
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing /> } />
          <Route path="/home" element={<Home /> } />
          <Route path="/home/:id" element={<CardDetails /> } />
        </Routes>
        <Pagination />
      </BrowserRouter>
  )
}
