import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PopBrowse = styled.div`
    display: block;
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`
const PopBrowseContainer = styled.div`
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
const PopBrowseBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    position: relative;
`
const PopBrowseContent = styled.div`
    display: block;
    text-align: left;
`
const PopBrowseTopBlock = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
`
const PopBrowseTtl = styled.h3`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
`
const CategoriesThemeActiv = styled.div`
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 1 !important;

`
const CategoriesOrange =styled(CategoriesThemeActiv)`
  background-color: #FFE4C2;
  color: #FF6D00;
`

const CategoriesGreen = styled(CategoriesThemeActiv)`
  background-color: #B4FDD1;
  color: #06B16E;
`

const CategoriesPurple = styled(CategoriesThemeActiv)`
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
const PopBrowseStatus =styled.div`
    margin-bottom: 11px;
`
const StatusP = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    margin-bottom: 14px;
` 
const  StatusThemes = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
`
const StatusTheme = styled.div`
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    background: #94A6BE;
    color: #FFFFFF;
  
`
const StatusThemeHide = styled(StatusTheme)`
     display: block;
     background-color:#94a6be00;
    color: #94A6BE ;
    &:hover{
      background: #94A6BE;
      color: #FFFFFF;
    }
`
const StatusThemeGray = styled(StatusTheme)`

    background: #94A6BE;
    color: #FFFFFF;
  
`
const GrayP= styled.p`
    background: #94A6BE;
    color: #FFFFFF;
  
`
const StatusThemeP  =styled.p`
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
`
const PopBrowseWrap = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`
const PopBrowseForm = styled.div`
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
`
const FormBrowseBlok = styled.div`
 display: flex;
 flex-direction: column;
`
const Subttl =styled.label.attrs((props)=>({
    htmlFor: props.htmlFor
  }))`
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
`
const FormBrowseArea = styled.textarea.attrs((props)=>({
    name:props.name,
    placeholder:props.placeholder,
    readOnly:props.readOnly,
  }))`
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #EAEEF6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;
    &::-moz-placeholder {
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
const CalendarBlock = styled.div `
  display: block;
`
const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`
const CalendarMonth = styled.div`
  color: #94A6BE;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
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
const CalendarPeriod = styled.div`
  padding: 0 7px;
`
const CalendarP = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;
`
const CalendarPSpan = styled.span`
  color: #000000;
`
const PopBrowseBTNBrowse =styled.div`
       display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
   
`
const PopBrowseBTNBrowseEdit = styled(PopBrowseBTNBrowse)``
const BTNGroup = styled.div`
 gap: 8px;
    display: flex;
`
const EditBTNBor = styled.button`
  height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
   &:hover{ background-color: #33399b;
    color: #FFFFFF; }
`
const EditBTNBorA = styled.a`
  color: #565EEF;
`
const DeleteBTNBor = styled.button`
  height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
   &:hover{ background-color: #33399b;
    color: #FFFFFF; }
`
const DeleteBTNBorA = styled(NavLink)`
  color: #565EEF;
`
const CloseBTNBg = styled.button`
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
    height: 30px;
    width: 16%;
  &:hover{
    background-color: #33399b;
  }
` 
const CloseBTNBgA = styled(NavLink)`
   color: #FFFFFF;
`
const Hide = styled.div`
    display: none;
`
const Save = styled(CloseBTNBg)`
  height: 30px;
    width: 100px;
`

const SaveA = styled(CloseBTNBgA)``

const Cancel = styled(DeleteBTNBor)``

const CancelA = styled(DeleteBTNBorA)``

/*  ._btn-bor {
    border-radius: 4px;
    border: 0.7px solid var(--palette-navy-60, #565EEF);
    outline: none;
    background: transparent;
    color: #565EEF;
  }
  ._btn-bor a {
    color: #565EEF;
  }
  
  ._btn-bg {
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
  }
  ._btn-bg a {
    color: #FFFFFF;
  }
  
   
   */
export {PopBrowse, PopBrowseContainer, PopBrowseBlock,PopBrowseContent,PopBrowseTopBlock, PopBrowseTtl, CategoriesThemeActiv, CategoriesGreen, CategoriesOrange, CategoriesPurple,OrangeP,PurpleP,GreenP, PopBrowseStatus,StatusP,
StatusThemes, StatusTheme, StatusThemeHide, StatusThemeGray, StatusThemeP, GrayP, PopBrowseWrap, PopBrowseForm, FormBrowseBlok, Subttl,
FormBrowseArea, PopCardCalendar, CalendarTtl, CalendarBlock, CalendarNav, CalendarMonth, NavActions, NavAction, NavActionSVG, CalendarCell,CalendarCellCurrent, CalendarCellOtherMonth, CalendarCells, CalendarContent, CalendarDayName, CalendarDaysNames, 
CalendarPeriod, CalendarP, CalendarPSpan, PopBrowseBTNBrowse, BTNGroup, EditBTNBor, EditBTNBorA, DeleteBTNBor, DeleteBTNBorA,
CloseBTNBg, CloseBTNBgA, Hide, Save, SaveA,  Cancel, CancelA, PopBrowseBTNBrowseEdit,
}