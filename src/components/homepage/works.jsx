import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./tsystems.png"
								alt="tsystems"
								className="work-image"
							/>
							<div className="work-title">Senior Backend Developer</div>
							<div className="work-subtitle">
								T-Systems
							</div>
							<div className="work-duration">Jul 2023 - Present</div>
						</div>

						<div className="work">
							<img
								src="./igt.png"
								alt="igt"
								className="work-image"
							/>
							<div className="work-title">Backend Software Engineer I</div>
							<div className="work-subtitle">
								IGT
							</div>
							<div className="work-duration">Jul 2022 - Jul 2023</div>
						</div>

						<div className="work">
							<img
								src="./seniordomo.png"
								alt="seniordomo"
								className="work-image"
							/>
							<div className="work-title">Full Stack Software Developer</div>
							<div className="work-subtitle">
								SeniorDomo
							</div>
							<div className="work-duration">Ago 2021 - Jul 2022</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
