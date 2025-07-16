import React from 'react';
import styles from './ProjectsSection.module.css';

const ProjectsSection: React.FC = () => {
    return (
        <div className={`${styles.projectsSection}`}>
            <h2 className={`${styles.title}`}>My Projects</h2>
            <div className={`${styles.projectList} flex flex-wrap justify-around gap-4`}>
                <div className={`${styles.projectItem} block max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm`}>
                    <img src="/src//assets/placeholder.png" alt="Project 1" className="mb-4 rounded-lg" />
                    <h3 className={'{} '}>Project 1</h3>
                    <p className={'{} '}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>
                <div className={`${styles.projectItem} block max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm`}>
                    <img src="/src//assets/placeholder.png" alt="Project 2" className="mb-4 rounded-lg" />
                    <h3>Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className={`${styles.projectItem} block max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm`}>
                    <img src="/src//assets/placeholder.png" alt="Project 3" className="mb-4 rounded-lg" />
                    <h3>Project 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, esse? Expedita necessitatibus perferendis nostrum ex voluptatum sunt.</p>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;