import React, { useState, useEffect } from 'react';
import '../Components-style/projects.css';

const projectData = [
    {
        name: 'aesthete',
        title: 'Aesthete',
        url: 'https://github.com/AzaleaTopaz/Aesthete_Final',
        description: 'A social media platform where all artists of different expression come together to collaborate on projects and achieve great outcomes to share with the world.',
        images: [
            '/project_screenshots/aesthetehome.png',
            '/project_screenshots/aestheteeditproject.png',
            '/project_screenshots/aesthetelogin.png',
            '/project_screenshots/aestheteupcomingprojects.png',
        ],
        details: ['JavaScript', 'React', 'Django', 'Python', 'Axios', 'Bulma', 'SQL']
    },
    {
        name: 'cocktailHour',
        title: 'Cocktail Hour',
        url: 'https://github.com/AzaleaTopaz/Cocktail-API',
        description: 'A directory using thecocktaildb through Axios to search for cocktail recipes to entertain guests.',
        images: [
            '/project_screenshots/cocktailhourhome.png',
            '/project_screenshots/cocktailhour1.png',
        ],
        details: ['JavaScript', 'Axios', 'CSS']
    },
    {
        name: 'wanderlost',
        title: 'Wanderlost',
        url: 'https://github.com/AzaleaTopaz/WanderLost-FullStack-App',
        description: 'View and add different attractions from different cities in different countries to plan their trips.',
        images: [
            '/project_screenshots/wanderlosthome.png',
            '/project_screenshots/wanderlost1.png',
            '/project_screenshots/wanderlost2.png',
            '/project_screenshots/wanderlost3.png',
            '/project_screenshots/wanderlost4.png',
        ],
        details: ['JavaScript', 'React', 'MongoDB', 'Axios', 'CSS']
    },
    {
        name: 'devPals',
        title: 'Dev Pals',
        url: 'https://github.com/kingwilldabeast/dev-pals',
        description: 'Collaborative group app where individuals in tech can connect with one another.',
        images: [
            '/project_screenshots/devpals1.png',
            '/project_screenshots/devpals2.png',
            '/project_screenshots/devpals3.png',
        ],
        details: ['JavaScript', 'React', 'MongoDB', 'Python', 'Axios', 'Bootstrap']
    },
    {
        name: 'tickIt',
        title: 'Tikit',
        url: 'https://github.com/kfharoun/tick-it',
        description: 'Collaborative group app where individuals can view when and where their favorite artists will be performing.',
        images: [
            '/project_screenshots/tikit1.png',
            '/project_screenshots/tickit2.png',
            '/project_screenshots/tickit3.png',
        ],
        details: ['JavaScript', 'React', 'Django', 'Python', 'Axios', 'SQL']
    }
];

export default function Projects() {
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [hoveredProject, setHoveredProject] = useState(null);

    useEffect(() => {
        let intervalId;

        if (hoveredProject) {
            intervalId = setInterval(() => {
                setCurrentImageIndex(prevIndex => ({
                    ...prevIndex,
                    [hoveredProject]: (prevIndex[hoveredProject] + 1) % projectData.find(p => p.name === hoveredProject).images.length
                }));
            }, 5000);
        }

        return () => clearInterval(intervalId);
    }, [hoveredProject]);

    const handleMouseEnter = (projectName) => {
        setHoveredProject(projectName);
        setCurrentImageIndex(prev => ({
            ...prev,
            [projectName]: 0
        }));
    };

    const handleMouseLeave = () => {
        setHoveredProject(null);
    };

    return (
        <div className='projects'>
            <div className='project-page-title'>
                <h1 className='project-main'>Projects</h1>
            </div>
            <div className='projects-container'>
                {projectData.map((project) => (
                    <a
                        key={project.name}
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-card ${hoveredProject === project.name ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(project.name)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <h1 className='project-title'>{project.title}</h1>
                        <img
                            src={project.images[currentImageIndex[project.name]] || project.images[0]}
                            alt={`${project.title} home page`}
                            className='project-image'
                        />
                        <div className='project-details'>
                            <p className='languages'>Languages:</p>
                            {project.details.map((detail, index) => (
                                <p key={index}>{detail}</p>
                            ))}
                        </div>
                        <div className='project-description'>
                            <p>{project.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}
