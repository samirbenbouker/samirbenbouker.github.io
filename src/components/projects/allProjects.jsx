import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = ({ simple }) => {
	return (
		<div className="all-projects-container">
			{
				simple
					? INFO.projects.slice(0, 3).map((project, index) => (
						<div className="all-projects-project" key={index}>
							<Project
								logo={project.logo}
								title={project.title}
								description={project.description}
								linkText={project.linkText}
								link={project.link}
							/>
						</div>
					))
					: INFO.projects.map((project, index) => (
						<div className="all-projects-project" key={index}>
							<Project
								logo={project.logo}
								title={project.title}
								description={project.description}
								linkText={project.linkText}
								link={project.link}
							/>
						</div>
					))

			}
		</div>
	);
};

export default AllProjects;
