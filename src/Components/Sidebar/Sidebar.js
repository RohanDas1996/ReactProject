import './Sidebar.css';
import sideimg from '../Assets/Images/SidebarImage.jpg';

const Sidebar=()=>{
    return(
        <div className='sidebar'>
            <div className='sidebar-item'>
                <span className='sidebar-title'>ABOUT ME</span>
                <img src={sideimg} alt='img' />
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
            </div>
            <div className='sidebar-item'>
                <span className='sidebar-title'>CATEGORIES</span>
                <ul className='sidebar-list'>
                    <div>
                       <li className='sidebarlistitem'>Life</li>
                       <li className='sidebarlistitem'>Tech</li>
                       <li className='sidebarlistitem'>Style</li>
                    </div>
                    <div>
                       <li className='sidebarlistitem'>Sport</li>
                       <li className='sidebarlistitem'>Music</li>
                       <li className='sidebarlistitem'>Cinema</li>
                    </div>
                </ul>
            </div>
            <div className='sidebar-item'>
                <span className='sidebar-title'>FOLLOW US</span>
                <div className='sidebar-social'>
                    <i className="sidebar-icons fa-brands fa-square-facebook"></i>
                    <i className="sidebar-icons fa-brands fa-square-twitter"></i>
                    <i className="sidebar-icons fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
export default Sidebar;