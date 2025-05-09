import { createContext } from "react"
import { useState } from "react"
import { useContext } from "react"
import { useEffect } from "react"


const AuthContext = createContext(null);


export const AuthProvider = ({children}) => {

   const [isAuth, setIsAuth] = useState(localStorage.getItem('userInfo'));
    console.log(isAuth.token);
 
   useEffect(() => {
 
    // А тут мы проверяем ЛС, когда приложение запускается
    try {
       if (isAuth) {
        setIsAuth(JSON.parse(isAuth));
       }
    } catch (error) {
    
        console.log(error);
    }
    }, []);

    const seveUser = (userData) => {
        setIsAuth(userData);
        if (userData) {
           localStorage.setItem("userInfo", JSON.stringify(userData));
        } 
    };
    const removeUser =()=>{
        localStorage.removeItem('userInfo')
    }

    return (
        <AuthContext.Provider value={[isAuth, seveUser, removeUser,  ]}>
          {children}
        </AuthContext.Provider>
    )
}


export const useAuthContext = () => {
     return useContext(AuthContext)
}

