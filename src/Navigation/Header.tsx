import styled from 'styled-components'
import MainNav from './MainNav'
import HomeNav from './HomeNav'
import SocialNav from './SocialNav'

import { MenuBreakpoint } from '../UI/MediaQueries'

const HeaderWrapper = styled.div`
    display: flex;
    margin: 0 auto;

    /* @media ${MenuBreakpoint} {
        display: block;
    } */

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
