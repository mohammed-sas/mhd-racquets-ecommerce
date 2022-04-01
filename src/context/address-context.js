import axios from "axios";
import { createContext, useContext, useState } from "react";

const AddressContext = createContext(null);

const AddressProvider=({children})=>{
    const value = useAddressActions();
    return(
        <AddressContext.Provider value={value}>{children}</AddressContext.Provider>
    )
}

const useAddressActions=()=>{
    const [addressState,setAddressState] = useState({address:[]});
    const token = localStorage.getItem("token");
    const auth ={
        headers:{
            authorization:token
        }
    }
    const getAddress=async ()=>{
        try{
            const response = await axios.get('/api/user/address',auth);
            if(response.status === 200){
                setAddressState({
                    ...addressState,
                    address : response.data.address
                })
            }
        }catch(error){
            console.log(error);
        }
    }
    const addAddress=async (address)=>{
        try{
            const response = await axios.post('/api/user/address',{address},auth);
            if(response.status === 201){
                setAddressState({
                    ...addressState,
                    address:response.data.address
                })
            }
        }catch(error){  
            console.log(error);
        }
    }
    const deleteAddress=async(id)=>{
        try{
            const response = await axios.delete(`/api/user/address/${id}`,auth);
            if(response.status === 200){
                setAddressState({
                    ...addressState,
                    address:response.data.address
                })
            }
        }catch(error){
            console.log(error);
        }
    }
    const updateAddress=async (address)=>{
        try{
            const response = await axios.post(`/api/user/address/${address._id}`,{address},auth);
            if(response.status === 200){
                setAddressState({
                    ...addressState,
                    address:response.data.address
                })
            }
        }catch(error){
            console.log(error);
        }
    }

    return {addressState,getAddress,addAddress,deleteAddress,updateAddress};
}


const useAddress=()=>useContext(AddressContext);


export {useAddress,AddressProvider};