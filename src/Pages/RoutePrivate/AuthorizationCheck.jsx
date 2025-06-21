import { Outlet, Navigate } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthProvider";

function PrivateRoute() { 


 const [isAuth, seveUser, removeUser,] = useAuthContext()

 console.log(isAuth)

  if (!isAuth) {
    return <Navigate to="/sing-in"/>
  }
   

   return <Outlet />;
}

export default PrivateRoute;