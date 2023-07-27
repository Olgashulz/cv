import React, {useRef, useState} from 'react';
import LeftPart from "../LeftPart";
import RightPart from "../RightPart";
import styles from './Main.module.css'

const Main = ({activeSection, setActiveSection}) => {
    const rightPartRef = useRef(null);
    return (

        <div className={styles.width}>
        <div className={styles.container}>
            <LeftPart activeSection={activeSection} setActiveSection={setActiveSection}/>
            <RightPart activeSection={activeSection} setActiveSection={setActiveSection} ref={rightPartRef}/>
        </div>
        </div>
    );
};

export default Main;