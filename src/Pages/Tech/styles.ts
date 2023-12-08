import styled from 'styled-components'
import { MainTitle, ParagraphMain } from '../../UI/Typography'
import { randomColor3, randomColor6 } from '../../UI/ColorGenerator'

export const TechTitle = styled(MainTitle)`
    color: ${randomColor6};
`

export const TechParagraph = styled(ParagraphMain)`
    color: ${randomColor3};
`
