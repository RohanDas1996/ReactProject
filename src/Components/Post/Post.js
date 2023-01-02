import './Post.css';
import { Link } from 'react-router-dom';
import pstimg from '../Assets/Images/PostsImage.jpg';

const Post=()=>{
    return(
        <div className='post'>
            <img className='post-img' src={pstimg} alt='img'/>

            <div className='post-info'>
                <div className='post-category'>
                    <span className='post-cat'>Music</span>
                    <span className='post-cat'>Life</span>
                </div>
                <span className='post-title'>
                    <Link className='link' to='/single'>Lorem Ispum dolor sit amet</Link>
                </span>
                <hr/>
                <span className='post-date'>1 hour ago</span>
            </div>
            <p className='post-description'>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been
                the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of 
                type and scrambled it to make a type specimen book.
                It has survived not only five centuries.
            </p>
        </div>
    )
}
export default Post;