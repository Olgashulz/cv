import React from 'react';
import style from "./Experience.module.css"
import generalStyles from "../../index.module.css";
import styles from "../LeftPart/LeftPart.module.css";



const experience = [
    {
        period: "2022-present",
        position: "Full Stack Developer",
        company: "Inetex (Rehovot, Israel)",
        webSite: "",
        description: "Experience in working with React, Redux, and TypeScript in collaborative projects. Setting up projects, selecting and configuring third-party libraries and tools. Using RTK and React Router for state management and navigation. Dealing with RESTful APIs, including server interactions, JSON data processing using Axios and Fetch API. Familiarity with authentication and authorization principles. Collaborative code versioning using Git. Developing responsive designs using Styled Components, MUI, and optimizing performance for various devices and browsers.",
        technologies: ['TypeScript', 'React', 'React-Toastify', 'Redux Toolkit', 'React Router', 'RESTful API', 'Axios', 'Fetch API', 'MUI', 'Styled Components', 'CSS Modules', 'Git'],
    },
    {
        period: "2019-2020",
        position: "Front End Developer",
        company: "Admixer Advertising (Kyiv, Ukraine)",
        webSite: "",
        description: "My responsibilities included creating web pages and websites based on design layouts using HTML, CSS, JavaScript, React and other technologies. I ensured pixel-perfect web layout with precise adherence to visual design mockups and optimized web layout for faster loading times and improved user experience. Additionally, I tested and debugged web layout on various browsers and devices, collaborated with designers and developers to ensure alignment between design mockups and functionality for web pages and websites, and fixed errors and resolved issues that arose during the work process.",
        technologies: ['HTML', 'CSS', 'SASS', 'JavaScript', 'React', 'Formik', 'Google Maps API'],
    },
    {
        period: "2017-2019",
        position: "Web Support Specialist",
        company: "IT-Tour (Kyiv, Ukraine)",
        webSite: "",
        description: "As a specialist in website support, I was responsible for managing projects for the development of websites for travel companies. My job involved analyzing client requirements, coordinating project requirements, creating and overseeing content, participating in the development of website design, coordinating the work of designers and content managers, as well as writing technical specifications for developers with feedback and edits for designers and developers.",
        technologies: ['WordPress', 'Jira', 'Trello', 'HTML', 'CSS', 'DevTools', 'Photoshop', 'Figma']
    },
];
const Experience = () => {
    return (
        <>
        <p  className={style.text}>As a full-stack developer, I have a good understanding of the entire web
            development process. I have experience working with front-end technologies such as HTML5, CSS, JS/TS and
            popular libraries like React and Redux for creating dynamic user interfaces. Additionally, I have some
            experience in server-side web development using Java .</p>
        <div className={generalStyles.block} id="experience" >
            <h2 className={style.title}>Experience</h2>
            <ul>
                {experience.map((e, i) =>
                    <div key={i} className={style.card_block}>
                        <h4 className={style.period}>{e.period}</h4>
                        <h3>{e.position}</h3>
                        <h4>{e.company}</h4>
                        <p>{e.description}</p>
                        <ul className={generalStyles.list}>{e.technologies.map((t,i)=><li className={generalStyles.item} key={i}>{t}</li>)}</ul>
                    </div>)}
            </ul>

        </div>
        </>
    );
};

export default Experience;