import './Header.css';
import Scenic from '../../assets/mountainscenic.png';

export default function Header(){
    return (
        <header >
            <div className='intro'>
                <div className='job'>
                  <h1>Erin Kelley</h1>
                <p className='profession'>Software Developer</p>
                </div>       
            <img className='scenic' src={Scenic} />
            </div>
            <div className='links'>
                <a className='media' href='#bio-container'>About Me</a>
              <a target="_blank" href='https://docs.google.com/document/d/1ObhAmSSIMxJcBMwDzsPG6LYI_XB0d7rL9OBp2dvxT3Y/edit?usp=sharing' className='media' >Resume</a>
            <a className='media' href='#project-container'>Portfolio</a>  
            </div>
        </header>
        
    )
}