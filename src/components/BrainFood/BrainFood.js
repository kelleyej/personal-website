import './BrainFood.css';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react'
import Brain from '../../assets/brainfood.png';
import FramerMotion from '../../assets/framer-motion.svg';
import Vite from '../../assets/vitejs.svg';
import TypeScript from '../../assets/typescript.svg'
import Cypress from '../../assets/cypress.svg'
import ReactIcon from '../../assets/react.png';
import Click from '../../assets/click.png';

export default function BrainFood(){
    const [isFlipped, setIsFlipped] = useState(true)
    function handleClick(){
        setIsFlipped(!isFlipped)
    }
    return (
   
    <ReactCardFlip isFlipped={!isFlipped} flipDirection="horizontal">
        <div className='details'>
            <div className='help'>
            <img className='project-pic' src={Brain} />
            </div>
            <button onClick={handleClick}>Click here for details<img className='click' src={Click}/></button> 
        </div>  
        <div className='details'>
        <div className='deets'>
        <div className='social'><img className='cypress' src={FramerMotion} /><img className='cypress' src={Cypress} /><img className='cypress' src={Vite} /><img className='react' src={ReactIcon}/><img className='cypress' src={TypeScript} /></div>
        <p className='project-description'>Brain Food is an application that allows users to input their general mood for the day on a scale of 1-5 -- a sadness to happiness rating. A collection of recipes will populate dependent on time allotted to cook and food with nutriental content intended to boost or maintain particular mood levels. The user can favorite recipes and view them on a dashboard.</p>
        </div>
        <button onClick={handleClick}>⬅ Go back</button>
        </div>
    </ReactCardFlip>

   )
}

