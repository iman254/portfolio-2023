import {Link} from 'react-router-dom';

import './_config.scss';
import './_about.scss';
import Navbar from './navbar';
import meAbout from "./media/me-about.png";
import react from "./media/qualities-2.png";
import learn from "./media/qualities-1.png";
import frontEnd from "./media/qualities-3.png";
import debug from "./media/qualities-4.png"

export default function About() {
    return(
      <div className="about">
        <Navbar />
        <h1 className="about-title"> Little bits about Me</h1>
        <div className="content">
            <div className="about-img">
                <img src={meAbout} alt="me img" />
            </div>
            <div className="intro">
                <h3>
                  &quot; Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. &quot; <br /> Steve Jobs
                </h3>
                <p>How is it so hard to write about myself haha! Okay, So I am originally from Kenya proudly and have always been obsessed with why things operate the way they do and 
                how i can get mine to work the same. Coming from a nursing career to tech was the easiest decision I made. So without getting so personal,
                I am a curious, adventurous(thoughtwise) and creative individual. It may have taken so long to get to this, but I enjoy innovation, creativity,
                eye for details, and with a big thirst to learn
                </p>
            </div>
            <div className= 'details'>
                <h1>Why work with me?</h1>

                <ul className="qualities">
                  <li className="items-1">
                    <img src={learn} alt="learn" />
                    <h3>Eager to learn</h3>
                    <p> I have a strong passion for web development and am continuously learning to improve my skills and keep up with the latest trends in React and front-end technologies. 
                        I am adept at quickly picking up new tools and technologies, ensuring I can adapt to the needs of your project.</p>
                  </li>
                  <li className="items-2" >
                    <img src={react} alt="react" />
                    <h3>Foundational Skills in React</h3>
                    <p> Proficient in building interactive user interfaces with React, including use of hooks, components, and state management. 
                        Comfortable with ES6+ features and concepts, ensuring clean, efficient, and modern code.</p>
                  </li>
                  <li className="items-3">
                  <img src={frontEnd} alt="frontEnd" />
                    <h3>Fundamental Front-End Skills</h3>
                    <p>HTML & CSS: Solid understanding of HTML5 and CSS3, capable of creating responsive and visually appealing web pages.
                       Strong grasp of JavaScript fundamentals, enabling the creation of dynamic and interactive web applications.
                    </p>

                  </li>
                  <li className="items-4" >
                  <img src={debug} alt="debug" />
                    <h3>Strong Problem-Solving Skills</h3>
                    <p> I enjoy tackling challenges and finding efficient solutions to coding problems. 
                      Meticulous in writing clean and maintainable code, ensuring a high standard of quality in my work.
                    </p>
                  </li>

                
                </ul>
              <h3 className="to-profile">
                Want to check out my work? Just   
                <Link to="/Work" className='p-link'> Click here!!</Link>
              </h3>
            </div>
        </div>
        
        


      </div> 
        
    )
}