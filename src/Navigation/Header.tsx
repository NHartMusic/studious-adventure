import styled from 'styled-components'
import MainNav from './MainNav'
import HomeNav from './HomeNav'
import SocialNav from './SocialNav'

const HeaderWrapper = styled.div`
    display: flex;
    margin: 0 auto;
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
