import './index.scss';
import Project_1 from '../../assets/images/Project1.png'
import Project_2 from '../../assets/images/Project2.png'
import Project_3 from '../../assets/images/Project3.png'
import Project_4 from '../../assets/images/Project4.png'
import Project_5 from '../../assets/images/Project5.png'
const Project = () => {
    return(
        <div className="Container_project">
            <h2 className="Header_p">Projects</h2>
            <a className="Card" 
                 target="_blank"
                 rel='noreferrer'
                 href='https://interactive-card-ashy.vercel.app/'>
                <img src={Project_1} alt="img1"/>
                <div className="Centered">
                <h2>Interactive card</h2>
                <p>This fun project will be an excellent way to practice DOM manipulation and form validation while also putting your HTML and CSS skills to the test.</p>
                <p className="atr">HTML / SCSS / JS</p>
                </div>  
            </a>
            <a className="Card" 
                 target="_blank"
                 rel='noreferrer'
                 href='https://news-homepage-chi.vercel.app/'>
                <img src={Project_2} alt="img1"/>
                <div className="Centered">
                <h2>News homepage</h2>
                <p>This news homepage will be an excellent opportunity to practice your CSS Grid skills. There will be lots of tricky decisions to make and plenty of learning opportunities!</p>
                <p className="atr">HTML / CSS / JS</p>
                </div>  
            </a>
            <a className="Card" 
                 target="_blank"
                 rel='noreferrer'
                 href='https://product-preview-card-woad.vercel.app/'>
                <img src={Project_3} alt="img1"/>
                <div className="Centered">
                <h2>Product preview card component</h2>
                <p>This HTML & CSS-only challenge will be perfect for anyone starting to build responsive projects.</p>
                <p className="atr">HTML / CSS</p>
                </div>  
            </a>
            <a className="Card" 
                 target="_blank"
                 rel='noreferrer'
                 href='https://q-rcode-component.vercel.app/'>
                <img src={Project_4} alt="img1"/>
                <div className="Centered">
                <h2>QR code component</h2>
                <p>A perfect first challenge if you're new to HTML and CSS. The card layout doesn't shift, so it's ideal if you haven't learned about building responsive layouts yet.</p>
                <p className="atr">HTML / CSS</p>
                </div>  
            </a>
            <a className="Card" 
                 target="_blank"
                 rel='noreferrer'
                 href='https://tip-calculator-app-xi-murex.vercel.app/'>
                <img src={Project_5} alt="img1"/>
                <div className="Centered">
                <h2>Tip calculator app</h2>
                <p>This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!</p>
                <p className="atr">HTML/ LASS /JS</p>
                </div>  
            </a>
        </div>
    );
}
export default Project;