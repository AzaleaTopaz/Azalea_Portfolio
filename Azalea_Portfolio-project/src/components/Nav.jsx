import { Link } from 'react-router-dom'
import '../Components-style/nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons';


export default function Nav() {
    return (
        <div className='navbar'>
        <Link to='/' className='home-link'><FontAwesomeIcon icon={faHouse} /></Link>
           <ul className='links'>
           <li><Link to='/aboutme' className='aboutme-link'>About Me</Link></li> 
           <li><Link to='/projects' className='projects-link'>Projects</Link></li> 
           <li><Link to='/resume' className='resume-link'>Résumé</Link></li>
           </ul>
            </div>
    )
}