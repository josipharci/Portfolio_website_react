import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';
import LogoSublime from '../../assets/images/logo-sub.png';


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='Logo' to='/'>
            <img className='Logo-img'src={Logo} alt="LOGO"/>
            <img className='Sub-logo' src={LogoSublime} alt="JOSIP"/>
        </Link>
    </div>
)

export default Sidebar;