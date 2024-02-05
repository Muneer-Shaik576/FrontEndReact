import axios from 'axios';


const Url="http://localhost:8080"

export const addUser = async (data)=>{
    try{
        return await axios.post(`${Url}/user`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}
export const getUsers= async(id)=>{
    id=id||'';
    try{
       return await axios.get(`${Url}/users/${id}`);
    }catch(error){
        console.log("Error while getting data",error);
    }
}
export const editUser = async (data,id)=>{
    try{
        return await axios.put(`${Url}/editUser`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}
export const getItems = async ()=>{
    try{
        return await axios.get(`${Url}/getitems`);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}
export const getselitems = async (data)=>{
    try{
        return await axios.get(`${Url}/getselitems/${data}`)
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}
export const getuom = async()=>{
    try{
        return await axios.get(`${Url}/getuom`);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}

export const saveDetails = async(data)=>{
    try{
        return await axios.post(`${Url}/savedata`,data);
    }catch(error){
        console.log("Error ehile calling post api",error);
    }
}
export const deleteUser = async (id)=>{
    try{
        return await axios.delete(`${Url}/deleteUser/${id}`);
    }catch(error){
        console.log("Error while calling delete api",error);
    }
}