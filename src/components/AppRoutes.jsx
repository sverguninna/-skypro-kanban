import { Route, Routes } from "react-router-dom";
import MainPage from '../Pages/MainPage/MainPage'
import Modal from '../Pages/Modal/Modal'
import PopBrowse from '../Pages/PopBrowse/PopBrowse'
import PopExit from '../Pages/PopExit/PopExit'
import PopNewCard from '../Pages/PopNewCard/PopNewCard'
import Registration from '../Pages/Registration/Registration'
import NotFoundPage from "../Pages/NotFound/NotFound";
import PrivateRoute from "../Pages/RoutePrivate/AuthorizationCheck";
import { useState } from "react";


function AppRoutes() {

   
   
    
    return   <Routes>
               <Route element={<PrivateRoute/>}></Route>
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