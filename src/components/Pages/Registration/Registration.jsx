import * as S from './Registration.styled'
import { useState } from 'react';
import { signUp } from '../../../services/api';
import { useNavigate } from "react-router-dom";


function Registration(params) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });
    console.log(formData)

    const [errors, setErrors] = useState(true);
    console.log(errors);

   

    const validateForm = () => {

        if (formData.name !==''  && formData.login !=='' && formData.password !=='') {
            setErrors(false);
        }

    };

    // функция отправки формы
   const handleSubmit = async () => {
     try { 
     console.log(formData);
    const data = await signUp(formData)
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate("/");
    console.log(localStorage);
    }
     catch (error) {
       console.log(error);
       return error
    }
 };


    return (
        <S.ContainerSignup>
            <S.Modal>
                <S.ModalBlock>
                    <S.ModalTtlH>
                        <S.ModalTtlH>Регистрация</S.ModalTtlH>
                    </S.ModalTtlH>
                    <S.ModalFormLogin id="formLogUp" >
                        <S.ModalInputName onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                            validateForm()
                        }} value={formData.name} type="text" name="name" placeholder="Имя" />
                        <S.ModalInputLogin onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                            validateForm()
                        }} value={formData.login} type="text" name="login" placeholder="Эл. почта" />
                        <S.ModalInputPas onChange={(e) =>{
                             setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                            validateForm()
                        }} value={formData.password} type="password" name="password" placeholder="Пароль" />
                        <S.ModalBtnEnter disabled={errors} onClick={handleSubmit} > Зарегистрироваться{/* <S.ModalBtnEnterA href="../main.html">Зарегистрироваться</S.ModalBtnEnterA> */} </S.ModalBtnEnter>
                        <S.ModalFormGroup>
                            <S.ModalFormGroupP>Уже есть аккаунт?  <S.ModalFormGroupA to="/sing-in">Войдите здесь</S.ModalFormGroupA></S.ModalFormGroupP>
                        </S.ModalFormGroup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.Modal>
        </S.ContainerSignup>
    )
}

export default Registration