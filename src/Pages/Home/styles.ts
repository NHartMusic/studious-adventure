import styled from 'styled-components'
import { MainTitle, ParagraphMain } from '../../UI/Typography'
import { randomColor4, randomColor5 } from '../../UI/ColorGenerator'

export const HomeTitle = styled(MainTitle)`
    color: ${randomColor4};
`

export const HomeParagraph = styled(ParagraphMain)`
    color: ${randomColor5};
`
