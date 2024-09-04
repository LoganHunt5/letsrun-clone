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
    {name: "Blog", link: "Blog", class:"BlogHeader", hasdrop: false},
    {name: "Portfolio", link: "Portfolio", class:"Link", hasdrop: false},
    {name: "Podcast", link: "Podcast", class:"Link", hasdrop: false},
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
