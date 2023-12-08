import { Link } from "react-router-dom"
import styled from 'styled-components'

const HomeLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 2.0rem;
  text-decoration: none;
  color: white;
  transition: 0.3s;
  display: flex;
  margin: 0 auto;

  &:hover {
    color: blue;
    transition: 0.3s;
  }
`

function MainNav() {
    return (
      <>
          <HomeLink to='/'>NH</HomeLink>
      </>
    )
  }
  
  export default MainNav
