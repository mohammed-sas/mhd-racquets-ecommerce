import '../login/login.css';
import './signup.css'
import {useState} from 'react';
import {useToggle} from '../../hooks/useToggle';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context'
import {Link} from 'react-router-dom'
const Signup = () => {
    const [showpass,setShowpass] = useToggle(false);
    const [showConfirmpass,setShowConfirmpass] = useToggle(false);
    const [passmatch,setPassmatch]=useState(true);
    const [passlen,setPasslen] = useState(true);
    const {signup} = useAuth();
    const navigate=useNavigate();
    const [notAgreed,setNotAgreed] = useState(false);
    const [user,setUser] = useState({
        email:"",
        firstName:"",
        lastName:"",
        password:"",
        confirmPassword:"",
        agree:false
    });
    const changeHandler=e=>{
        const {name,value}=e.target;
        if(name ==="agree"){
            setUser({
                ...user,
                [name]:e.target.checked
            })
            return;
        }
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
        if(user.password.length<8){
            setPasslen(false);
            return;
        }
        if(!user.agree){
            setNotAgreed(true);
            return;
        }
        let status = await signup(user);
            if(status == 201){
                navigate(-2);
            }
        }catch(error){
            console.log(error);
        }
        
    }
    return (
        <div>
            <main className="login-container">
                <div className="login-form-container bg-white ">
                    <h2 className="centered-text grey">Signup</h2>
                    <form action="post" className="login-form" onSubmit={submitHandler}>
                        <label htmlFor="email"><span>Email address</span> 
                             <input id="email" name="email" onChange={changeHandler} type="email" placeholder="abc@neog.com"/>
                        </label>
                        <label htmlFor="fname"><span>First Name</span> 
                         <input id="firstName" name="firstName" required onChange={changeHandler} type="text" placeholder="First Name"/>
                        </label>
                        <label htmlFor="lname"><span>Last Name</span> 
                             <input id="lastName" name="lastName" required onChange={changeHandler} type="text" placeholder="Last Name"/>
                        </label>
                        
                        <label htmlFor="password"><span>Password</span>
                            <div id="password" className="password">
                                <input name="password" required type={showpass ?"text":"password"}onChange={changeHandler} />
                                <i onClick={setShowpass} className={"fas " + (showpass?"fa-eye":"fa-eye-slash")}></i>
                            </div>
                        </label>
                        <label  htmlFor="confirmPassword"><span>Confirm Password</span>
                            <div className="password">
                                <input name="confirmPassword" required type={showConfirmpass ?"text":"password"} onChange={changeHandler} />
                                <i onClick={setShowConfirmpass} className={"fas " + (showConfirmpass?"fa-eye":"fa-eye-slash")}></i>
                            </div>
                        </label>
                        {passmatch?null: <span className="mismatch">Passwords Not Matching</span>}
                        {!passlen?<span className="mismatch">Password should be minimum of 8 characters</span>:null}
                        
                        <div>
                            <label htmlFor="accept-condition"><input id="accept-condition" name="agree" onChange={changeHandler} type="checkbox"/> I accept all Terms & Conditions</label>
                        </div>
                        {notAgreed ? <span className="mismatch">Kindly agree to terms and conditions</span>:null}
                        <input type="submit" value="Create New Account"  className="btn btn-primary"/>
                        <div>
                            <p className="centered-text"><Link to="/login">Already have an account <i className="fas fa-chevron-right"></i></Link></p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Signup
