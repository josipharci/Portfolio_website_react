import './index.scss';
import Project_1 from '../../assets/images/Project1.png'

const Project = () => {
    return(
        <div className="Container_project">
            <div className="Card">
                <img src={Project_1} alt="img1"/>
                <h2>Interactive card</h2>
                <p>Interactive card with data entry. Html, Sass, JavaScript</p>
                <a className='project1'
                 target="_blank"
                 rel='noreferrer'
                 href='https://interactive-card-ashy.vercel.app/'>
                    Project link
                 </a>
            </div>
        </div>
    );
}
export default Project;