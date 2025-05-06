import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthProvider";

function PrivateRoute() {

   const [isAuth, seveUser, removeUser,] = useAuthContext()

   console.log(isAuth);
   
   return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;