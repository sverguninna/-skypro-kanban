import * as S from './Modal.styled'
import { signİn } from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../../Context/AuthProvider';

function Modal(params) {

    const navigate = useNavigate()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [isAuth, seveUser] = useAuthContext()
    const [errors, setErrors] = useState(false);

    /*  const validateForm = () => {
 
         if (lo) {
 
         } else {
 
         }
 
     }; */
    const handleSubmit = async () => {

        if (login === '' && password === '') {
            setErrors(true)
        }
        try {
            const data = await signİn({ login, password })
            console.log(data);
            seveUser(data)
            navigate("/");
            console.log(localStorage);
        }
        catch (error) {
            setErrors(true)
            return error
        }
    };

    return (

        <S.ContainerSignin>
            <S.Modal>
                <S.ModalBlock>
                    <S.ModalTtlH>
                        <S.ModalTtlH>Вход</S.ModalTtlH>
                    </S.ModalTtlH>
                    <S.ModalFormLogin id="formLogIn" >
                        {!errors ? <S.ModalInputLogin onChange={(e) => {
                            setLogin(e.target.value)

                        }} value={login} type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                            : <S.InputErrorLog onChange={(e) => {
                                setLogin(e.target.value)

                            }} value={login} type="text" name="login" id="formlogin" placeholder="Эл. почта" />}

                        {!errors ? <S.ModalInputPas onChange={(e) => {
                            setPassword(e.target.value)

                        }} value={password} type="password" name="password" id="formpassword" placeholder="Пароль" /> : <S.InputErrorPas onChange={(e) => {
                            setPassword(e.target.value)

                        }} value={password} type="password" name="password" id="formpassword" placeholder="Пароль" />

                        }

                        {errors && <S.ErrorMessage>Введенные вами данные не распознаны. Проверьте свой логин и пароль и повторите попытку входа. </S.ErrorMessage>}
                        {!errors ? <S.ModalBtnEnter onClick={handleSubmit}><S.ModalBtnEnterA >Войти</S.ModalBtnEnterA></S.ModalBtnEnter> : <S.ModalBtnEnterError onClick={handleSubmit}><S.ModalBtnEnterA >Войти</S.ModalBtnEnterA></S.ModalBtnEnterError>}
                        <S.ModalFormGroup>
                            <S.ModalFormGroupP>Нужно зарегистрироваться?</S.ModalFormGroupP>
                            <S.ModalFormGroupA to='/sing-up'>Регистрируйтесь здесь</S.ModalFormGroupA>
                        </S.ModalFormGroup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.Modal>
        </S.ContainerSignin>
    )
}

export default Modal