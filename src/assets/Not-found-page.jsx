import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';
import bgVideo from './media/404-bg.mp4';
import title from './media/title-img.png';
import './_404.scss';
import './_config.scss';



export default function Not_found_page() {
    return(
        <div className="not-found">
            <video autoPlay muted loop className= {bgVideo}>
                <source src={bgVideo} type="video/mp4" />
                <source src="/videos/404-bg.webm" type="video/webm" />
                Your browser does not support the video tag.
            </video>
            <div className='content'>
                <img src={title} alt="title-img" />
                <h1 className="title">Looks like you&apos;re lost</h1>
                <h2 className="sub">Dont worry... this can happen <FontAwesomeIcon icon={faFaceSmileWink} style={{color: "#e7d3cb"}} spinPulse/></h2>
                <h3 className="redirect">
                    <Link to='/' className='to'>Go to homepage!</Link> </h3>
            </div>
      
        </div>
    )
}