import * as S from './Registration.styled'
import { useState } from 'react';
import { signUp } from '../../services/api';
import { useNavigate } from "react-router-dom";


function Registration(params) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        login: "",
        password: "",
    });
    console.log(formData)

    const [errors, setErrors] = useState(false);
    console.log(errors);
    const [errorsAPi, setErrorsApi] = useState(false)
    const [checkError, setcheckError] = useState(false)
   
    const validateForm = () => {

        if (formData.name === '' || formData.login === '' || formData.password === '') {
            setErrors(true);
            setcheckError(true)
        }else{
            setErrors(false)
            setcheckError(false)
            return true
        }

    };

    // функция отправки формы
    const handleSubmit = async () => {
       if ( validateForm()) {
        console.log(validateForm());
        try {
            console.log(formData);
            const data = await signUp(formData)
            localStorage.setItem("userInfo", JSON.stringify(data));
            navigate("/");
            console.log(localStorage);
        }
        catch (error) {
            setErrorsApi(true)
            setcheckError(true)
            return error
        }
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
                        {!checkError ? <S.ModalInputName onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }} value={formData.name} type="text" name="name" placeholder="Имя" /> : <S.InputErrorName onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        
                        }} value={formData.name} type="text" name="name" placeholder="Имя" />}
                        {!checkError ? <S.ModalInputLogin onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        
                        }} value={formData.login} type="text" name="login" placeholder="Эл. почта" /> : <S.InputErrorLog onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                        }} value={formData.login} type="text" name="login" placeholder="Эл. почта" />}
                        {!checkError ? <S.ModalInputPas onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })

                        }} value={formData.password} type="password" name="password" placeholder="Пароль" /> : <S.InputErrorPas onChange={(e) => {
                            setFormData({
                                ...formData,
                                [e.target.name]: e.target.value,
                            })
                          
                        }} value={formData.password} type="password" name="password" placeholder="Пароль" />}
                        {errors && <S.ErrorMessage> Введенные вами данные не корректны.
                            Чтобы завершить регистрацию, заполните все поля в форме. </S.ErrorMessage>}
                        {errorsAPi && <S.ErrorMessage> Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку.</S.ErrorMessage>}
                        {!checkError ? <S.ModalBtnEnter onClick={handleSubmit}><S.ModalBtnEnterA >Зарегестрироваться</S.ModalBtnEnterA></S.ModalBtnEnter> : <S.ModalBtnEnterError onClick={handleSubmit}><S.ModalBtnEnterA >Войти</S.ModalBtnEnterA></S.ModalBtnEnterError>}
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