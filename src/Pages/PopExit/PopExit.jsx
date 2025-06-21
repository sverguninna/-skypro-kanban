import * as S from "./PopExit.styled"
import { useAuthContext } from "../../Context/AuthProvider"
function PopExit() {
    const [isAuth, seveUser, removeUser] = useAuthContext()
    // function  clearUser () {
    //     localStorage.clear()
    // } 
    
    return (
        < S.PopExitS /* id="popExit" */>
            <S.PopExitContainer>
                <S.PopExitBlok>
                    <S.PopExitTTL>
                        < S.PopExitTTLH>Выйти из аккаунта?</S.PopExitTTLH>
                    </S.PopExitTTL>
                    <div /* className="pop-exit__form" id="formExit"  */>
                        <S.PopExitForm>
                            < S.PopExitExitYes id="exitYes" onClick={removeUser} ><S.PopExitExitYesA to="/sing-in">Да, выйти</S.PopExitExitYesA> </S.PopExitExitYes>
                            <S.PopExitExitNo id="exitNo"><S.PopExitExitNoA to="/">Нет, остаться</S.PopExitExitNoA> </S.PopExitExitNo>
                        </S.PopExitForm>
                    </div>
                </S.PopExitBlok>
            </S.PopExitContainer>
        </S.PopExitS>
    )
}

export default PopExit