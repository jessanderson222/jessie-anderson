import React, { useState } from 'react';
import '../App.scss';

export const Menu = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const onMenuClick = () => {
        setMenuVisible(!menuVisible);
    }

     return (
        <div className="menu-container">
            <div onClick={() => onMenuClick()} className="menu-accordion">
                <div className="menu-line"/>
                <div className="menu-line"/>
                <div className="menu-line"/>
            </div>
            { menuVisible && (
                <div className="menu-dropdown">
                    <a href="#about-me" className="menu">
                        <div>About Me</div>
                    </a>
                    <a href="#software" className="menu">
                        <div>Software</div>
                    </a>
                    <a href="#volunteer" className="menu">
                        <div>Volunteer</div>
                    </a>
                    <a href="#art" className="menu">
                        <div>Artwork</div>
                    </a>
                </div>
            )}
        </div>
     )
}
