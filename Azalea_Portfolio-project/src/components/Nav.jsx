import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div Classname='navbar'>
           <div Classname='links'>
            <Link to='/'>Home</Link>
            <Link to='/aboutme'>About Me</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Résumé</Link>
           </div>
            </div>
    )
}