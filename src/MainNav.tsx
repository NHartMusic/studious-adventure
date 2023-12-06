
import * as React from 'react'
import { Link } from "react-router-dom"
import styled from 'styled-components'

const ListLink = styled(Link)`
  border: 1px solid red;
  color: red;
  font-size: 1.8rem;
  padding: 10px;
  margin: 10px;
`

const Navbar = styled.div`
  margin: 50px 0px;
  display: flex;
`
  
function MainNav() {
  return (
    <>
        <Navbar>
            <ListLink to='/Music'>Music</ListLink>
            <ListLink to='/Tech'>Tech</ListLink>
        </Navbar>
    </>
  )
}

export default MainNav
