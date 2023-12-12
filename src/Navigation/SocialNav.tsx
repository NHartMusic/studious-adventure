import { Link } from "react-router-dom"
import styled from 'styled-components'
import IG_White from '../Assets/IG_White.png'
import Github_White from '../Assets/Github_White.png'
import LinkedIn_White from '../Assets/LinkedIn_White.png'

const Icon = styled.img`
    width: 100%;
    height: 100%;
    min-width: 15px; 
    min-height: 15px;
    max-width: 30px; 
    max-height: 30px;
    padding: 10px;
`

const Navbar = styled.div`
  display: flex;
  float: right;
`

function SocialNav() {
  return (
    <>
        <Navbar>
            <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                <Icon src={LinkedIn_White} />
            </a>
            <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                <Icon src={IG_White} />
            </a>
            <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                <Icon src={Github_White} />
            </a>
        </Navbar>   
    </>
  )
}

export default SocialNav
