import { HeaderS, HeaderBlok, Container, HeaderLogo, HeaderLogoDark, HeaderNav, MyNavLink, Headerİmg, HeaderUser, HeaderUserPopSet, UserPopName, UserPopTheme, UserPopMail, PopThemeP, PopThemeInput, PopButton, PopButtonA} from "./Header.styled"
import { useState } from "react"
import logo from '../../../public/images/logo.png';
import { NavLink } from "react-router-dom";

function Header(params) {
    const [userName, setUserName ] = useState(JSON.parse( localStorage.getItem('userInfo')) || {login:'Имя'})
   

    const [showPopUpUser, setShowPopUpUser] = useState(false) // [variable, setVariable]
    /* const style = showPopUpUser ? {display: 'block'} : {display: 'none'} */

    function toggleUserPopUp() {
        setShowPopUpUser(!showPopUpUser)
    }
    function renderingNewPopCard(params) {
        return (<PopNewCard />)
    }


    return (<HeaderS>
        <Container>
            <HeaderBlok>
                <HeaderLogo /* className="header__logo _show _light" */>
                    <a href="" target="_self"><Headerİmg src={logo} alt="logo" /></a>
                </HeaderLogo>
                <HeaderLogoDark >
                    <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
                </HeaderLogoDark>
                <HeaderNav>
                    <MyNavLink to='/pop-new-card'  >Cоздать новую задачу</MyNavLink> 
                    <HeaderUser onClick={toggleUserPopUp} >{userName.login} </HeaderUser>
                    {showPopUpUser && <HeaderUserPopSet /*  className="header__pop-user-set pop-user-set" */ /* style={style} *//*  id="user-set-target" */>
                        <UserPopName>Ivan Ivanov</UserPopName>
                        < UserPopMail >ivan.ivanov@gmail.com</UserPopMail >
                        <UserPopTheme>
                            <PopThemeP>Темная тема</PopThemeP>
                            <PopThemeInput type="checkbox"  name="checkbox"></PopThemeInput>
                        </UserPopTheme>
                        <PopButton type="button" ><PopButtonA to='/pop-exit'>Выйти</PopButtonA></PopButton>
                    </HeaderUserPopSet >}
                </HeaderNav>
            </HeaderBlok>
        </Container>
    </HeaderS>)
}




export default Header