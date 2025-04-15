import * as S from './Modal.styled'

function Modal(params) {
    return (
    <S.ContainerSignin>
        <S.Modal>
            <S.ModalBlock>
                <S.ModalTtlH>
                    <S.ModalTtlH>Вход</S.ModalTtlH>
                </S.ModalTtlH>
                <S.ModalFormLogin id="formLogIn" >
                    <S.ModalInputLogin type="text" name="login" id="formlogin" placeholder="Эл. почта" />
                    <S.ModalInputPas type="password" name="password" id="formpassword" placeholder="Пароль" />
                    <S.ModalBtnEnter id="btnEnter"><S.ModalBtnEnterA to="/">Войти</S.ModalBtnEnterA></S.ModalBtnEnter>
                    <S.ModalFormGroup>
                        <S.ModalFormGroupP>Нужно зарегистрироваться?</S.ModalFormGroupP>
                        <S.ModalFormGroupA to ='/sing-up'>Регистрируйтесь здесь</S.ModalFormGroupA>
                    </S.ModalFormGroup>
                </S.ModalFormLogin>
            </S.ModalBlock>
        </S.Modal>
    </S.ContainerSignin>
    )
}

export default Modal