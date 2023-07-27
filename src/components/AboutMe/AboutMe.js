import React from 'react';
import styles from "./AboutMe.module.css"
import generalStyles from "../../index.module.css";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const languages = ['JavaScript', 'TypeScript', 'Java'];
//export const technologies = ['React',  'Redux', 'React Redux', 'Redux Toolkit', 'HTML/CSS', 'SASS', 'CSS Modules', 'Material UI', 'Bootstrap', 'Maven', 'Spring Boot/Framework/Security', 'Lombok', 'Hibernate', 'MySQL', 'MongoDB'];
export const technologies = ['React', 'React-Redux', 'Redux', 'Redux Toolkit', 'Formik', 'Axios', 'Fetch', 'HTML/CSS', 'SASS', 'CSS Modules', 'Material UI', 'Styled components', 'Bootstrap', 'Maven', 'Spring Boot/Framework/Security', 'Lombok', 'Hibernate', 'Apache Tomcat/POE/Kafka',  'MySQL', 'H2', 'MongoDB'];
const AboutMe = () => {
    return (
        <div className={generalStyles.block} id="about">
            <h4 className={styles.about_title}>Programming language</h4>
            <ul className={generalStyles.list}>
                {languages.map((l, i) => <li key={i} className={generalStyles.item}>{l}</li>)}
            </ul>
            <h4 className={styles.about_title}>Technologies & Frameworks</h4>
            <ul className={generalStyles.list}>
                {technologies.map((t, i) => <li key={i} className={generalStyles.item}>{t}</li>)}
            </ul>
            <div className={styles.icons}>
                <a
                    href="https://github.com/Olgashulz"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} className={styles.icon} />
                </a>
                <a
                    href="https://www.linkedin.com/in/olga-shulman"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                </a>
            </div>
        </div>
    );
};

export default AboutMe;