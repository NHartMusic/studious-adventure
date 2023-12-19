
import styled from 'styled-components'
import {
  Github_White,
  IG_White,
  LinkedIn_White,
} from '../Assets/Icons'

const Icon = styled.img`
    width: 100%;
    height: 100%;
    min-width: 15px; 
    min-height: 15px;
    max-width: 30px; 
    max-height: 30px;
    padding: 10px;
`

const LinkWrapper = styled.div`
  display: flex;
  margin: 0 auto;
`

const Navbar = styled.div`
  display: flex;
  margin: 0 auto;
  float: right;
  width: 25%; 
`

function SocialNav() {
  return (
    <>
        <Navbar>
            <LinkWrapper>
            <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                <Icon src={LinkedIn_White} />
            </a>
            </LinkWrapper>
            <LinkWrapper>
            <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                <Icon src={IG_White} />
            </a>
            </LinkWrapper>
            <LinkWrapper>
            <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                <Icon src={Github_White} />
            </a>
            </LinkWrapper>
        </Navbar>   
    </>
  )
}

export default SocialNav
