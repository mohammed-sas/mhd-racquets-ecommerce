import Navbar from '../../components/Navbar/Navbar';
import '../login/login.css';
import './signup.css'
import {useState} from 'react';
import {useToggle} from '../../hooks/useToggle';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/auth-context'
const Signup = () => {
    const [showpass,setShowpass] = useToggle(false);
    const [showConfirmpass,setShowConfirmpass] = useToggle(false);
    const [passmatch,setPassmatch]=useState(true);
    const {signup} = useAuth();
    const navigate=useNavigate();
    const [user,setUser] = useState({
        email:"",
        firstName:"",
        lastName:"",
        password:"",
        confirmPassword:"",
    });
    const changeHandler=e=>{
        const {name,value}=e.target;
        setUser({
            ...user,
            [name]:value
        })
    }
    const submitHandler=async (e)=>{
       
        try{
        e.preventDefault();
        if(user.password !== user.confirmPassword){
            setPassmatch(false);
            return;
        }
        let status = await signup(user);
            if(status == 201){
                navigate("/");
            }
        }catch(error){
            console.log(error);
        }
        
    }
    return (
        <div>
            <Navbar/>
            <main className="login-container">
                <div className="login-form-container bg-white ">
                    <h2 className="centered-text grey">Signup</h2>
                    <form action="post" className="login-form" onSubmit={submitHandler}>
                        <label htmlFor="email">Email address 
                            <br/> <input id="email" name="email" onChange={changeHandler} type="email" placeholder="abc@neog.com"/>
                        </label>
                        <label htmlFor="fname">First Name 
                            <br/> <input id="firstName" name="fname" required onChange={changeHandler} type="text" placeholder="First Name"/>
                        </label>
                        <label htmlFor="lname">Last Name 
                            <br/> <input id="lastName" name="lname" required onChange={changeHandler} type="text" placeholder="Last Name"/>
                        </label>
                        
                        <label htmlFor="password">Password
                            <div id="password" className="password">
                                <input name="password" required type={showpass ?"text":"password"}onChange={changeHandler} />
                                <i onClick={setShowpass} className={"fas " + (showpass?"fa-eye":"fa-eye-slash")}></i>
                            </div>
                        </label>
                        <label  htmlFor="confirmPassword">Confirm Password
                            <div className="password">
                                <input name="confirmPassword" required type={showConfirmpass ?"text":"password"} onChange={changeHandler} />
                                <i onClick={setShowConfirmpass} className={"fas " + (showConfirmpass?"fa-eye":"fa-eye-slash")}></i>
                            </div>
                        </label>
                        {passmatch?null: <span className="mismatch">Passwords Not Matching</span>}
                        
                        <div>
                            <label htmlFor="accept-condition"><input id="accept-condition" type="checkbox"/> I accept all Terms & Conditions</label>
                            
                        </div>
                        <input type="submit" value="Create New Account"  className="btn btn-primary"/>
                        <div>
                            <p className="centered-text"><a href="">Already have an account <i className="fas fa-chevron-right"></i></a></p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Signup
