// import {Link} from 'react-router-dom';

import './_config.scss';
import './_work.scss';
import Navbar from './navbar';


export default function Work() {
    return (
        <div className="work">
            <Navbar />
            <h1 className="title">My past projects</h1>

            <p className="sub">Here, you&apos;ll find projects built using HTML, CSS, JavaScript, and React, highlighting my skills in creating responsive, interactive, and dynamic websites. Each project demonstrates my ability to design user-friendly interfaces, implement robust functionality, and utilize modern web technologies. Explore my work to see how I bring ideas to life through code, blending creativity and technical expertise to deliver high-quality web solutions.</p>

            <div className="content">
                <div className="project">
                    <h2 className="p-title">Project title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro a debitis temporibus praesentium rerum, unde, blanditiis, esse tempore labore ipsum laboriosam dolore? Voluptate cum aut, animi necessitatibus dicta enim.</p>
                    <img src="" alt="" className="screenshot" />
                </div>
                <div className="project">
                    <h2 className="p-title">Project title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro a debitis temporibus praesentium rerum, unde, blanditiis, esse tempore labore ipsum laboriosam dolore? Voluptate cum aut, animi necessitatibus dicta enim.</p>
                    <img src="" alt="" className="screenshot" />
                </div>
                <div className="project">
                    <h2 className="p-title">Project title</h2>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro a debitis temporibus praesentium rerum, unde, blanditiis, esse tempore labore ipsum laboriosam dolore? Voluptate cum aut, animi necessitatibus dicta enim.</p>
                    <img src="" alt="" className="screenshot" />
                </div>
            </div>
        


        </div>

    )
}