import React from 'react';
import style from "../Experience/Experience.module.css";
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contacts = () => {
    return (
        <div>
            <div className={style.contact_block}>
                <p className={style.contact}>Email:</p>
                <a className={style.contact_link} href="mailto:olhaShulman@gmail.com">olhaShulman@gmail.com</a>
            </div>
            <div className={style.contact_block}>
                <p className={style.contact}>Phone:</p>
                <a className={style.contact_link} href="tel:+972537270003">+972 53 727 000 3</a>
            </div>
            <div className={style.contact_block}>
                <a className={style.contact_link} href="https://www.linkedin.com/in/olga-shulman"> <i
                    className="fa fa-linkedin" aria-hidden="true"></i></a>
                <a className={style.contact_link} href="https://github.com/Olgashulz"></a>
            </div>
        </div>
    );
};

export default Contacts;