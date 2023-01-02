import { Link,NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import LogoSublime from '../../assets/images/logo-sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome , faDiagramProject , faUser , faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='Logo' to='/'>
            <img className='Logo-img'src={Logo} alt="LOGO"/>
            <img className='Sub-logo' src={LogoSublime} alt="JOSIP"/>
        </Link>
        <div className='Links_box'>
        <NavLink className='Home' exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#fff'/>
        </NavLink>
        <NavLink className='Project' exact='true' activeclassname='active' to='/Project'>
            <FontAwesomeIcon icon={faDiagramProject} color='#fff'/>
        </NavLink>
        <NavLink className='About' exact='true' activeclassname='active' to='/About'>
            <FontAwesomeIcon icon={faUser} color='#fff'/>
        </NavLink>
        <NavLink className='Contact' exact='true' activeclassname='active' to='/Contact'>
            <FontAwesomeIcon icon={faEnvelope} color='#fff'/>
        </NavLink>
        </div>
        <div className='SLinks'>
        <a className='Linked'
           target="_blank"
           rel='noreferrer'
           href='https://www.linkedin.com/in/josip-harci-9063331b1/'
        >
            <FontAwesomeIcon icon={faLinkedin} color='#fff'/>
        </a>  
        <a className='Github'
           target="_blank"
           rel='noreferrer'
           href='https://github.com/josipharci'
        >
            <FontAwesomeIcon icon={faGithub} color='#fff'/>
        </a>
        <a className='Facebook' 
           target="_blank"
           rel='noreferrer'
           href='https://www.facebook.com/harci99'
        >
            <FontAwesomeIcon icon={faFacebook} color='#fff'/>
        </a>
        </div>
    </div>
)

export default Sidebar;