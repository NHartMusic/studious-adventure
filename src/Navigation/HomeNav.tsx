import { Link } from "react-router-dom"
import styled from 'styled-components'
import { randomColor3 } from '../UI/ColorGenerator'

const HomeLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 2.0rem;
  text-decoration: none;
  color: white;
  transition: 0.3s;
  display: flex;
  margin: 0 auto;

  &:hover {
    color: ${randomColor3};
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
