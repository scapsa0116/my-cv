import React from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link';


const HomeButons = () => {
  return (
    <Wrapper>


      
      <ButtonsContainer>
      <Link href = "/allFiles">
        <FirstButtons>
          <ButtonImg src="https://img.icons8.com/office/16/000000/documents.png"/>
        </FirstButtons>
        </Link>
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

<ExtraContainer>
      <SecondButtonsContainer>
        <SecondButtons>
          <ButtonImg src="https://img.icons8.com/external-others-inmotus-design/67/000000/external-Avatar-round-icons-others-inmotus-design-7.png"/>
        </SecondButtons>

        <SecondButtons>
          <ButtonImg src="https://img.icons8.com/fluency/48/000000/settings.png"/>
        </SecondButtons>

      </SecondButtonsContainer>

      </ExtraContainer>

    </Wrapper>
  )
}

export default HomeButons

const Wrapper = tw.div`
flex flex-1 flex-col
`


const ButtonsContainer = tw.div`
border-r-2 flex flex-col w-20 items-center space-x-1 py-2

`
const FirstButtons = tw.div`
py-3
`
const ButtonImg = tw.img`
h-10 w-10 
`

const SecondButtonsContainer = tw.div`
border-r-2 flex flex-col w-20 items-center space-x-1 pt-20
`

const SecondButtons = tw.div`
py-3 
`


const ExtraContainer = tw.div`
py-10 border-r-2 flex flex-col w-20
`