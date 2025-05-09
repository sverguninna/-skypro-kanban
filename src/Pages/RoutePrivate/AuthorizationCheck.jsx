import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthProvider";

function PrivateRoute() {

   const [isAuth, seveUser, removeUser, ] = useAuthContext()

   console.log(isAuth.token);
   
   return (isAuth.token ? <Outlet /> : <Navigate to="/sign-in" />) ;
}

export default PrivateRoute;