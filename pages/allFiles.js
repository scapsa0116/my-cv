import React from 'react'
import tw from "tailwind-styled-components"
import HomeButons from "./components/HomeButons"



const allFiles = () => {
  return (
    <Wrapper>
        <MainButtons>
        <HomeButons/>
        </MainButtons>

      
     <AllFilesContainer>
      <ExplorerContainer>
      <Header>Explorer</Header>
      <ThreeDots>...</ThreeDots>
      </ExplorerContainer>
      


     </AllFilesContainer>
    

    </Wrapper>
    )}

export default allFiles


const Wrapper = tw.div`
flex flex-1 flex-row text-black
`
const MainButtons = tw.div` 


`

const AllFilesContainer = tw.div` =
bg-gray-500 border-spacing-y-20 w-40 border-r-2 
`

const Header = tw.div` 
text-white p-4

`

const ExplorerContainer = tw.div`
flex flex-1 flex-row space-x-5 border
`
const ThreeDots = tw.div`
text-white p-3 
`