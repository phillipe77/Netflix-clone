import React from 'react';
import './Header.css';


export default ({black}) => {
     return(
        <header className={black ? 'black' : ''}>
             <div className="logo">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix"/>
                </a>
            </div>
            <div className="user">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="UserImage"/>
                </a>
            </div>
        </header>
        
    );
}