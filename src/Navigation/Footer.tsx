
//component imports
import HomeNav from './HomeNav'
//styles imports
import { blueList } from '../UI/Colors/Blues'
import styled from 'styled-components'
import { MenuBreakpoint } from '../UI/MediaQueries'

const FooterWrapper = styled.div`
    display: flex;
    margin: 20px 10px;
    background-color: ${blueList[8]};

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
