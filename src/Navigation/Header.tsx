
//dependencies 
import styled from 'styled-components'
//component imports
import MainNav from './MainNav'
import HomeNav from './HomeNav'
import SocialNav from './SocialNav'
//styles imports
import { blueList } from '../UI/Colors/Blues'


import { MenuBreakpoint } from '../UI/MediaQueries'

const HeaderWrapper = styled.div`
    display: flex;
    margin: 20px 10px;
    background-color: ${blueList[7]};

     @media ${MenuBreakpoint} {
        display: block !important;
    } 

`

function Header() {
    return (
        <>
            <HeaderWrapper>
                <MainNav />
                <HomeNav />
                <SocialNav />
            </HeaderWrapper>
        </>
    )
}
  
export default Header
