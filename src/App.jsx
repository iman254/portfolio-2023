import './_app.scss'
import Navbar from './assets/navbar'
import meImage from "./assets/media/me.png"
import name from './assets/media/name.png'
import create from './assets/media/create.png'
import responsive from './assets/media/responsive.png'

export default function App() {
  

  return (
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
  )
}



