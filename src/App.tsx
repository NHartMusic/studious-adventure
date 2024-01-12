
//dependencies 
import * as React from 'react'
import { Routes, Route } from "react-router-dom"
import styled from 'styled-components'
//nav
import Header from './Navigation/Header'
import Footer from './Navigation/Footer'
//pages
import Albums2023List from './Pages/Blog/Posts/Albums2023/Albums2023List'
import Blog from './Pages/Blog/index'
import Connect from './Pages/Connect/index'
import Home from './Pages/Home/index'
import Music from './Pages/Music/index'
import Tech from './Pages/Tech/index'


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
          <Route path='/bestAlbumsOf2023' element ={<Albums2023List />} />
          <Route path='/bestFilmsOf2023' />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Connect' element={<Connect />} />
          <Route path='/Music' element={<Music />} />
          <Route path='/Tech' element={<Tech />} />
        </Routes>
        <Footer />
      </ContentWrapper>
    </>
  )
}

export default App
