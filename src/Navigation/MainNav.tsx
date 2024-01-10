
//media queries
import { MenuBreakpoint } from '../UI/MediaQueries'

//react imports
import { Link } from "react-router-dom"

//styles imports
import styled from 'styled-components'
import { randomColor2, randomColor4, randomColor6 } from '../UI/ColorGenerator'

const ListLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  color: white;
  font-size: 1.4em;
  font-weight: 200;
  padding: 10px;
  text-decoration: none;
  transition: 0.3s;
  margin: 10px auto;
  display: flex;
`

const MusicLink = styled(ListLink)`
  &:hover {
    color: ${randomColor2};
    transition: 0.3s;
  }
`

const BlogLink = styled(ListLink)`
  &:hover {
    color: ${randomColor6};
    transition: 0.5s;
  }
`

const TechLink = styled(ListLink)`
  &:hover {
    color: ${randomColor4};
    transition: 0.4s;
  }
`

const Navbar = styled.div`
  display: flex;
  float: left;
  width: 25%;

  @media ${MenuBreakpoint} {
    width: 100%;
    float: none;
  }
`

function MainNav() {
  return (
    <>
      <Navbar>
        <MusicLink to='/Music'>Music</MusicLink>
        <TechLink to='/Tech'>Tech</TechLink>
        <BlogLink to='/Blog'>Blog</BlogLink>
      </Navbar>
    </>
  )
}

export default MainNav
