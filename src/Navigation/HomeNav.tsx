import { Link } from "react-router-dom"
import styled from 'styled-components'

const HomeLink = styled(Link)`
  text-decoration: none;
  color: blue;
  transition: 0.3s;
  display: flex;
  margin: 0 auto;

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
      </>
    )
  }
  
  export default MainNav
