
import tw from "tailwind-styled-components"


export default function Home() {
  return (
    
    <Wrapper>
      <ButtonsContainer>
        <FirstButtons>
          
          <ButtonImg src="https://img.icons8.com/office/16/000000/documents.png"/>
          
        </FirstButtons>
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/color/48/000000/search-more.png"/>
        </FirstButtons>
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/color/48/000000/merge-git.png"/>
        </FirstButtons>
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/office/16/000000/insect.png"/>
        </FirstButtons>
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/color/48/000000/four-squares.png"/>
        </FirstButtons>
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Pentagon-virtual-keyboard-others-inmotus-design-2.png"/>
        </FirstButtons>
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/external-flatarticons-blue-flatarticons/65/000000/external-arrow-arrow-flatarticons-blue-flatarticons-5.png"/>
        </FirstButtons>

      </ButtonsContainer>
    </Wrapper>
  )
}



const Wrapper = tw.div`

`


const ButtonsContainer = tw.div`

`
const FirstButtons = tw.div`

`
const ButtonImg = tw.img`
h-10 w-10 border-white
`