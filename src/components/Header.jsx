import Sidebar from "./Sidebar";
import { Link } from 'react-scroll';
import "./../styles/header.css";

export default function Header() {
    return (
        <div className="header">
            <Sidebar />
            <div className="intro">
                <button className="resume-button">Download My Resume</button>
                <div className="header-text">
                    <h6>ABDURRAHMAN BALOGUN</h6>
                    <p>Backend Developer, Computer Science Student</p>
                    <p>Cultivating the habits of problems solving and providing value, one day at a time</p>
                </div>
                <div className="navbar">
                    <div className="nav">
                        <Link 
                            to="work" 
                            smooth={true} 
                            duration={800} 
                            offset={-50}
                            spy={true}
                            data-text="WORK"
                        >
                            WORK
                        </Link>
                    </div>
                    <div className="nav">
                        <Link 
                            to="about" 
                            smooth={true} 
                            duration={800} 
                            offset={-50}
                            spy={true}
                            data-text="ABOUT ME"
                        >
                            ABOUT ME
                        </Link>
                    </div>
                    <div className="nav">
                        <Link 
                            to="skills" 
                            smooth={true} 
                            duration={800} 
                            offset={-50}
                            spy={true}
                            data-text="SKILLS"
                        >
                            SKILLS
                        </Link>
                    </div>
                    <div className="nav">
                        <Link 
                            to="contact" 
                            smooth={true} 
                            duration={800} 
                            offset={-50}
                            spy={true}
                            data-text="CONTACT"
                        >
                            CONTACT
                        </Link>
                    </div>
                </div>
                <button className="resume-button-mobile">Download My Resume</button>
            </div>
        </div>
    );
}