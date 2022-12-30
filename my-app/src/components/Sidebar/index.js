import { Link } from 'react-router-dom';
import './index.scss';
import Logo from '../../assets/images/logo.png';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='Logo' to='/'>
            <img src={Logo} alt="LOGO"/>
        </Link>
    </div>
)

export default Sidebar;