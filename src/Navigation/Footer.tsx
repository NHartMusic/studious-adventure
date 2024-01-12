import styled from 'styled-components'
import MainNav from './MainNav'
import HomeNav from './HomeNav'
import SocialNav from './SocialNav'

import { MenuBreakpoint } from '../UI/MediaQueries'

const FooterWrapper = styled.div`
    display: flex;
    margin: 20px 10px;
    background-color: blue;

     @media ${MenuBreakpoint} {
        display: block !important;
    } 
`

function Footer() {
    return (
        <>
            <FooterWrapper>
        
                <HomeNav />
               
            </FooterWrapper>
        </>
    )
}
  
export default Footer
