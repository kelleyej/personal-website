import Range from '../../assets/range.png';
import './Footer.css';
import Pic from '../../assets/pic.png';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';
import Gmail from '../../assets/gmail.png';

export default function Footer(){
    return (
        <footer id='footer'>
            <div class='test'>
                <img className='pic'src={Pic} />
              <div className='social-container'>
                   <a target="_blank" href='https://github.com/kelleyej'><img className='github-small' src={Github} /></a>
                <a target="_blank" href='https://www.linkedin.com/in/kelleyej/'><img className='linkedin-small' src={Linkedin} /></a> 
                <a href="mailto:erin.kelley01@gmail.com"><img className='small' src={Gmail} /></a>
             </div>
             <a className='resume' target="_blank" href='https://docs.google.com/document/d/1ObhAmSSIMxJcBMwDzsPG6LYI_XB0d7rL9OBp2dvxT3Y/edit?usp=sharing'>Resume</a>
            </div>
            <div className='message'>
                <h4>Say, hi!</h4>
               <a href="mailto:erin.kelley01@gmail.com" ><p className='email'>erin.kelley01@gmail.com</p></a>
            
            <p className='greeting'>I would love to hear from you. Feel free to reach out.</p> 
            </div>
            
            <div className='bottom'>

              <img className='range' src={Range} />  
            </div>
            
            
        </footer>
        
    )
}