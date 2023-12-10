import * as React from 'react'
import { Routes, Route } from "react-router-dom"
import styled from 'styled-components'
//nav
import Header from './Navigation/Header'
//components
import Home from './Pages/Home/index'
import Music from './Pages/Music/index'
import Tech from './Pages/Tech/index'
import Connect from './Pages/Connect/index'


const ContentWrapper = styled.div`
  height: 100%;
  flex-direction: column; 
`

function App() {
 
  return (
    <>
      <ContentWrapper>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Connect' element={<Connect />} />
        </Routes>
      </ContentWrapper>
    </>
  )
}

export default App
