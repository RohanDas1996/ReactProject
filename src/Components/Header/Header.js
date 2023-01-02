import './Header.css';
import img1 from '../Assets/Images/HeaderImage.jpg';

const Header=()=>{
    return(
        <div className='header'>
            <div className='header-title'>
                <span className='header-title-small'>React</span>
                <span className='header-title-big'>Blog</span>
            </div>
            <img className='header-img' src={img1} alt='img'/>
        </div>
    )
}
export default Header;