import './Header.css';
import { useState, useRef, useEffect} from "react";
import SearchBar from './SearchBar.js';
import DropDown from './DropDown.js'
import DropArrowImg from './pics/DropArrow.png';
import DropArrowHoverImg from './pics/DropArrowHover.png';
import Twitter from '../Floor/Icons/twitter.png'; 
import GitHub from '../Floor/Icons/github.png';
import YouTube from '../Floor/Icons/youtube.png';
import LinkedIn from '../Floor/Icons/linkedin.png';

function Link({ which, about }){
    if(which.hasdrop){
        return(
                <DropDown 
                    about={about} 
                    which={which}
                />
        );
    }
    return(
        <a className={which.class} href={which.link}>{which.name}</a>
    );
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
    {name: "Blog", link: "nothing", class:"Blog", hasdrop: false},
    {name: "Portfolio", link: "nothing", class:"Link", hasdrop: false},
    {name: "Podcast", link: "nothing", class:"Link", hasdrop: false},
    {name: "Links", link: "nothing", class:"Link", hasdrop: true},
    {name: "Sign In", link: "nothing", class:"LinkSignIn", hasdrop: false}
];

const ABOUT = [
    {name: "LinkedIn", link: "nothing.com", class:"AboutLink", image:LinkedIn},
    {name: "YouTube", link: "nothing.com", class:"AboutLink", image:YouTube},
    {name: "GitHub", link: "nothing.com", class:"AboutLink", image:GitHub},
    {name: "Twitter", link: "nothing.com", class:"AboutLink", image:Twitter},
]

export default function Header() {
    return <InternalHeader links={LINKS} about={ABOUT} />;
};
