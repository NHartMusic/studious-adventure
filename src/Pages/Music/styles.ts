import styled from 'styled-components'
import { MainTitle, ParagraphMain } from '../../UI/Typography'
import { randomColor2, randomColor5 } from '../../UI/ColorGenerator'

export const MusicTitle = styled(MainTitle)`
    color: ${randomColor5};
`

export const MusicParagraph = styled(ParagraphMain)`
    color: ${randomColor2};
`
