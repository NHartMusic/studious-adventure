import * as React from 'react'
import { Routes, Route } from "react-router-dom"
import Header from './Navigation/Header'

import Home from './Pages/Home/index'
import Music from './Pages/Music/index'
import Tech from './Pages/Tech/index'
import Connect from './Pages/Connect/index'

function App() {
 
  return (
    <>
      <Header />
      <Routes>
        <Route path='/Home' element={<Home />} />
        <Route path='/Music' element={<Music />} />
        <Route path='/Tech' element={<Tech />} />
        <Route path='/Connect' element={<Connect />} />
      </Routes>
    </>
  )
}

export default App
