import styles from './Navigation.module.css';

const Navigation = ({activeSection, setActiveSection}) => {
    const resumeUrl = 'https://docs.google.com/document/d/1Byws2ifFzs_UWaVhTvZjBstWeJr5X-h-pXbpSY4QXJI/edit?usp=sharing'; // Замените на URL вашего резюме

    const handleNavLinkClick = (e, targetId) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const targetOffset = targetElement.getBoundingClientRect().top;
            const rightPartElement = document.querySelector('.RightPart_rightPart__Ggr-v');
            if (rightPartElement) {
                rightPartElement.scroll({
                    top: targetOffset + rightPartElement.scrollTop - 60,
                    behavior: 'smooth',
                });
            }
        }
    };


    return (
        <nav className={styles.nav}>
            <ul className={styles['nav-items']}>
                <li>
                    <a
                        className={`${styles.link} ${activeSection === 'experience' ? styles.active : ''}`}
                        href="#experience"
                        onClick={
                            (e) => {
                                handleNavLinkClick(e, 'experience')
                            }
                        }
                    >
                        <span className={styles['nav-indicator']}></span>
                        <span className={styles['nav-text']}>Experience</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`${styles.link} ${activeSection === 'projects' ? styles.active : ''}`}
                        href="#projects"
                        onClick={
                            (e) => {
                                handleNavLinkClick(e, 'projects')
                            }
                        }
                    >
                        <span className={styles['nav-indicator']}></span>
                        <span className={styles['nav-text']}>Projects</span>
                    </a>
                </li>
                <li>
                    <a
                        className={`${styles.link} ${activeSection === 'cv' ? styles.active : ''}`}
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className={styles['nav-indicator']}></span>
                        <span className={styles['nav-text']}>View CV</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;