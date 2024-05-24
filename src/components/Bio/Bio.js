import Photo from '../../assets/selfie.jpg';
import './Bio.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png'
import Gmail from '../../assets/gmail.png'

export default function Bio(){
    return (
        <main id='bio-container'>
            <section className='bio'>
          
                     <div className='media-container'>
                <a href='https://github.com/kelleyej'><img className='github' src={Github} /></a>
                <a href='https://www.linkedin.com/in/kelleyej/'><img className='linkedin' src={Linkedin} /></a> 
                <a href='#footer'><img className='linkedin' src={Gmail} /></a>
            </div>
                <div className='style'>
                   <img className='photo' src={Photo} /> 
                <h2>Hello, there!</h2>
                <p className='bio-message'>After seven years as a clinical Audiologist, I turned my passion for <span>problem solving</span>
                and use of <span>technology</span> to improve quality of life into a career in <span>software development</span> -- particularly to continue 
                contributing to positive user outcomes while continuing to <span>learn</span>, <span>challenge</span> myself, and <span>collaborate</span> with others. </p> 
                </div>
                
            </section>
            <section>
                <img className='mountain' />
            </section>
        </main>
    )
}