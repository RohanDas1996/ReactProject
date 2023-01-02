import './Login.css';
import { Link } from "react-router-dom";

const Login=()=>{
    return(
        <div className='login'>
            <span className='logintitle'>Login</span>
            <form className='loginform'>
                <label>Email</label>
                <input type='email' placeholder='Enter Your Email'/>
                <label>Password</label>
                <input type='password' placeholder='Enter Your Password'/>
                <button className='loginbuton'><Link className='link' to='/home'>Login</Link></button>
            </form>
        </div>
    )
}
export default Login;