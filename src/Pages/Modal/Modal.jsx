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
    const [errors, setErrors] = useState(true);


    const validateForm = () => {



    };
    const handleSubmit = async () => {

        if (login === '' && password === '') {
            alert("Введите значения")
        }
        try {
            const data = await signİn({ login, password })
            console.log(data);
            seveUser(data)
            navigate("/");
            console.log(localStorage);
        }
        catch (error) {
            alert(error);
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
                        <S.ModalInputLogin onChange={(e) => {
                            setLogin(e.target.value)
                            validateForm()
                        }} value={login} type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                        <S.ModalInputPas onChange={(e) => {
                            setPassword(e.target.value)
                            validateForm()
                        }} value={password} type="password" name="password" id="formpassword" placeholder="Пароль" />
                        <S.ModalBtnEnter onClick={handleSubmit}><S.ModalBtnEnterA >Войти</S.ModalBtnEnterA></S.ModalBtnEnter>
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