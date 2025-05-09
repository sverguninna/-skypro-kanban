import { NavLink } from "react-router-dom";
import styled from "styled-components";

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
/* ._active-day {
  background-color: #94A6BE;
  color: #FFFFFF;
} */

const CalendarCellWeek = styled.div`
    display: grid
;
    grid-template-columns: repeat(7, 1fr);

`  
export {PopCardCalendar, CalendarBlock, CalendarCell,CalendarCells, CalendarContent, CalendarDayName, CalendarDaysNames,CalendarMonth,CalendarNav,CalendarTtl,
    CalendarCellOtherMonth, CalendarP, CalendarPSpan, CalendarPeriod,CalendarCellCurrent, NavActions, NavAction,
    NavActionSVG, CalendarCellWeek}
