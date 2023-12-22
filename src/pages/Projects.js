import React from 'react';
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { FiGithub } from 'react-icons/fi';

const projects = [
    {
        title: "Latte Link",
        github: "https://github.com/nchu05/Latte-Link",
        des: "Allows Cornell students to connect with club members and arrange coffee chats from a range of campus organizations.",
        techs: ["Android Studio", "Kotlin"],
        img: "/LatteLink.png",
    },
    {
        title: "Currents",
        des: "Implements high-efficiency HVAC sensors using various tracking technologies and machine learning that will be implemented at Cornell University.",
        techs: ["Flutter", "Dart"],
        img: "/Currents.png",
    },
    {
        title: "Aeyesafe",
        rawLink: "https://www.aeyesafe.com/",
        link: "aeyesafe.com",
        des: "Combines artificial intelligence and behavioral monitoring to allow caretakers to track and monitor abnormalities in their patient’s health through efficient reporting and real-time alerts.",
        techs: ["Android Studio", "Kotlin", "Jetpack Compose"],
        img: "/Aeyesafe.png",
    }
]
const Project = (props) => {
    const {title, github, rawLink, link, des, techs, img} = props;
    return (
      <div className="row">
        {img && <img src={img} alt={img} className="proj-img" />}
        <div className="proj">
          <div className="p-title"> {title}</div>
          {github && (
            <FiGithub
              onClick={() => window.open(github)}
              className="gh-icon"
              size={35}
            />
          )}
          {link && (
          <a href={rawLink} className="p-link">
            {" "}
            {link}{" "}
          </a>
        )}
          <p className="p-des">{des}</p>
          <div className="techs">
            {techs.map((tech) => {
              return (
                <div key={tech} className="tech">
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
};

const Projects = () => {
    return (
      <div className="page">
        <div className="half">
        </div>
        <Nav />
        <main>
          <div className="stack">
            {projects.map((project) => {
              return (
                <Project
                  key={project.title}
                  title={project.title}
                  github={project.github}
                  rawLink={project.rawLink}
                  link={project.link}
                  des={project.des}
                  techs={project.techs}
                  img={project.img} />
              );
            })}
          </div>
          <Footer />
        </main>
      </div>
    );
  };


export default Projects