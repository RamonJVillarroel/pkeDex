import images from '../../assets/img/images'
import Witget from './Witgget'
import './navbar.css'
const NavBar =()=>{
    return(
        <>
        <div className='container-nav'>
        <img src={images.img1} alt="fotomenu" />
       <Witget />
       </div>
       </>
    )
}

export default NavBar