
//media queries
import { MenuBreakpoint } from '../UI/MediaQueries'

//react imports
import { Link } from "react-router-dom"

//styles imports
import styled from 'styled-components'
import { randomColor3 } from '../UI/ColorGenerator'

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;

  @media ${MenuBreakpoint} {
    width: 100%;
  }
`

const HomeLink = styled(Link)`
  font-family: 'Roboto', sans-serif;
  font-size: 2.0rem;
  text-decoration: none;
  color: white;
  transition: 0.3s;
  display: flex;
  margin: 10px auto;

  &:hover {
    color: ${randomColor3};
    transition: 0.3s;
  }
`

function MainNav() {
    return (
      <>
        <Container>
          <HomeLink to='/'>△</HomeLink>
        </Container>
      </>
    )
  }
  
  export default MainNav
