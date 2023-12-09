import { Link } from "react-router-dom"
import styled from 'styled-components'
import {randomColor2} from '../UI/ColorGenerator'

const ListLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 1.4em;
  font-weight: 200;
  padding: 10px;
  margin: 10px;
  text-decoration: none;
  transition: 0.3s;
  margin: 0 auto;
  display: flex;

  &:hover {
    color: ${randomColor2};
    transition: 0.3s;
  }
`

const Navbar = styled.div`
  display: flex;
  float: left;
`

function MainNav() {
  return (
    <>
      <Navbar>
        <ListLink to='/Music'>Music</ListLink>
        <ListLink to='/Tech'>Tech</ListLink>
        <ListLink to='/Connect'>Connect</ListLink>
      </Navbar>
    </>
  )
}

export default MainNav
