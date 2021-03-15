import React from 'react';
import './animated-atom.styles.css';

export const AtomicHamburger = props => (
    <div className='atom'>
        <button className='atom--hamburger'>
            <div className='atom--hamburger-component'></div>
            <div className='atom--hamburger-component'></div>
            <div className='atom--hamburger-component'></div>
        </button>
    </div>
);