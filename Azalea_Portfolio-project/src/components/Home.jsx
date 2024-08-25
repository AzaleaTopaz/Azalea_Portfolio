import React, { useState, useEffect } from 'react'
import '../Components-style/home.css'

const images = [ 
    '/project_screenshots/aesthetehome.png',
    '/project_screenshots/cocktailhourhome.png',
    '/project_screenshots/devpals1.png',
    '/project_screenshots/wanderlost1.png',
    '/project_screenshots/tikit1.png'
];

export default function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(true);
useEffect(() => {
    const interval = setInterval(() => {
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFade(true);
        }, 500);
    }, 3000);
    return () => clearInterval(interval);
}, []);
    return (
        <div className='home'>
            <div className='home-titles'>
            <h1 className='title'>Azalea Nikitin</h1>
            <h2 className='subtitle'>Software Developer</h2>
            </div>
            <div className='preview-project-background'>
           
        <img src={images[currentImageIndex]} alt='Home' className={`home-image ${fade ? 'fade-in' : 'fade-out'}`} />
        </div>
        </div>
    )
}