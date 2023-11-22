import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import CardDetails from "./components/CardDetails.tsx"

import { Container } from "./components/Container.tsx"

import Header from "./components/Header.tsx"
import Navbar from "./components/Navbar.tsx"
import Pagination from "./components/Pagination.tsx"

export default function App() {
  return (
    <BrowserRouter>
      <Container>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<CardDetails />} />
        </Routes>
        <Pagination />
      </Container>
    </BrowserRouter>
  )
}
