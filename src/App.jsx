import GlobalStyle from './components/GlobalStyle'
import PopExit from './components/PopExit/PopExit'
import Header from './components/Header/Header'
import MainContainer from './components/MainContainer/MainContainer'
import Modal from './components/Modal/Modal'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Registration from './components/Registration/Registration'
import './App.css'
import './signin.css'
import './signup.css'
import styled from 'styled-components'


const Wrapper = styled.div`
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: #F1F1F1;
`;
function App() {
  return (
    <>
     <GlobalStyle/>
      <Wrapper>
        {/* <Modal/>
		<Registration/> */}
        <PopExit />
{/*         <PopNewCard /> */}
        <PopBrowse />
        <Header/>
        <MainContainer />
      </Wrapper>
    </>
  )
}

export default App
