import './Write.css';
import Navbar from '../../Components/Navbar/Navbar';
import wrtimg from '../../Components/Assets/Images/WriteImage.jpg';
import Footer from '../../Components/Footer/Footer';

const Write=()=>{
    return(
        <>
        <Navbar/>
        <div className='write'>
            <img className='writeimg' src={wrtimg} alt='img'/>
            <form className='writeform'>
                <div className='writeformgroup'>
                    <label htmlFor='fileinput'>
                        <i className="writeicon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileinput' style={{display:'none'}}/>
                    <input type='text' placeholder='Title' className='writeinput' autoFocus={true}/>
                </div>
                <div className='writeformgroup'>
                    <textarea placeholder='Tell Your Story' type='text' className='writeinput writetext' ></textarea>
                </div>
                <button className='writesubmit'>Publish</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}
export default Write;