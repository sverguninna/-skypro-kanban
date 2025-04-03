import styled, { createGlobalStyle } from "styled-components";


const HeaderS = styled.div` 
    width: 100%;
    margin: 0 auto;
    background-color: #FFFFFF;
`;
const HeaderBlok = styled.div`
   height: 70px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    position: relative;
    top: 0;
    left: 0;
    padding: 0 10px;
`
const Container = styled.div`
    max-width: 1260px;
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;
`
const HeaderLogo = styled.div`
    width: 85px;
    
`


const Headerİmg = styled.img.attrs((props)=>  ({
    src: props.src,
    alt: props.alt
}))`
  width: 85px;
`
const HeaderLogoDark = styled(HeaderLogo)`
    display: none; 
`
const HeaderNav = styled.nav`
    max-width: 290px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

`
const HeaderButton = styled.button`
    width: 178px;
    height: 30px;
    border-radius: 4px;
    background-color: #565EEF;
    color: #FFFFFF;
    border: none;
    font-size: 14px;
    line-height: 1;
    font-weight: 500;
    margin-right: 20px;
`
const HeaderButtonLink = styled.a`
 color: FFFFFF;
`
const HeaderUser = styled.a`
  height: 20px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 20px;
    color: #565EEF;
    &:hover{
        background-color: #33399b;
        border-left-color: #33399b;
        border-bottom-color: #33399b;}
`
const HeaderUserPopSet = styled.div` 
    display: block;
    position: absolute;
    top: 61px;
    right: 0;
    width: 213px;
    height: 205px;
    border-radius: 10px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    background: #FFF;
    box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
    padding: 34px;
    text-align: center;
    z-index: 2;`

const UserPopName = styled.p`
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;`

const UserPopMail = styled.p`
    color: #94A6BE;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 10px;
`   
const UserPopTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;

` 
const PopThemeP = styled.p`
   color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
`
const PopThemeInput = styled.input.attrs((props)=>  ({
    type: props.type,
    name: props.name,
}))`
 position: relative;
    width: 24px;
    height: 13px;
    border-radius: 100px;
    background: #EAEEF6;
    outline: none;
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #94A6BE;
    transition: 0.5s;
  }
   &:checked[type=checkbox]::before {
    left: 12px;
  } 
  
`
const PopButton = styled.button.attrs((props)=>({
    type: props.type
}))`
   &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }` 
const PopButtonA = styled.a`
 &:hover{
    color: #FFFFFF;
  }
`
export {HeaderS, HeaderBlok, Container, HeaderLogo, HeaderLogoDark , HeaderNav, HeaderButton, HeaderButtonLink, Headerİmg, HeaderUser, HeaderUserPopSet,UserPopName,  UserPopMail, UserPopTheme, PopThemeP, PopThemeInput, PopButton, PopButtonA}