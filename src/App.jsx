
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopExit from './components/PopExit/PopExit'
import Header from './components/Header/header'
import MainContainer from './components/MainContainer/MainContainer'
import Modal from './components/Modal/Modal'
import PopBrowse from './components/PopBrowse/PopBrowse'
import Registration from './components/Registration/Registration'
import './App.css'
import './signin.css'
import './signup.css'

function App() {
  return (
    <>
           <div className="wrapper">
     
		{/* <Modal/>
		<Registration/> */}
      <PopExit/>
      <PopNewCard/>
	  <PopBrowse/>
      <Header/>
	  <MainContainer/>
    </div>
    
    </>
  )
}

export default App
