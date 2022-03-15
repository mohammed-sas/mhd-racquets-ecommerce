import axios from "axios";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);
const AuthProvider =({children})=>{
    const auth = useProvideAuth();
    return (
        <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    )
}

const useProvideAuth=()=>{
        const [currentUser,setCurrentUser]= useState(null);
        const signup= async (user)=>{
            try{
                let response = await axios.post('/api/auth/signup',user);
                localStorage.setItem("token",response.data.encodedToken);
                setCurrentUser(response.data.createdUser);
                return response.status;
            }catch(error){
                console.log(error);
            }
        }
    return {currentUser,signup};
}

const useAuth=()=>useContext(AuthContext);
export {useAuth,AuthProvider};