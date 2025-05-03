import { createContext, useContext, useState, useEffect } from "react";
import { cardList } from "../mock/data";
import { getTasks } from "../services/api";

const TasksContext = createContext(null)


export const TasksProvider = ({ children }) => {
  const [listTasks, setListTasks] = useState([])
  const user = JSON.parse(localStorage.getItem('userInfo'))
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

console.log(listTasks);
 

  return (
    <TasksContext.Provider value={[listTasks]}>{children}</TasksContext.Provider>
  )

}

export const useTasksContext = () => {
  return useContext(TasksContext)
}