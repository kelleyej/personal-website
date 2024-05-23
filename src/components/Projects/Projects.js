import './Projects.css';
import Icon from '../../assets/icon.png'
import Pine from '../../assets/pine.png'
import Link from '../../assets/link.png';
import Travel from '../../assets/travel.png';
import Github from '../../assets/git.png';
import { useState } from 'react';
import Cypress from '../../assets/cypress.png'
import ReactIcon from '../../assets/react.png';
import House from '../../assets/house.png'

export default function Projects(){
const [mouseEvent, setMouseEvent] = useState(false)
console.log(mouseEvent)
    return (
        <section id='project-container'>
            <div className='project-title'>
                <h3>Projects</h3>
            <img className='icon' src={Icon} />
            </div>
            
            <section className='project-grid'>
                <div className='project' onMouseEnter={() => setMouseEvent(true)} onMouseLeave={() => setMouseEvent(false)}>
                   <p>PINE</p>
                   <a href='https://pine-project.vercel.app/'><img className='link' src={Link} /></a>
                   <a href='https://github.com/kelleyej/pine-project'><img className='link' src={Github} /></a>
                {!mouseEvent ? <img className='pine' src={Pine} />  : <div><img className='cypress' src={Cypress} /><img className='cypress' src={ReactIcon} /><p>A guide to all 63 National Parks. Explore the different regions and states and track which National Parks you have visited!</p></div>}
                </div>
               <div className='project' onMouseEnter={() => setMouseEvent(true)} onMouseLeave={() => setMouseEvent(false)}>
                <p>Travel Tracker</p>
                <a href='https://pine-project.vercel.app/'><img className='link' src={Github} /></a>
                <img className='travel' src={Travel} />
               </div>
               <div className='project' onMouseEnter={() => setMouseEvent(true)} onMouseLeave={() => setMouseEvent(false)}>
                <p>Housemate Hunter</p>
                <img className='house'src={House} />
                </div>
                <p>Brain Food</p>
            </section>
        </section>
        
    )
}