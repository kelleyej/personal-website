import './Header.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png'
import Scenic from '../../assets/mountainscenic.png'


export default function Header(){
    return (
        <header >
            <div className='intro'>
              <h1>Erin Kelley</h1>
            <img className='scenic' src={Scenic} />
            {/* <p className='role'>Software Developer.</p>   */}
            </div>
            
            {/* <div className='media-container'>
                <a href='https://github.com/kelleyej'><img className='github' src={Github} /></a>
                <a href='https://www.linkedin.com/in/kelleyej/'><img className='linkedin' src={Linkedin} /></a> 
            </div>  */}
            <div className='links'>
                
                <a className='media' href='#bio-container'>About Me</a>
              <a target="_blank" href='https://docs.google.com/document/d/1ObhAmSSIMxJcBMwDzsPG6LYI_XB0d7rL9OBp2dvxT3Y/edit?usp=sharing' className='media'>Resume</a>
            <a className='media' href='#project-container'>Projects</a>  
            </div>
        </header>
        
    )
}