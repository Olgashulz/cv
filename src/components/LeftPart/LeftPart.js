import React, {useState} from 'react';
import Navigation from "../Navigation";
import AboutMe from "../AboutMe";
import styles from "./LeftPart.module.css"
import Contacts from "../Contacts";
import {Box, Drawer, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const LeftPart = ({activeSection, setActiveSection}) => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    return (
        <div className={styles.lefPart}>
            <div>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => {
                        setIsDrawerOpen(true);
                        setActiveSection("aboutMe")
                    }}
                    sx={{
                        mr: 2,
                        display: {md: 'none', lg: 'none'},
                        color: '#84B6A3',
                    }}
                >
                    <MenuIcon/>
                </IconButton>
                <Drawer
                    anchor="top"
                    variant="temporary"
                    open={isDrawerOpen}
                    onClose={() => setIsDrawerOpen(false)}
                    PaperProps={{style: {background: '#0f172a', padding: '10px 0 10px 10px'}}}
                >
                    <Box>
                        <button onClick={() => {
                            setIsDrawerOpen(false)
                        }} className={styles.close_btn}>x
                        </button>
                        <nav className={styles.nav}>
                            <ul className={styles['nav-items']}>
                                <li>
                                    <a
                                        className={`${styles.link} ${activeSection === 'aboutMe' ? styles.active : ''}`}
                                        //href="#experience"
                                        // onClick={
                                        //     (e) => {
                                        //         setActiveSection('experience')
                                        //         setIsDrawerOpen(false)
                                        //     }
                                        // }
                                    >
                                        <span className={styles['nav-indicator']}></span>
                                        <span className={styles['nav-text']}>About me</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className={`${styles.link} ${activeSection === 'experience' ? styles.active : ''}`}
                                        href="#experience"
                                        onClick={
                                            (e) => {
                                                setActiveSection('experience')
                                                setIsDrawerOpen(false)
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
                                                setActiveSection('projects')
                                                setIsDrawerOpen(false)
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
                                        href={"https://docs.google.com/document/d/1Byws2ifFzs_UWaVhTvZjBstWeJr5X-h-pXbpSY4QXJI/edit?usp=sharing"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span className={styles['nav-indicator']}></span>
                                        <span className={styles['nav-text']}>View CV</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </Box>
                </Drawer>

                {/*<ModalButtonBox data-test-id="modal-button-box">*/}
                {/*    {location.pathname === '/account/feed' || location.pathname === '/account/creator' ? (*/}
                {/*        location.pathname === '/account/feed' ? (*/}
                {/*            <IconButton size="small"*/}
                {/*                        onClick={() => {*/}
                {/*                            dispatch(setIsHomePost(true))*/}
                {/*                            navigate("/account/creator");*/}
                {/*                            setPrevPage("/account/feed");*/}
                {/*                        }}*/}
                {/*                        sx={{color: "#84B6A3"}} className="fa fa-plus"/>*/}
                {/*        ) : (*/}
                {/*            <IconButton size="small"*/}
                {/*                        sx={{color: "#84B6A3"}} className="fa fa-close"*/}
                {/*                        onClick={() => navigate(prevPage)}*/}
                {/*            />*/}
                {/*        )*/}
                {/*    ) : (*/}
                {/*        isButtonsOpen && location.pathname !== '/account/feed' ? (*/}
                {/*            <IconButton size="small" sx={{color: "#84B6A3"}} className="fa fa-arrow-up"*/}
                {/*                        onClick={() => {*/}
                {/*                            setIsButtonsOpen(false);*/}
                {/*                        }}/>*/}
                {/*        ) : (*/}

                {/*            <IconButton size="small" sx={{color: "#84B6A3"}} className="fa fa-arrow-down"*/}
                {/*                        onClick={() => {*/}
                {/*                            setIsButtonsOpen(true);*/}
                {/*                            setPrevPage(location.pathname);*/}
                {/*                        }}/>*/}
                {/*        )*/}
                {/*    )}*/}
                {/*</ModalButtonBox>*/}
            </div>

            <div>
                <h1 className="">Olga Shulman </h1>
                <h2 className="">Full-Stack Developer</h2>
                <p className={styles.text}> 70% Front-end (JS, TS, React, Redux), and 30% Back-end (Java, Spring, SQL,
                    MongoDB)
                </p>
                <Contacts/>
            </div>
            <Navigation activeSection={activeSection} setActiveSection={setActiveSection}/>
            <AboutMe/>

        </div>
    );
};

export default LeftPart;