import styled from 'styled-components'
import { MainTitle, ParagraphMain } from '../../UI/Typography'
import { randomColor1, randomColor3 } from '../../UI/ColorGenerator'

export const ConnectTitle = styled(MainTitle)`
    color: ${randomColor1};
`

export const ConnectParagraph = styled(ParagraphMain)`
    color: ${randomColor3};
`
