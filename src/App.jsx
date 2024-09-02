import './_app.scss'
import Navbar from './assets/navbar'
import meImage from "./assets/media/me.png"
import name from './assets/media/name.png'
import create from './assets/media/create.png'
import responsive from './assets/media/responsive.png'
import meAbout from "./assets/media/me-about.png";
import react from "./assets/media/qualities-2.png";
import learn from "./assets/media/qualities-1.png";
import frontEnd from "./assets/media/qualities-3.png";
import debug from "./assets/media/qualities-4.png"
import { Link } from 'react-router-dom';

export default function App() {
  const info = [
    {key: "Age" , value : 29},
    {key: "Residence" , value : "Romania"},
    {key: "Email" , value : "imanstephanie254@gmail.com"},
    {key: "phone No" , value : "0734503414"},
    {key: "availability" , value : "Available"}

  ]

  return (
    <div className='main'>
    {/* Main section */}
      <div className='app'>
        <Navbar />
        <div className='background-title'>
          <h1> A FRONT-END DEVELOPER</h1>
        </div>
        <div className = 'me-img'>
          <img src={meImage} alt="me" />
        </div>
        <div className="name">
          <img src={name} alt="name" />
        </div>
        <div className="create">
          <img src={create} alt="create" />
        </div>
        <div className="responsive">
          <img src={responsive} alt="responsive" />
        </div>

        <p className="brief">
          I am an optimistic, adventurous and eager to bring your visions to life.
        </p>

        </div>
{/* About section */}
      
      <div className="about">
        <h1 className="about-title"> Little bits about Me</h1>
        <div className="content">
          <div className="about-img" >
              <img src={meAbout} alt="me img" />
              </div>
          <div className="intro">
              <h3>
                &quot; If it doesnt give me goosebumps, I wont even bother! &quot; <br /> Stephanie Iman
              </h3>
              <p>
              I am a curious, adventurous and a creative individual with no believes in limits. It may have taken so long to get here, but I enjoy innovation, creativity, have an
              eye for details, and with a big thirst to learn
              </p>
              <ul>
                {info.map((item, index) => (
                  <li key={index} className={`info-item ${index % 2 === 0 ? 'even' : 'odd'}`}>
                    <strong>{item.key}:</strong> {item.value}
                  </li>
                ))}
              </ul>
          </div>

          
        </div>
          
      </div> 

      {/* Service section */}
      <div className= 'details'>
        <h1 className="service-title">Why work with me?</h1>

        <ul className="qualities">
          <li className="items-1">
            <img src={learn} alt="learn" />
            <h3>Eager to learn</h3>
            <p> Continuous learning and improvement of skills, keep up with the latest trends in React and front-end technologies. </p>
          </li>
          <li className="items-2" >
            <img src={react} alt="react" />
            <h3>Foundational Skills in React</h3>
            <p> Proficiency in building interactive user interfaces with React, integrating ES6+ features including use of hooks, components, and state management. 
               </p>
          </li>
          <li className="items-3">
          <img src={frontEnd} alt="frontEnd" />
            <h3>Fundamental Front-End Skills</h3>
            <p>Solid understanding of HTML5 and CSS3, and JavaScript fundamentals, capable of creating responsive and visually appealing web pages.
                
            </p>

          </li>
          <li className="items-4" >
          <img src={debug} alt="debug" />
            <h3>Strong Problem-Solving Skills</h3>
            <p> Dedication to tackling challenges and finding efficient solutions to coding problems, ensuring a high standard of quality in my work. 
            
            </p>
          </li>

        
        </ul>
      <h3 className="to-profile">
        To download the full resume, <span><Link to='https://drive.google.com/file/d/16PBxWAhMzNLSjq0Q25CYdNpKyjEIV9vT/view?usp=sharing'>Click here!</Link></span>   
      
      </h3>
    </div>


    </div>

  )
}



