import './Header.css';
import Scenic from '../../assets/mountainscenic.png';
import { HashLink as NavLink } from 'react-router-hash-link';
import { useState } from 'react';

export default function Header(){

    return (
        <header >
            <div className='intro'>
                <div className='job'>
                  <h1>Erin Kelley</h1>
                <p className='profession'>Software Developer</p>
                </div>       
            <img className='scenic' src={Scenic} />
            </div>
            <div className='links'>
                <NavLink className='media' smooth to='#bio-container'>About Me</NavLink>
                <NavLink className='media' smooth to='#project-container'>Portfolio</NavLink>
              <NavLink  className='media' smooth to='#footer'>Contact</NavLink>
            </div>
        </header>
        
    )
}