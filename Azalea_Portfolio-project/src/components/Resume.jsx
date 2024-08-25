import '../Components-style/resume.css'
import React from 'react'

export default function Resume() {
    return(
        <div className='resume'>
            <h1 className='resume-title'>Résumé</h1>
            <iframe src='../project_screenshots/azalea_sd_resume.pdf'
            title='Resume'
            width='90%'
            height='600px'
            ></iframe>
        </div>
    )
}