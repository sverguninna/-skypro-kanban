import { createContext, useContext, useState, useEffect } from "react";
import { cardList } from "../mock/data";
import { getTasks } from "../services/api";
import { useAuthContext } from "./AuthProvider";
const TasksContext = createContext(null)


export const TasksProvider = ({ children }) => {
  const [listTasks, setListTasks] = useState([])
  const [isAuth, seveUser, removeUser,] = useAuthContext()
  const user = isAuth
  const token = user.token

useEffect( ()=> {
  const getData = async () => {
    try {
     const data = await getTasks(token)
     setListTasks(data)
 
    }
    catch(error) {
    console.log(error);
    }
  }
  getData()
},[])


console.log(user, token, listTasks);

  return (
    <TasksContext.Provider value={[listTasks]}>{children}</TasksContext.Provider>
  )

}

export const useTasksContext = () => {
  return useContext(TasksContext)
}