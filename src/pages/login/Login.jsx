import Navbar from "../../components/Navbar/Navbar"
import './login.css'

const Login = () => {
    return (
        <div>
            <Navbar/>
            <main className="login-container">
                <div className="login-form-container bg-white ">
                    <h2 className="centered-text grey">Login</h2>
                    <form action="" className="login-form">
                        <label for="email">Email address 
                            <br/> <input id="email" name="email" type="email" placeholder="abc@neog.com"/>
                        </label>
                        
                        <label for="password">Password
                            <br/> <input type="password" value="12345678"/>
                        </label>
                        
                        <div className="remember-me-container">
                            <label for="remember-me"><input id="remember-me" type="checkbox"/> Remember me</label>
                            <span><a href="">Forgot Your Password?</a></span>
                        </div>
                        <button className="btn btn-primary">Login</button>
                        <div>
                            <p className="centered-text"><a href="../Signup Page/signup.html">Create New Account <i className="fas fa-chevron-right"></i></a></p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

export default Login
