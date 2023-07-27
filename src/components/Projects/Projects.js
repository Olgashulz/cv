import React from 'react';
import styles from "./Projects.module.css"
import generalStyles from "../../index.module.css";
import {FaLink} from 'react-icons/fa';

const projects = [
    {
        name: "PlaPets",
        description: "Project \"PlaPets\" - a TypeScript-based web application built with React.js and using Redux to manage data about lost pets. It utilizes Styled Components and Emotion for component styling, Moment for date handling, and Cloudinary for image processing. Maps and geolocation are implemented with Mapbox GL.",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690113567/wf0kapgqkrlbaho3jxgb.jpg",
        link: "https://propetscom.herokuapp.com",
        technologies: ["TypeScript", "React", "Redux", "Styled Components", "Emotion", "Moment", "Cloudinary", "Mapbox GL"],
    },
    {
        name: "Wallet",
        description: "The \"Wallet\" application helps efficiently manage finances, allowing users to track and analyze their expenses and income. It provides statistics and charts for better understanding of financial status and budget planning.",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690113607/pe9ewacvf4dk35gvzjzb.jpg",
        link: "http://wallet-goit-fsv.netlify.app",
        technologies: ["JavaScript", "React", "Redux", "Chakra UI", "Axios", "Formik"],
        gh: "https://github.com/Olgashulz/wallet_project_group_1"
    },
    {
        name: "Filmoteka",
        description: "The \"Filmoteka\" project is a web application for viewing the latest movie releases and trailers. It utilizes pure JavaScript to create an interactive user interface. The application fetches data about popular movies using theTMDb API.",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690114430/qmj55pv5dkkqywbjzapj.jpg",
        link: "https://olgashulz.github.io/filmoteka_project_group_1/",
        technologies: ["JavaScript", "CSS", "Sass", "HTML", "Lodash", "Handlebars", "TMDb API"],
        gh: "https://github.com/Olgashulz/filmoteka_project_group_1"
    },
    {
        name: "Movies",
        description: "The project is a web application that allows users to view the latest movie releases and trailers. It provides features to explore actors' ratings and reviews.  Built with React.js, it offers a responsive user interface. The project utilizes CSS Modules for styling, allowing for modular and scoped styles. ",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690118612/qquunzjim7jbmr3aihzw.jpg",
        link: "https://goit-react-hw-04-movies-shulz.netlify.app/",
        technologies: ["JavaScript", "React", "CSS Modules", "HTML", "React Slick", "React Toastify"],
        gh: "https://github.com/Olgashulz/goit-react-hw-04-movies"
    },
    {
        name: "Image Gallery",
        description: "The application is a web-based image search tool that utilizes the Pixabay API. It allows users to search for images and display the results in an interactive user interface. The app is built with React.js and leverages other dependencies such as React Router DOM and Axios for seamless navigation and API integration.",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690120183/zkqu6a6le1h2htdpoaem.jpg",
        link: "https://olgashulz.github.io/goit-react-hw-04-hooks-images/",
        technologies: ["JavaScript", "React", "CSS Modules", "HTML", "Axios", "Pixabay API"],
        gh: "https://github.com/Olgashulz/goit-react-hw-04-hooks-images"
    },
    {
        name: "Gallery",
        description: "The \"Gallery\" project is a web application created with pure JavaScript that allows users to search for images using the Pixabay API. It offers infinite scroll functionality and a simple lightbox for image viewing. Additionally, the application is implemented with a responsive design, ensuring proper display on various devices.",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690113512/dhugrsbedrmbf9lgc22s.jpg",
        link: "https://olgashulz.github.io/goit-js-hw-13-image-finder/",
        technologies: ["JavaScript", "Infinite Scroll", "Lightbox", "Sass", "Handlebars", "Pixabay API"],
        gh: "https://github.com/Olgashulz/goit-js-hw-13-image-finder"
    },
    {
        name: "IceCream",
        description: "\n" +
            "The \"parcel-project-template\" is a web layout implemented using Sass for styling, including mixins and other features to ensure convenient and modular styling of web pages. The pages are designed with a responsive layout, allowing them to display correctly on various devices and screens.",
        url: "http://res.cloudinary.com/da6gonb7q/image/upload/v1690113531/dn9wedpovepbat3kzzgf.jpg",
        link: "https://olgashulz.github.io/final-project-html-css/",
        technologies: ["HTML", "CSS", "Sass"],
        gh: "https://github.com/Olgashulz/final-project-html-css"
    },
]
const Projects = () => {
    return (
        <>
            <div className={generalStyles.block} id="projects">
                <h2 className={styles.title}>Projects</h2>
                <div className={styles.projects_container}>
                {projects.map((p, i) =>
                    <div key={i} className={styles.card_block}>
                        <div className={styles.img_container}>
                            <img alt="project_screen" className={styles.img} src={p.url}/>
                        </div>
                        <h3 className={styles.project_title}>{p.name}</h3>
                        <a className={styles.link} href={p.link} target="_blank" rel="noopener noreferrer">
                            <FaLink/>
                        </a>
                        <p>{p.description}</p>
                        <ul className={generalStyles.list}>
                            {p.technologies.map((p, i) => <li className={generalStyles.item} key={i}>{p}</li>)}
                        </ul>
                    </div>)}
                </div>
            </div>
        </>
    );
};

export default Projects;