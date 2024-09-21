import './CatCorner.css';
import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Cat from '../../assets/cat.png'
import Svelte from '../../assets/svelte.png'
import Tailwind from '../../assets/tailwind.png'
import OpenAI from '../../assets/openai.png'
import Click from '../../assets/click.png';
import Back from '../../assets/back.png';

export default function HousemateHunter() {
    const [isFlipped, setIsFlipped] = useState(true)
    function handleClick() {
        setIsFlipped(!isFlipped)
    }
    return (

        <ReactCardFlip isFlipped={!isFlipped} flipDirection="horizontal">
            <div className='details'>
                <div className='help'>
                    <img className='project-pic' src={Cat} />
                </div>
                <button onClick={handleClick}>Click here for details<img className='click' src={Click} /></button>
            </div>
            <div className='details'>
                <div className='deets'>
                    {/* <h4>Housemate Hunter</h4> */}
                    <div className='social'><img className='cypress' src={Svelte} /><img className='cypress' src={Tailwind} /><img className='cypress' src={OpenAI} /></div>
                    <p className='project-description'>Purrrrrfect your cat knowledge! View 67 breeds of cats to learn more about levels of affection, friendliness, energy, intelligence, and more. Paginate through pages and use the question box to ask anything you have ever wanted to know about cats. </p>
                </div>

                <button onClick={handleClick}><img className='back' src={Back} />Go back</button>
            </div>
        </ReactCardFlip>

    )
}