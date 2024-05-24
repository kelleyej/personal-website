import Range from '../../assets/range.png';
import './Footer.css';
import Pic from '../../assets/pic.png'

export default function Footer(){
    return (
        <footer id='footer'>
            <div class='test'>
                <img className='pic'src={Pic} />
                <p className='location'>📍 Denver, CO</p>
            </div>
            <div className='message'>
               <p className='email'>erin.kelley01@gmail.com</p>
            <h4>Say, hi!</h4>
            <p className='greeting'>I would love to hear from you. Feel free to reach out.</p> 
            </div>
            
            <div className='bottom'>

              <img className='range' src={Range} />  
            </div>
            
            
        </footer>
        
    )
}