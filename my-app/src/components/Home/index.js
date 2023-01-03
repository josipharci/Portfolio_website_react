import './index.scss';
import Logo from '../../assets/images/logo-sub.png';


const Home = () => {
    return (
      <div className="Container">
        <div className="Content_left">
          <h2 className="Heading">Hi, <br/>My name is Josip Harci. <br/>I am 23 years old. <br/>I come from Osijek.<br/>I am a Front-end developer.</h2>
          <p className="Text">HTML - CSS(LESS/SASS) - JavaScript - React</p>
          <a href="/About" className="Buttom">MORE...</a>
        </div>
        <div className="Content_right">
           <div className="Logo-box">
             <img className='Logo-img'src={Logo} alt="LOGO"/>
           </div>
        </div>
      </div>
    );
}
export default Home;