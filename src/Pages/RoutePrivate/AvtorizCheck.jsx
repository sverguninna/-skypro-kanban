import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthProvider";

function PrivateRoute() {

   const [isAuth] = useAuthContext()

   return isAuth ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;