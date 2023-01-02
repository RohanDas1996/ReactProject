import { Link } from 'react-router-dom';
import './Navbar.css';
import Navimg from '../Assets/Images/NavbarImage.jpg';

const Navbar=()=>{

    return(
        <div className="navbar">
            <div className='left'>
            <i className="icons fa-brands fa-square-facebook"></i>
            <i className="icons fa-brands fa-square-twitter"></i>
            <i className="icons fa-brands fa-square-instagram"></i>
            </div>
            <div className='centre'>
                <ul className='navlist navlistspecial'>
                    <li className='list-item'><Link className='link' to='/home'>HOME</Link></li>
                    <li className='list-item'><Link className='link' to='/settings'>PROFILE</Link></li>
                    <li className='list-item'><Link className='link' to='/write'>WRITE</Link></li>
                    <li className='list-item'><Link className='link' to='/'>LOGOUT</Link></li>
                </ul>
            </div>
            <div className='right'>
                <img className='navimg' src={Navimg} alt='img'/>
                <i className="search-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
export default Navbar;