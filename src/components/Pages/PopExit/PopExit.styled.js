import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PopExitS = styled.div`
 display: block;
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 5;
`;
const PopExitContainer = styled.div`
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
const PopExitBlok = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
const PopExitTTL = styled.div `
  text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
`
const PopExitTTLH =styled(PopExitTTL)``
const  PopExitForm = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const PopExitExitYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565EEF;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  margin-right: 10px;
  &:hover {
    background-color: #33399b;
  } 
`
const PopExitExitYesA = styled(NavLink)`
  width: 100%;
  height: 100%;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
`
const PopExitExitNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #565EEF);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #FFFFFF;
  &:hover{
    background-color: #33399b;
    color: #FFFFFF;
  }
`
 const PopExitExitNoA = styled(NavLink)`
  width: 100%;
  height: 100%;
  color: #565EEF;
  display: flex;
  align-items: center;
  justify-content: center;
`

export {PopExitExitNoA, PopExitExitNo, PopExitExitYesA, PopExitExitYes, PopExitS, PopExitContainer, PopExitBlok, PopExitTTL, PopExitTTLH, PopExitForm}