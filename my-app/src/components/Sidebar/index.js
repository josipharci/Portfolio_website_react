import { Link,NavLink } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import LogoSublime from '../../assets/images/logo-sub.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='Logo' to='/'>
            <img className='Logo-img'src={Logo} alt="LOGO"/>
            <img className='Sub-logo' src={LogoSublime} alt="JOSIP"/>
        </Link>
        <NavLink exact='true' activeclassname='active' to='/'>
            <FontAwesomeIcon icon={faHome} color='#fff'/>
        </NavLink>
    </div>
)

export default Sidebar;