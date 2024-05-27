import './Test.css';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';
import Travel from '../../assets/travel.png';
import Javascript from '../../assets/javascript.png';
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png';
import Chai from '../../assets/chai.png'
import Mocha from '../../assets/mocha.png';
import Click from '../../assets/click.png';
import Back from '../../assets/back.png';

export default function Test() {
    const [isFlipped, setIsFlipped] = useState(true)
    function handleClick(){
        setIsFlipped(!isFlipped)
    }
    return (
          <ReactCardFlip isFlipped={!isFlipped} flipDirection="horizontal">
        
          <div className='details'>
              <div className='help'>
              <img className='project-pic' src={Travel} />
              </div>
              <button onClick={handleClick}>Click here for details<img className='click' src={Click}/></button> 
          </div>  
          <div className='details'>
          <div className='deets'>
          <div className='social'><img className='express' src={Javascript} /><img className='cypress' src={HTML} /><img className='cypress' src={CSS} /><img className='cypress' src={Chai} /><img className='cypress' src={Mocha} /></div>
        <p className='project-description'>This application allows users to view a dashboard displaying all past and upcoming trips. Users can plan future trips by choosing a city to visit and viewing estimated cost of flights and lodging. The dashboard gives users insight on how much money has been spent thus far in the year for travel expenses.</p>
          </div>
          <button onClick={handleClick}><img className='back' src={Back}/>Go back</button>
          </div>  
  </ReactCardFlip>

   )
}
    
