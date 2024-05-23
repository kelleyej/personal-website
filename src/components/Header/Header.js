import './Header.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png'

export default function Header(){
    return (
        <header >
            <h1>Erin Kelley</h1>
            <div className='media-container'>
                <a href='https://github.com/kelleyej'><img className='github' src={Github} /></a>
                <a href='https://www.linkedin.com/in/kelleyej/'><img className='linkedin' src={Linkedin} /></a> 
            </div> 
            <p>Resume</p>
            <p>Projects</p>
        </header>
        
    )
}