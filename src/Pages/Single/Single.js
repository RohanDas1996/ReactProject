import './Single.css';
import SideBar from '../../Components/Sidebar/Sidebar';
import SinglePost from '../../Components/SinglePost/SinglePost';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';

const Single=()=>{
    return(
        <>
        <Navbar/>
        <div className='single'>
            <SinglePost/>
            <SideBar/>
        </div>
        <Footer/>
        </>
    )
}
export default Single;