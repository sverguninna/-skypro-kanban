import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ContainerSignin = styled.div `
    display: block;
    width: 100vw;
    min-height: 100vh;
    margin: 0 auto;
`
const Modal = styled.div ` 
    width: 100%;
    height: 100%;
    min-width: 320px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ModalBlock = styled.div`
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 368px;
    width: 100%;
    padding: 50px 60px;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`
const ModalTtlH = styled.div`
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.6px;
    margin-bottom: 20px;
`
const ModalFormLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ModalInputLogin = styled.input.attrs((props)=>({
    name:props.name,
    type:props.type,
    placeholder:props.placeholder,
}))` 
    width: 100%;
    min-width: 100%;
    border-radius: 8px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    outline: none;
    padding: 10px 8px;
    margin-bottom: 7px;
    ::-moz-placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
  ::placeholder {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.28px;
  color: #94A6BE;
}
}
`
const ModalInputPas = styled(ModalInputLogin).attrs((props) =>({
    name:props.name,
    type:props.type,
    placeholder:props.placeholder,
}))``

const ModalBtnEnter = styled.button`
    width: 100%;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
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
    &:hover{
        background-color: #33399b;
    }
`
const ModalBtnEnterA = styled(NavLink)`
    width: 100%;
    height: 100%;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalFormGroup = styled.div`
    text-align: center;
`
const ModalFormGroupP = styled.p`
 color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
`
const ModalFormGroupA = styled(NavLink)`
 color: rgba(148, 166, 190, 0.4);
  font-size: 14px;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: -0.14px;
  text-decoration: underline;
`

export {ContainerSignin, Modal, ModalTtlH, ModalBlock, ModalFormLogin, ModalInputLogin, ModalInputPas, ModalBtnEnter, ModalBtnEnterA,ModalFormGroup,ModalFormGroupA,ModalFormGroupP,
}