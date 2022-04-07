import { Navigate,useLocation } from 'react-router-dom';
import {useAuth} from '../../context'
const RequireAuth=({children})=>{
    const location =useLocation();
    const {currentUser} = useAuth();
    return currentUser ?(children) : (
        <Navigate to="/login" state={{from:location}} replace/>
    )
}

export  {RequireAuth};