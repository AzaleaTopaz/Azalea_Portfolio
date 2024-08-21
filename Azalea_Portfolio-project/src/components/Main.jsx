import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Aboutme from './Aboutme'
import Projects from './Projects'
import Resume from './Resume'


export default function Main() {
    return (
        <div Classname='main'>
           <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutme' element={<Aboutme />} />
            <Route path='projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
            </Routes>
        </div>
    )
}