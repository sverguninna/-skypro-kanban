import { createContext, useContext, useState, useEffect } from "react";
import { cardList } from "../mock/data";
import { getTasks, postTasks  } from "../services/api";
import { useAuthContext } from "./AuthProvider";



const TasksContext = createContext(null)


export const TasksProvider = ({ children }) => {
  const [listTasks, setListTasks] = useState([])
  const [isAuth, seveUser, removeUser, ] = useAuthContext()


  console.log(isAuth)


useEffect( ()=> {
  const getData = async () => {
    try {
     const data = await getTasks(isAuth.token)
     setListTasks(data)
 
    }
    catch(error) {
    console.log(error);
    }
  }
  getData()
},[isAuth])

/*  const postData = async () => {
   try{
    const data = await postTasks()
   }
 } */

  return (
    <TasksContext.Provider value={[listTasks]}>{children}</TasksContext.Provider>
  )

}

export const useTasksContext = () => {
  return useContext(TasksContext)
}