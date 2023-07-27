import React, { useEffect, useRef } from 'react';
import Experience from "../Experience";
import Projects from "../Projects";
import styles from "./RightPart.module.css"

const RightPart = React.forwardRef(({setActiveSection, activeSection}, ref) => {
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['experience', 'projects'];
            const rightPartElement = ref.current;
            if (rightPartElement) {
                const scrollPosition = rightPartElement.scrollTop ;
                let currentSection = '';

                for (const sectionId of sections) {
                    const sectionElement = document.getElementById(sectionId);
                    if (sectionElement) {
                        const { top, bottom } = sectionElement.getBoundingClientRect();
                        if (scrollPosition >= top && scrollPosition < bottom) {
                            currentSection = sectionId;
                            break;
                        }
                    }
                }
                if (currentSection === "experience" || currentSection ==="projects")
                setActiveSection(currentSection);
            }
        };

        const rightPartElement = ref.current;
        if (rightPartElement) {
            rightPartElement.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (rightPartElement) {
                rightPartElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, [activeSection]);

    return (
        <div className={styles.rightPart} ref={ref}>
            <Experience />
            <Projects />
        </div>
    );
});

export default RightPart;

