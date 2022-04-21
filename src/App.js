import React, { useState } from "react";
import './App.css'
import { Layout } from "./components/Layout/Layout";
import { Home } from "./pages/Home/Home";
import { Bikes } from "./pages/Bikes/Bikes";
import { Routes, Route } from 'react-router-dom'
import { BikePage } from "./components/bikes_components/BikePage/BikePage";
import { Favorites } from "./pages/Favorites/Favorites";
import { Compare } from "./pages/Compare/Compare";
import { User } from "./pages/User/User";
import { Buy } from "./pages/Buy/Buy";

export const Context2 = React.createContext()

function App() {

  const [bikesFavorites, setBikesFavorites] = useState([])
  const [bikesCompare, setBikesCompare] = useState([])
  const [bikeNum, setBikeNum] = useState(0)
  const [bikeNumCompare, setBikeNumCompare] = useState(0)
  return (
    <Context2.Provider
      value={{ bikesFavorites, setBikesFavorites, setBikeNum, bikeNum, bikesCompare, setBikesCompare, bikeNumCompare, setBikeNumCompare }}>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path=":category" element={<Bikes />} />
          <Route path=":category/:id" element={<BikePage />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="favorites/:id" element={<BikePage type='favorites' />} />
          <Route path="compare" element={<Compare />} />
          <Route path="user" element={<User />} />
          <Route path="buy" element={<Buy />} />
          <Route path="*" element={<h1 style={{ fontSize: 30 }}>Страница не найдена</h1>} />
        </Route>
      </Routes>
    </Context2.Provider>
  )
}

export default App;
