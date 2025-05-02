import React from 'react'
import './Projects.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='projects' className='projects'>
        <div className="projects-title">
            <h1>My Latest Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="projects-container">
            {mywork_data.map((work, index) => (
                <div key={index} className="project-card">
                    <img src={work.w_img} alt={work.w_name} className="project-image" />
                    <h3>{work.w_name}</h3>
                    <div className="project-buttons">
                        <a href={work.source} target="_blank" rel="noopener noreferrer">
                            <button className="project-btn">Source Code</button>
                            </a>
                            <a href={work.demo} target="_blank" rel="noopener noreferrer">
                                <button className="project-btn">Live Demo</button>
                            </a>
                    </div>
                </div>
            ))}
        </div>

        <div className="projects-showmore">
            <p>Show more</p>
            <img src={arrow_icon} alt="" />
        </div>
    </div>
  )
}

export default Projects
