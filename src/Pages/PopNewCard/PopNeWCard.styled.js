import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PopNewCardS = styled.div`
  display:block;
    width: 100%;
    min-width: 375px;
    height: 100%;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 6;
`
const PopNewCardContainer = styled.div `  
    width: 100%;
    height: 100%;
    min-height: 100vh;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
 `
const PopNewCardBlock = styled.div `
 display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
  `;
const PopCardContent = styled.div`
  display: block;
  text-align: left;
`
const PopCardTtl = styled.h3`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 20px;
`
const PopCardClose = styled(NavLink)` 
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94A6BE;
  cursor: pointer;
  &:hover {
  color: #000000;
}
`
const Subttl =styled.label.attrs((props)=>({
  htmlFor: props.htmlFor
}))`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
const PopCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`
const PopCardForm = styled.div`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;` 

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
`
const FormNewInput = styled.input.attrs((props)=>({
  type:props.type,
  name:props.name,
  placeholder:props.placeholder,
  autoFocus:props.autoFocus
}))`
  margin: 20px 0;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
    &::-moz-placeholder{ /* .form-new__area::-moz-placeholder  */
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
 }
  &::placeholder/*  .form-new__area::placeholder */ {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}

`
const FormNewArea = styled.textarea.attrs((props)=>({
  type:props.type,
  name:props.name,
  placeholder:props.placeholder,
  autoFocus:props.autoFocus
}))`
 max-width: 370px;
  margin-top: 14px;
  height: 200px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
    &::-moz-placeholder{ 
   font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
 }
  &::placeholder {
  font-weight: 400;
  font-size: 14px;
  line-height: 1px;
  color: #94A6BE;
  letter-spacing: -0.14px;
}
`

const PopCardCalendar = styled.div`
    width: 100%;
    width: 182px;
    margin-bottom: 20px;
`
const CalendarTtl = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
const CalendarP = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
`
const CalendarPSpan = styled.span`
  color: #000000;
`

const CalendarBlock = styled.div `
  display: block;
`
const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`
const CalendarContent = styled.div `
  margin-bottom: 12px;
`
const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`
const CalendarDayName = styled.div`
  color: #94A6BE;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`
const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`
const CalendarCell = styled.div` 
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
  &:hover {
  color: #94A6BE;
  background-color: #EAEEF6;
  }
`
const CalendarCellOtherMonth = styled(CalendarCell)`

    opacity: 0;

`
const CalendarCellCurrent= styled(CalendarCell)`
  font-weight: 700;
`
const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`
const CalendarPeriod = styled.div`
  padding: 0 7px;
`

/* ._active-day {
  background-color: #94A6BE;
  color: #FFFFFF;
} */



const Categories = styled.div`
  margin-bottom: 20px;
`
const CategoriesThemes =styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`
const CategoriesP= styled.div`
  margin-bottom: 14px;
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
`
const CategoriesTheme = styled.div` 
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
`
const CategoriesOrange =styled(CategoriesTheme)`
  background-color: #FFE4C2;
  color: #FF6D00;
`

const CategoriesGreen = styled(CategoriesTheme)`
  background-color: #B4FDD1;
  color: #06B16E;
`

const CategoriesPurple = styled(CategoriesTheme)`
  background-color: #E9D4FF;
  color: #9A48F1;
`
  const OrangeP = styled.p `
    background-color: #FFE4C2;
    color: #FF6D00;
  `
  
  const GreenP = styled.p`
    background-color: #B4FDD1;
    color: #06B16E;
  `
  
  const PurpleP = styled.p` 
    background-color: #E9D4FF;
    color: #9A48F1;
  `
  

const CategoriesThemeP =styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 14px;
  white-space: nowrap; 
`

const ActiveCategory = styled.div`
  opacity: 1 !important;
`

 const FormNewCreate=  styled.button`
  width: 132px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #FFFFFF;
  float: right;
`
const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`
const  NavActionSVG = styled.svg.attrs((props)=>({
  xmlns:props.xmlns,
  width: props.width,
  height: props.height,
  viewBox: props.viewBox,
}))`
  fill: #94A6BE;
`
const Input = styled.input.attrs((props)=>({
  type:props.type,
  value:props.value,
}))

export {PopNewCardS, PopNewCardContainer, PopNewCardBlock, PopCardContent, PopCardClose, PopCardTtl, PopCardForm, PopCardWrap,FormBlock,FormNewInput,FormNewArea, Subttl, PopCardCalendar,
  CalendarBlock, CalendarCell,CalendarCells, CalendarContent, CalendarDayName, CalendarDaysNames,CalendarMonth,CalendarNav,CalendarTtl,
  CalendarCellOtherMonth, CalendarP, CalendarPSpan, CalendarPeriod,CalendarCellCurrent,CategoriesThemes,CategoriesThemeP,CategoriesTheme,CategoriesP,Categories,
  CategoriesPurple, CategoriesOrange, CategoriesGreen, ActiveCategory, OrangeP, GreenP,PurpleP, FormNewCreate, NavActions, NavAction,
  NavActionSVG, Input,
}