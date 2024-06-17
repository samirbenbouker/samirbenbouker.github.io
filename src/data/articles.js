import React from "react";

function article_1() {
	return {
		date: "Jul 2023 - Present",
		title: "Senior Backend Developer",
		description: `<strong>Team Leadership:</strong> Guided and mentored a team of junior developers, fostering a collaborative environment that encourages continuous learning and growth. My approach has ensured that each team member contributes effectively to the project's success while developing their own skills and expertise.
						<br />
						<strong>Client Communication:</strong> Acted as the primary point of contact for clients, translating their needs into actionable plans and maintaining open lines of communication throughout the project lifecycle. My ability to understand and address client requirements has been instrumental in delivering solutions that exceed expectations.
						<br />
						<strong>Project Management:</strong>Implemented rigorous project management practices to track progress, identify potential bottlenecks, and ensure timely delivery of milestones. My focus on detailed planning and regular follow-ups has resulted in the seamless execution of project timelines.
						<br />
						<strong>Full Development Lifecycle:</strong> Taken charge of the entire development process, from initial concept and design to deployment and maintenance. My hands-on experience with coding, testing, and debugging has provided me with a comprehensive understanding of the technical aspects and challenges of each project.`,
		keywords: [
			"The Benefits of Cloud Computing",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}

				.paragraph {
					white-space: pre-wrap;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Tharindu",
			"Tharindu N",
			"Tharindu Nayanajith",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
