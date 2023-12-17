
import styled from 'styled-components'
import { MainTitle, ParagraphMain } from '../../UI/Typography'
import { randomColor2, randomColor5 } from '../../UI/ColorGenerator'

export const MusicTitle = styled(MainTitle)`
    color: ${randomColor5};
    display: flex;
    margin: 0 auto;
`

export const MusicParagraph = styled(ParagraphMain)`
    color: ${randomColor2};
`

export const ListWrapper = styled.ul`
    list-style-type: none;
`
