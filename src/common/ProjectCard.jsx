import React from 'react';

function ProjectCard({src, link, title, description}) {
  return (
    <a href={link}>
        <div>
            <img src={src} alt={`${title} logo`} />
            <h3>{title}</h3>
            <p>
            {description}
            </p>
        </div>
    </a>
  )
}

export default ProjectCard