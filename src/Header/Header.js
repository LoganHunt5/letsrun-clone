import './Header.css';
import SearchBar from './SearchBar.js';
import DropDown from './DropDown.js'
import DropArrowImg from './pics/DropArrow.png';
import DropArrowHoverImg from './pics/DropArrowHover.png';
import Twitter from '../Floor/Icons/twitter.png'; 
import GitHub from '../Floor/Icons/github.png';
import YouTube from '../Floor/Icons/youtube.png';
import LinkedIn from '../Floor/Icons/linkedin.png';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function Link({ which, about }){
    const loc = useLocation(); 
    if(which.hasdrop){
        return(
            <DropDown 
                about={about} 
                which={which}
            />
        );
    } else if (loc.pathname == "/Blog" && which.name == "Blog"){
        return(
            
            <a className={"BlogHeaderActive"}
                href={which.link}>
                {which.name}
            </a>
        );
    } else if (loc.pathname == "/Portfolio" && which.name == "Portfolio"){
        return(
            
            <a className={"PortfolioHeaderActive"}
                href={which.link}>
                {which.name}
            </a>
        );
    } else {
        return(
            <a className={which.class} href={which.link}>{which.name}</a>
        );
    }
}


function InternalHeader({ links, about }){
    const parts = [];
    links.forEach((link) => {
        parts.push(
            <Link 
                which={link}
                about={about}
                key={link.name} />
        );
    });
    return(
        <div className="Header"> 
            {parts}
            <SearchBar />
        </div>
    );
};

const LINKS = [
    {name: "Blog", link: "Blog", class:"Link", hasdrop: false},
    {name: "Portfolio", link: "Portfolio", class:"Link", hasdrop: false},
    //{name: "Podcast", link: "Podcast", class:"Link", hasdrop: false},
    {name: "Links", link: "nothing", class:"Link", hasdrop: true},
    {name: "Sign In", link: "SignIn", class:"LinkSignIn", hasdrop: false}
];

const ABOUT = [
    {name: "LinkedIn", link: "https://www.linkedin.com/in/logan-hunt-28bb93326/", class:"AboutLink", image:LinkedIn},
    {name: "YouTube", link: "https://www.youtube.com/@fease9405", class:"AboutLink", image:YouTube},
    {name: "GitHub", link: "https://github.com/LoganHunt5", class:"AboutLink", image:GitHub},
    {name: "Twitter", link: "https://x.com/ks5p455cv", class:"AboutLink", image:Twitter},
]

export default function Header() {
    return <InternalHeader links={LINKS} about={ABOUT} />;
};
