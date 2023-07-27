import './App.css';
import Main from "./components/Main";
import ScrollToTopButton from "./components/ScrollToTopButton";
import {useState} from "react";

function App() {
    const [activeSection, setActiveSection] = useState('experience');
    return (
        <>
            <Main activeSection={activeSection} setActiveSection={setActiveSection}/>
            <ScrollToTopButton activeSection={activeSection} setActiveSection={setActiveSection}/>
        </>
    );
}

export default App;
