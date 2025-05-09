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
  ...props
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
...props
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
 ...props
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

const Input = styled.input.attrs((props)=>({
  type:props.type,
  value:props.value,
}))

export {PopNewCardS, PopNewCardContainer, PopNewCardBlock, PopCardContent, PopCardClose, PopCardTtl, PopCardForm, PopCardWrap,FormBlock,FormNewInput,FormNewArea, Subttl,
  CategoriesThemes,CategoriesThemeP,CategoriesTheme,CategoriesP,Categories,
  CategoriesPurple, CategoriesOrange, CategoriesGreen, ActiveCategory, OrangeP, GreenP,PurpleP, FormNewCreate,Input,
}