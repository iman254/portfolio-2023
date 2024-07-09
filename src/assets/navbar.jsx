import './_config.scss';
import './_navbar.scss';
import {Link} from 'react-router-dom';

export default function Navbar() {
        return (
                <div className='navbar'>
          <h1 className='logo-title'><Link to='/'>Iman</Link></h1>
          <ul className='nav-list'>
              <li className="nav-item">
                      <a href="/About">About</a>
              </li>
              <li className="nav-item">
                      <a href="/Work">Work</a>
              </li> 
              <li className="nav-item">
                      <a href="#">Contact</a>
              </li>
          </ul>  
      </div>
        )
}
