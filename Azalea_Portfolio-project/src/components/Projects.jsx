import React, { useState } from 'react'
import '../Components-style/projects.css';


export default function Projects() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const [isHovered, setIsHovered] = useState(false);

    const images = {
       aesthete: [
            '/project_screenshots/aesthetehome.png',
            '/project_screenshots/aestheteeditproject.png',
            '/project_screenshots/aesthetelogin.png',
            '/project_screenshots/aestheteupcomingprojects.png',
        ],
       cocktailHour: [
            '/project_screenshots/cocktailhourhome.png',
            '/project_screenshots/cocktailhour1.png',
       ],
       wanderlost: [
        '/project_screenshots/wonderlosthome.png',
        '/project_screenshots/wonderlost1.png',
        '/project_screenshots/wonderlost2.png',
        '/project_screenshots/wonderlost3.png',
        '/project_screenshots/wonderlost4.png',
    ],
       devPals: [
        '/project_screenshots/devpals1',
        '/project_screenshots/devpals2',
        '/project_screenshots/devpals3',
    ],
        tickIt: [
        '/project_screenshots/tikit1',
        '/project_screenshots/tickit2',
        '/project_screenshots/tickit3',

        ]
    };

    const handleMouseEnter = (project) => {
        setIsHovered(true);
        setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images[project].length);
        }, 2000); // Change image every 2 seconds
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setCurrentImageIndex(0); // Reset to the first image
    };

    return (
        <div className='projects'>
            <div className='project-page-title'>
                <h1 className='project-main'>Projects</h1>
            </div>
            <div className='projects-container'>
            <a
                    href="https://github.com/AzaleaTopaz/Aesthete_Final"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='project-card'
                    onMouseEnter={() => handleMouseEnter('aesthete')}
                    onMouseLeave={handleMouseLeave}
                >

                    <h1 className='project-title'>Aesthete</h1>
                        <img src={images.aesthete[currentImageIndex]} alt='aesthete home page' className='project-image' />
                    <div className='project-details'>
                        <p className='languages'>Languages:</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Django</p>
                        <p>Python</p>
                        <p>Axios</p>
                        <p>Bulma</p>
                        <p>SQL</p>
                    </div>
                 <div className='project-description'>
                     <p>A social media platform where all artists of different expression come together to collaborate on projects and achieve great outcomes to share with the world.</p>
                    </div>
                </a>

                <a href="https://github.com/AzaleaTopaz/Cocktail-API" target="_blank" rel="noopener noreferrer" className='project-card'>
                    <h1 className='project-title'>Cocktail Hour</h1>
                        <img src='/project_screenshots/cocktailhourhome.png' alt='cocktail hour home page' className='project-image' />
                    <div className='project-details'>
                        <p className='languages'>Languages:</p>
                        <p>JavaScript</p>
                        <p>Axios</p>
                        <p>CSS</p>
                    </div>
                        <div className='project-description'>
                     <p>A directory using thecocktaildb through Axios to search for cocktail recipes to entertain guests.</p>
                    </div>
                </a>

                <a href="https://github.com/AzaleaTopaz/WanderLost-FullStack-App" target="_blank" rel="noopener noreferrer" className='project-card'>
                    <h1 className='project-title'>Wanderlost</h1>
                        <img src='/project_screenshots/wanderlost1.png' alt='wanderlost home page' className='project-image'/>
                    <div className='project-details'>
                        <p className='languages'>Languages:</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>MongoDB</p>
                        <p>Axios</p>
                        <p>CSS</p>
                    </div>
                        <div className='project-description'>
                     <p>View and add different attractions from different cities in different countries to plan their trips.</p>
                    </div>
                </a>

                <a href="https://github.com/kingwilldabeast/dev-pals" target="_blank" rel="noopener noreferrer" className='project-card'>
                    <h1 className='project-title'>Dev Pals</h1>
                        <img src='/project_screenshots/devpals1.png' alt='dev pals home page' className='project-image'/>
                    <div className='project-details'>
                        <p className='languages'>Languages:</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>MongoDB</p>
                        <p>Python</p>
                        <p>Axios</p>
                        <p>Bootstrap</p>
                    </div>
                        <div className='project-description'>
                     <p>Collaborative group app where individuals in tech can connect with one another. </p>
                    </div>
                </a>

                <a href="https://github.com/kfharoun/tick-it" target="_blank" rel="noopener noreferrer" className='project-card'>
                    <h1 className='project-title'>Tikit</h1>
                        <img src='/project_screenshots/tikit1.png' alt='tikit home page' className='project-image'/>
                    <div className='project-details'>
                        <p className='languages'>Languages:</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Django</p>
                        <p>Python</p>
                        <p>Axios</p>
                        <p>SQL</p>
                    </div>
                        <div className='project-description'>
                     <p>Collaborative group app where individuals can view when and where their favorite artists will be performing. </p>
                    </div>
                </a>
            </div>
        </div>
    );
}
