import React from 'react';
import './header.css';
import Back from "../assets/Back.png";
import search from "../assets/search.png";

const Header = ()=>{
    return (
        <div className='header-container'>
            <div className='nav-container'>
                <img className='backImg' src={Back} alt={'back'}/>
                <div className='header-title'>Romatic Comedy</div>
            </div>
            <div className='searchcontainer'>
                <img className='searchImg' src={search} alt={'search'}/>
            </div>
        </div>
    )
};

export default Header;