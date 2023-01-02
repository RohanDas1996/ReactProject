import './Settings.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import userimg from '../../Components/Assets/Images/NavbarImage.jpg';
import Footer from '../../Components/Footer/Footer';

const Settings=()=>{
    return(
        <>
        <Navbar/>
        <div className='settings'>
            <div className='settingswrapper'>
                <div className='settingstitle'>
                    <span className='settingsupdatetitle'>Update Your Account</span>
                    <span className='settingsdeletetitle'>Delete Account</span>
                </div>
                <form className='settingsform'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src={userimg} alt='img'/>
                        <label htmlFor='fileinput'>
                            <i className="settingsppicon fa-regular fa-circle-user"></i>
                        </label>
                        <input type='file' id='fileinput' style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Rohan'/>
                    <label>Email</label>
                    <input type='email' placeholder='dasrohan520@gmail.com'/>
                    <label>Password</label>
                    <input type='password'/>
                    <button className='settingssubmit'>Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
        <Footer/>
        </>
    )
}
export default Settings;