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
import Express from '../../assets/express.png';
import Javascript from '../../assets/javascript.png';
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png';
import Postgresql from '../../assets/postgresql.png';
import Knex from '../../assets/knex.png'

export default function Projects(){
const [mouseEvent, setMouseEvent] = useState(false)
console.log(mouseEvent)
    return (
        <section id='project-container'>
            <div className='project-title'>
                <h3>Projects.</h3>
            {/* <img className='icon' src={Icon} /> */}
            </div>
            
            <section className='project-grid'>
                <div>
                   <p>PINE</p>
                   <a href='https://pine-project.vercel.app/'><img className='link' src={Link} /></a>
                   <a href='https://github.com/kelleyej/pine-project'><img className='link' src={Github} /></a>
                   <div className='social'><img className='cypress' src={Cypress} /><img className='react' src={ReactIcon}/><img src={Express} className='express'/> </div>
                 <img className='pine' src={Pine} />  
                </div>
               <div>
                <p>Travel Tracker</p>
                <a href='https://pine-project.vercel.app/'><img className='link' src={Github} /></a>
                <div className='social'><img className='cypress' src={Javascript} /><img className='cypress' src={HTML} /><img className='cypress' src={CSS} /></div>
                <img className='travel' src={Travel} />
               </div>
               <div>
                <p>Housemate Hunter</p>
                    <a href='https://housemate-hunter.vercel.app/'><img className='link' src={Link} /></a>
                   <a href='https://github.com/kelleyej/pine-project'><img className='link' src={Github} /></a>
                   <div className='social'><img className='cypress' src={Cypress} /><img className='react' src={ReactIcon} /><img src={Express} className='express'/><img className='cypress' src={Postgresql} /><img className='cypress' src={Knex} /></div>
                <img className='house'src={House} />
                </div>
                <p>Brain Food</p>
            </section>
        </section>
        
    )
}