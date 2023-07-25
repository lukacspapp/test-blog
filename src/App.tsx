import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />

      <main>

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

      </main>

      <Footer />
    </>
  )
}
