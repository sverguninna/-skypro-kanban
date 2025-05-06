import axios from "axios"
const BaseAPi = 'https://wedev-api.sky.pro/api/kanban'
const Registration = 'https://wedev-api.sky.pro/api/user';
const Logİn = 'https://wedev-api.sky.pro/api/user/login'
const postAPI = 'https://wedev-api.sky.pro/api/kanban'
const ApiUserTasks = ' https://wedev-api.sky.pro/api/kanban/:id'



export async function getTasks(token) {
   try {
      const data = await axios.get(BaseAPi, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      console.log(data.data.tasks);
      return data.data.tasks

   } catch (error) {
      console.log(error);
   
      throw new Error(error.message)
   }
}


export async function getTasksUser(id, token) {
   try {
      const data = await axios.get(ApiUserTasks + id, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      console.log(data.data);
      return data.data

   } catch (error) {
      throw new Error(error.message)
   }
}

export async function changeTasks(id, token, { title,
   topic,
   status,
   description,
   date }) {
   try {
      const data = await axios.put(
         ApiUserTasks + id,
         {
            title,
            topic,
            status,
            description,
            date
         },
         {
            headers: {
               "Content-Type": "",
            },
         }
      )
      console.log(data.data);
      return data.data

   } catch (error) {
      throw new Error(error.message)
   }
}

export async function postTasks({ title,
   topic,
   status,
   description,
   date }) {
   try {
      const data = await axios.post(
         postAPI,
         {
            title,
            topic,
            status,
            description,
            date
         },
         {
            headers: {
               "Content-Type": "",
            },
         }
      )
      return data.data
   } catch (error) {
      throw new Error(error.message)
   }
}


export async function signİn({ login, password }) {
   try {
      const data = await axios.post(
         Logİn,
         { login, password },
         {
            headers: {
               "Content-Type": "",
            },
         }
      );
      return data.data.user;
   } catch (error) {
      console.log(error);
      throw new Error(error.response.data.error);
   }
}

export async function signUp(User) {
   try {
      const data = await axios.post(
         Registration,
         User,
         {
            headers: {
               "Content-Type": "",
            },
         }
      );
      return data.data.user;

   } catch (error) {
      console.log(error);
      throw new Error(error.response.data.error);
   }

}

export async function deleteTasks(id) {
   try {
      const data = await axios.delete(
         ApiUserTasks + id,

         {
            headers: {
               "Content-Type": "",
            },
         }
      )
      return data.data
   } catch (error) {
      throw new Error(error.message)
   }
}