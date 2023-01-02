import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

const Home=()=>{
    return(
        <>
        <Navbar/>
        <Header/>
        <div className='home'>
            <Posts/>
            <Sidebar/>
        </div>
        <Footer/>
        </>
    )
}
export default Home;