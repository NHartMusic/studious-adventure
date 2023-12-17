
import styled from 'styled-components'
import { MainTitle, ParagraphMain } from '../../UI/Typography'
import { randomColor3, randomColor6 } from '../../UI/ColorGenerator'

export const BlogTitle = styled(MainTitle)`
    color: ${randomColor6};
`

export const BlogParagraph = styled(ParagraphMain)`
    color: ${randomColor3};
`
