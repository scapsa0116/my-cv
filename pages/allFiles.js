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
here I am 

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
bg-white border-spacing-y-20 w-40 border-r-2
`

