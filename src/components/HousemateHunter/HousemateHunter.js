import './HousemateHunter.css';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import House from '../../assets/house.png'
import Cypress from '../../assets/cypress.svg'
import ReactIcon from '../../assets/react.png';
import Express from '../../assets/express.png';
import Postgresql from '../../assets/postgresql.png';
import Knex from '../../assets/knex.png';
import Click from '../../assets/click.png';
import Back from '../../assets/back.png';

export default function HousemateHunter(){
    const [isFlipped, setIsFlipped] = useState(true)
    function handleClick(){
        setIsFlipped(!isFlipped)
    }
    return (
   
    <ReactCardFlip isFlipped={!isFlipped} flipDirection="horizontal">
        <div className='details'>
            <div className='help'>
            <img className='project-pic' src={House} />
            </div>
            <button onClick={handleClick}>Click here for details<img className='click' src={Click}/></button> 
        </div>  
        <div className='details'>
        <div className='deets'>
        {/* <h4>Housemate Hunter</h4> */}
        <div className='social'><img className='cypress' src={Cypress} /><img className='react' src={ReactIcon} /><img src={Express} className='express'/><img className='cypress' src={Postgresql} /><img className='cypress' src={Knex} /></div>
        <p className='project-description'>Find potential roommates in either Denver or San Francisco. Users can filter roommates based on certain criteria, such as age range, smoking or pet preferences, and budget. By clicking on a roommate, you can view a personal biography, which includes interest, hobbies, and any special accomodations.</p>
        </div>
    
        <button onClick={handleClick}><img className='back' src={Back}/>Go back</button>
        </div>
    </ReactCardFlip>

   ) 
}


    
