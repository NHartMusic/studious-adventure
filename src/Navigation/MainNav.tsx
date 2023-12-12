import { Link } from "react-router-dom"
import styled from 'styled-components'
import { randomColor2, randomColor4, randomColor6 } from '../UI/ColorGenerator'

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
`

const MusicLink = styled(ListLink)`
  &:hover {
    color: ${randomColor2};
    transition: 0.3s;
  }
`

const TechLink = styled(ListLink)`
  &:hover {
    color: ${randomColor4};
    transition: 0.4s;
  }
`

const ConnectLink = styled(ListLink)`
  &:hover {
    color: ${randomColor6};
    transition: 0.5s;
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
        <MusicLink to='/Music'>Music</MusicLink>
        <TechLink to='/Tech'>Tech</TechLink>
        <ConnectLink to='/Connect'>Connect</ConnectLink>
      </Navbar>
    </>
  )
}

export default MainNav
