import { Link } from "react-router-dom"
import styled from 'styled-components'

const ListLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  border: 1px solid red;
  color: red;
  font-size: 1.8rem;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 auto;
  display: flex;

  &:hover {
    color: blue;
    transition: 0.3s;
  }
`

const Navbar = styled.div`
  margin: 0 auto;
  display: flex;
`

const HomeLink = styled(Link)`
  text-decoration: none;
  color: blue;
  transition: 0.3s;

  &:hover {
    color: red;
    transition: 0.3s;
  }
`
  
function MainNav() {
  return (
    <>
        <HomeLink to='/'>
          <h1>NH</h1>
        </HomeLink>
        <Navbar>
            <ListLink to='/Music'>Music</ListLink>
            <ListLink to='/Tech'>Tech</ListLink>
            <ListLink to='/Connect'>Connect</ListLink>
        </Navbar>
    </>
  )
}

export default MainNav
