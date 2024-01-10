
//images
import { Nick_01, Hart_01 } from '../../Assets'
//styles imports
import { HomeParagraph } from './styles'
import { ImageContainer, TextContainer } from '../../UI/Containers'
import { BannerImage } from '../../UI/Media'

function Home() {
  return (
    <>
        <TextContainer> 
          <ImageContainer>
            <BannerImage src={Nick_01}/>
            <BannerImage src={Hart_01}/>
          </ImageContainer>
          <HomeParagraph>
            Tortor consequat id porta nibh. Suspendisse sed nisi lacus sed viverra tellus in. Vulputate sapien nec sagittis 
            aliquam malesuada. Posuere lorem ipsum dolor sit amet. At urna condimentum mattis pellentesque id nibh. Phasellus 
            faucibus scelerisque eleifend donec pretium vulputate sapien. Et netus et malesuada fames ac turpis egestas. 
            Ipsum dolor sit amet consectetur adipiscing elit ut. Scelerisque viverra mauris in aliquam sem. Id nibh tortor 
            id aliquet lectus proin nibh nisl. Vestibulum sed arcu non odio euismod lacinia at. Velit scelerisque in dictum 
            non consectetur a.
          </HomeParagraph>
          <HomeParagraph>
            Auctor augue mauris augue neque gravida in fermentum et. Pretium aenean pharetra magna ac placerat vestibulum 
            lectus mauris. Volutpat consequat mauris nunc congue nisi vitae. Quam elementum pulvinar etiam non quam lacus 
            suspendisse faucibus. Gravida quis blandit turpis cursus in hac habitasse. Enim ut tellus elementum sagittis vitae. 
            Eget dolor morbi non arcu risus quis varius. Ornare arcu dui vivamus arcu. Aenean sed adipiscing diam donec adipiscing 
            tristique risus nec. Dolor purus non enim praesent elementum facilisis leo. Habitant morbi tristique senectus et 
            netus. Volutpat odio facilisis mauris sit amet massa vitae tortor. Tortor condimentum lacinia quis vel eros.
          </HomeParagraph>
        </TextContainer>
    </>
  )
}

export default Home
