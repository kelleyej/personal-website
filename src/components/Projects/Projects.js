import './Projects.css';
import Icon from '../../assets/icon.png'
import Pine from '../../assets/pine.png'
import Link from '../../assets/link.png';
import Travel from '../../assets/travel.png';
import Github from '../../assets/git.png';
import { useState } from 'react';
import Cypress from '../../assets/cypress.svg'
import ReactIcon from '../../assets/react.png';
import House from '../../assets/house.png'
import Express from '../../assets/express.png';
import Postgresql from '../../assets/postgresql.png';
import Knex from '../../assets/knex.png';
import TypeScript from '../../assets/typescript.svg'
import { AnimatePresence, motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
import Test from '../Test/Test';
import Sparkle from '../../assets/sparkle.png'
import BrainFood from '../BrainFood/BrainFood';
import HousemateHunter from '../HousemateHunter/HousemateHunter';
import Click from '../../assets/click.png';
import Back from '../../assets/back.png';
import Color from '../../assets/color.png'


export default function Projects(){
const [details, setDetails] = useState(false)
const [isFlipped, setIsFlipped] = useState(true)

function handleClick(){
    setIsFlipped(!isFlipped)
}
    return (
        <section id='project-container'>
            <div className='project-title'>
                <h3>Portfolio.</h3>
            </div>
            
            <section className='project-grid'>
               
                <div>
                       <h4 className='title'>Pine</h4>
                        <a target="_blank" href='https://pine-project.vercel.app/'><img className='deploy' src={Link} /></a>
                   <a target="_blank" href='https://github.com/kelleyej/pine-project'><img className='link' src={Github} /></a>  
      <ReactCardFlip isFlipped={!isFlipped} flipDirection="horizontal">
        
        <div className='details'>
            <div className='help'>
            <img className='project-pic' src={Pine} />
            </div>
          <button onClick={handleClick}>Click here for details<img className='click' src={Click}/></button> 
        </div>  
        <div className='details'>
        <div className='deets'>
            <div className='social'><img className='cypress' src={Cypress} /><img className='react' src={ReactIcon}/><img src={Express} className='express'/> </div>
        <p className='project-description'>Explore all 63 National Parks in the United States with PINE. The application allows users to view National Parks by region and state. The user can further explore each park to learn more about weather trends, park entrance fees, and get directions. You can also track which National Parks you have visited on the park tracker!</p>
        </div>
            <button onClick={handleClick}><img className='back' src={Back}/>Go back</button>
        </div>
       
</ReactCardFlip>

               </div>
               
               <div>
                <h4 className='title'>Travel Tracker</h4>
                <a target="_blank" href='https://github.com/kelleyej/TravelTracker'><img className='link' src={Github} /></a>
                <Test />
               
                </div>
               <div>
                <h4 className='title'>Housemate Hunter</h4>
                    <a target="_blank" href='https://housemate-hunter.vercel.app/'><img className='deploy' src={Link} /></a>
                   <a target="_blank" href='https://github.com/kelleyej/housemate-hunter'><img className='link' src={Github} /></a>
                <HousemateHunter />
                </div>
                <div>
                     <h4 className='title'>Brain Food</h4>
                     <p className='progress'>(In progress...)</p>
                <BrainFood />
                </div> 
            </section>
        </section>
        
        
    )
}