import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";

const orange = {
    backgroundColor: "#FFE4C2",
    color:'#FF6D00',
}

const green = {
    backgroundColor:'#B4FDD1',
    color:'#06B16E',
}

const purple = {
    backgroundColor: '#E9D4FF',
    color: '#9A48F1'
}
const CardsCard = styled.div`
 width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
`
const CardGroup = styled.div`
    width: 100%;
    height: 20px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const cardAnimation = keyframes`
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  ` 

const CardsItem = styled.div.attrs((props) => ({
    id: props.id
}))`
    padding: 5px;
    animation-name: ${cardAnimation};
    animation-duration: 500ms;
    animation-timing-function: linear;
`



const CardTheme = styled.div`
    width: auto;
    height: 20px;
    padding: 5px 14px;
    border-radius: 18px;
` 

const CollorCard = styled.p`
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
`

const StatusWebDising = styled(CardTheme)`
   background-color: ${orange.backgroundColor};
   color: ${orange.color}
`
const StatusCopywriting = styled(CardTheme)`
   background-color: ${green.backgroundColor};
   color: ${green.color}
`
const StatusReserch = styled(CardTheme)`
   background-color: ${purple.backgroundColor};
   color: ${purple.color}
`
const CardLink = styled(NavLink).attrs((props)=>({
    target: props.target
}))``

const CardBTN = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2px;
`
const CardBTNDiv = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94A6BE;
`

 const CardTitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #000000;
    margin-bottom: 10px;
`
const CardContent = styled.div`
    height: 64px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
`
const CarDate =styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const CardDateSVG = styled.svg`
    width: 13px;
`
const CarDateP = styled.p`
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94A6BE;
    letter-spacing: 0.2px;
`
export { CardsItem, CardTheme, CollorCard, StatusWebDising, StatusCopywriting, StatusReserch, CardsCard , CardGroup, CardLink, CardBTN, CardBTNDiv, CardTitle, CardContent, CarDate,CarDateP,CardDateSVG}