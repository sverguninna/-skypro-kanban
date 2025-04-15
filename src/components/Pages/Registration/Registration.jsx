import * as S from './Registration.styled'
function Registration(params) {
    return (
        <S.ContainerSignup>
            <S.Modal>
                <S.ModalBlock>
                    <S.ModalTtlH>
                        <S.ModalTtlH>Регистрация</S.ModalTtlH>
                    </S.ModalTtlH>
                    <S.ModalFormLogin id="formLogUp" >
                        <S.ModalInputName type="text" name="first-name" id="first-name" placeholder="Имя" />
                        <S.ModalInputLogin type="text" name="login" id="loginReg" placeholder="Эл. почта" />
                        <S.ModalInputPas type="password" name="password" id="passwordFirst" placeholder="Пароль" />
                        <S.ModalBtnEnter id="SignUpEnter"><S.ModalBtnEnterA href="../main.html">Зарегистрироваться</S.ModalBtnEnterA> </S.ModalBtnEnter>
                        <S.ModalFormGroup>
                            <S.ModalFormGroupP>Уже есть аккаунт?  <S.ModalFormGroupA to="/modal">Войдите здесь</S.ModalFormGroupA></S.ModalFormGroupP>
                        </S.ModalFormGroup>
                    </S.ModalFormLogin>
                </S.ModalBlock>
            </S.Modal>
        </S.ContainerSignup>
    )
}

export default Registration