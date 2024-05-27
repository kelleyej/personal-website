import Photo from '../../assets/selfie.jpg';
import './Bio.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png'
import Gmail from '../../assets/gmail.png';
import { motion } from 'framer-motion';
import CV from '../../assets/cv.png'

export default function Bio(){
    return (
        <main id='bio-container'>
            <section className='bio'>
                     <div className='media-container'>
                <a target="_blank" href='https://github.com/kelleyej'><img className='github' src={Github} /></a>
                <a target="_blank" href='https://www.linkedin.com/in/kelleyej/'><img className='linkedin' src={Linkedin} /></a> 
                <a href="mailto:erin.kelley01@gmail.com"><img className='linkedin' src={Gmail} /></a>
                <a target="_blank" href='https://docs.google.com/document/d/1ObhAmSSIMxJcBMwDzsPG6LYI_XB0d7rL9OBp2dvxT3Y/edit?usp=sharing' ><img className='linkedin' src={CV} /></a>
            </div>
                <div className='style'>
                   <img  className='photo' src={Photo} />
                <motion.h2 transition={{delay: 0.3}} initial={{scale: 0}} animate={{scale:1}} className='style'>
               Hello, there!
                 </motion.h2>
                <p className='bio-message'>After seven years as a clinical Audiologist, I turned my passion for <span>problem solving</span> and use of <span>technology</span> to improve quality of life into a career in <span>software development</span> -- particularly to continue contributing to positive user outcomes while fostering my desire for lifelong <span>learning</span>. Being outside makes me the happiest and you can often find me in the mountains, cycling, hiking, or camping. I have a cat named Squash, who has soaked in all the knowledge sitting on my lap when I'm at the computer. 
                </p> 
                <br>
                </br>
                <p className='alliteration'>I love <span className='c'>challenges</span>, <span className='c'>creativity</span>, and <span className='c'>collaboration</span> <span className='italic'>(and alliteration)</span>.</p>
               </div>
                
            </section>
            <section className='container'>
                <img className='mountain' />
            
            </section>
        </main>
    )
}