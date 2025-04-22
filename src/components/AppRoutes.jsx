import { Route, Routes } from "react-router-dom";
import MainPage from '../components/Pages/MainPage/MainPage'
import Modal from '../components/Pages/Modal/Modal'
import PopBrowse from '../components/Pages/PopBrowse/PopBrowse'
import PopExit from '../components/Pages/PopExit/PopExit'
import PopNewCard from '../components/Pages/PopNewCard/PopNewCard'
import Registration from '../components/Pages/Registration/Registration'
import NotFoundPage from "../components/Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/RoutePrivate/AvtorizCheck";
import { useState } from "react";
function AppRoutes() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem('userInfo'));
    
    return   <Routes>
               <Route element={<PrivateRoute isAuth={isAuth} />}></Route>
               <Route path="/" element={<MainPage />}>
                <Route path="/pop-browse/:id" element={<PopBrowse />} />
                <Route path="/pop-exit" element={<PopExit />} />
                <Route path="/pop-new-card" element={<PopNewCard />} />
            </Route>
            <Route path="/sing-up" element={<Registration />} />
            <Route path="/sing-in" element={<Modal />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
  
    

}
export default AppRoutes