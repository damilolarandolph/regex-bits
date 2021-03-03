import React from 'react';
import * as style from '../styles/Buttons.module.css'



export function NavButton({ icon, text, selected = false }) {

    return <button
        className={`${style['navbar-button']} ${selected ? style['selected'] : ''}`}>
        <span className="inline-block mr-3 ">{icon}</span>
        <span className="inline ">{text}</span>
    </button>
}