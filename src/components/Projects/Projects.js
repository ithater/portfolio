import React from 'react';

import ProjectsProject from './ProjectsProject';

function Projects(props) {
	const {
		projectsDB
	} = props;

	const filteredProjects = [...projectsDB].sort((a, b) => b.id - a.id);

  return (
		<div className="projects">
			<div className="container projects__container">
				{
					filteredProjects.map((projectData, id) => (
						<ProjectsProject projectData={projectData} key={id.toString()}/>
					))
				}
			</div>
		</div>
  );
}

export default Projects;
