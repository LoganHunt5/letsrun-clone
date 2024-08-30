import './Header.css';
import { useState, useRef, useEffect} from "react";
import SearchBar from './SearchBar.js';
import DropDown from './DropDown.js'
import DropArrowImg from './pics/DropArrow.png';
import DropArrowHoverImg from './pics/DropArrowHover.png';

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
    {name: "About", link: "nothing", class:"Link", hasdrop: true},
    {name: "Sign In", link: "nothing", class:"LinkSignIn", hasdrop: false}
];

const ABOUT = [
    {name: "FAQ", link: "nothing.com", class:"AboutLink"},
    {name: "Test1", link: "nothing.com", class:"AboutLink"},
    {name: "Test2", link: "nothing.com", class:"AboutLink"},
    {name: "Test3", link: "nothing.com", class:"AboutLink"},
]

export default function Header() {
    return <InternalHeader links={LINKS} about={ABOUT} />;
};
