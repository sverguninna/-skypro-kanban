import GlobalStyle from '../../components/GlobalStyle'
import Header from '../../components/Header/Header'
import MainContainer from '../../components/MainContainer/MainContainer'
import '../../App.css'
import '../../signin.css'
import '../../signup.css'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'

const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #F1F1F1;
`;
function MainPage() {
  return (
    <>
     <GlobalStyle/>
      <Wrapper>
        <Header/>
        <MainContainer />
        <Outlet/>
      </Wrapper>
    </>
  )
}
export default  MainPage