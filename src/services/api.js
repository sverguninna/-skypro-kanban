import axios from "axios";

const BaseAPi = 'https://wedev-api.sky.pro/api/kanban'
const token = ''
const Registration = 'https://wedev-api.sky.pro/api/user' ;
const Logİn ='https://wedev-api.sky.pro/api/user/login'


export async function fetchWords({ token }) {
   try {
      const data = await axios.get(BaseAPi, {
         headers: {
            Authorization: 'Bearer ' + token,
         },
      })
      return data.data
      // когда работаем с axios, не забываем, что результат лежит в ключе datа
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