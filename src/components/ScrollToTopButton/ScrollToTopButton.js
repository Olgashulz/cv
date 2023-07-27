import React, { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';



const ScrollToTopButton = ({setActiveSection}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div>
            {isVisible && (
                <button className={styles.button} onClick={() => {
                    scrollToTop();
                    setActiveSection("aboutMe");
                }}>
                    <FontAwesomeIcon icon={faArrowUp} className={styles.icon} />
                </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;