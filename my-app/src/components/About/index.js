import './index.scss';
import Border from '../../assets/images/border.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';



const About = () => {
    return(
      <div className='Container_about'>
        <div className="Content_left_about">
            <h2 className="Heading">About me</h2>
            <p className="Text">
            My name is Josip. I am from Osijek, Croatia. <br/>I am 23 years old. I finished for Front-end and Back-end Developer. 1 year of learning and improving skills.
            </p>
            <div className="Text_two">
                <h3>Skills</h3>
                <p>HTML and CSS 
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
                <p>JavaScript
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star '><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
                <p>Php and SQL
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
                <p>SASS/LESS
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star '><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
                <p>CSS frameworks (Bootstrap,Foundation)
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
                <p>JavaScript Libraries (React)
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
                <p>WordPress (CMS)
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star active_s'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                   <span className='Star'><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                </p>
            </div>
        </div>
        <div className='Content_right_about'>
                <img src={Border} alt="Border"/>
        </div>
    </div>
    );
}

export default About;
