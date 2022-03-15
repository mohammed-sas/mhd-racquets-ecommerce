import Navbar from '../../components/Navbar/Navbar';
import '../login/login.css';
import './signup.css'
const Signup = () => {
    return (
        <div>
            <Navbar/>
            <main className="login-container">
                <div className="login-form-container bg-white ">
                    <h2 className="centered-text grey">Signup</h2>
                    <form action="" className="login-form">
                        <label htmlFor="email">Email address 
                            <br/> <input id="email" name="email" type="email" placeholder="abc@neog.com"/>
                        </label>
                        <label htmlFor="fname">First Name 
                            <br/> <input id="fname" name="fname" type="text" placeholder="First Name"/>
                        </label>
                        <label htmlFor="lname">Last Name 
                            <br/> <input id="lname" name="lname" type="text" placeholder="Last Name"/>
                        </label>
                        
                        <label htmlFor="password">Password
                            <div id="password" className="password">
                                <input type="password" value="12345678"/>
                                <i className="fas fa-eye"></i>
                            </div>
                        </label>
                        <label  htmlFor="password">Confirm Password
                            <div className="password">
                                <input type="text" value="12345678"/>
                                <i className="fas fa-eye-slash"></i>
                            </div>
                        </label>
                        
                        <div>
                            <label htmlFor="accept-condition"><input id="accept-condition" type="checkbox"/> I accept all Terms & Conditions</label>
                            
                        </div>
                        <button className="btn btn-primary">Create New Account</button>
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
