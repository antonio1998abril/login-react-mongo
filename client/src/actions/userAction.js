 import axios from 'axios'

 const register= newUser=>{
     return axios
     .post('users/register',{
         name:newUser.name,
         email:newUser.email,
         password:newUser.password
     }).then(res=>{
         console.log("Usuario Registrado")
     })
 }

 const login=user=>{
     return axios
     .post('users/login',{
         email:user.email,
         password:user.password
     })
     .then(res=>{
         localStorage.setItem('usertoken',res.data)
         return res.data
     })
     .catch(err=>{
         console.log(err)
     })
 }
const getProfile = user => {
    return axios
      .get('users/profile', {
        //headers: { Authorization: ` ${this.getToken()}` }
      })
      .then(response => {
        console.log(response)
        return response.data
      })
      .catch(err => {
        console.log(err)
      })
  }

 export {register,login,getProfile}