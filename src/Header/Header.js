import './Header.css'
import SearchMagGrey from './pics/SearchMagGrey.png';
import SearchMagYellow from './pics/SearchMagYellow.png';
import DropArrow from './pics/DropArrow.png'
import { useState, useRef, useEffect } from "react";

function Link({ which, about }){
    if(which.hasdrop){
        
        return(
            <div className="Linkwrap">
                <a 
                    className={which.class} 
                >
                    {which.name}</a>
                <DropDown 
                    about={about}/>
            </div>
        );
    }
    return(
        <a className={which.class} href={which.link}>{which.name}</a>
    );
}


function SearchBar(){
    return(
        <form className="SearchBarWrap" id="BarWrap">
            <input class="SearchBar" type="search" placeholder="Search..."/>
        </form>

    );
}

function ShowBar(){
    const BarWrap = document.getElementById('BarWrap');
    if (BarWrap){
        if(BarWrap.style.width === '250px'){
            BarWrap.style.width = '0px';
        }else{
            BarWrap.style.width = '250px';
        }
    }
}

function SearchMag(){

    return(
        <>
            <div className="SearchMagWrap">
                <SearchBar />
                <div className="SearchMag" onClick={ShowBar}>
                    <img src={SearchMagGrey} alt="MagGrey" />
                </div>
                <div className="SearchMagHover" onClick={ShowBar}>
                    <img src={SearchMagYellow} alt="MagYellow"/> 
                </div>
            </div>
        </>
    );
}

function DropItem({which}){
    return(
        <li className={which.class}>
            <div className = "BorderBar">
                <a  href={which.link}>{which.name}</a>
            </div>
        </li> 
    )
}

function HideDrop(){
    const Arrow = document.getElementById('DropArrow');
    if(Arrow){
        if(Arrow.style.width === '15px'){
            Arrow.style.width = '14px';
            Arrow.style.transform = 'rotate(0deg)';
        } else {
            Arrow.style.width = '15px';
            Arrow.style.transform = 'rotate(180deg)';
        }
    }
}


function DropMenu({about}){
    const links = [];
    about.forEach((link)=> {
        links.push(
            <DropItem
                which={link}
                key={link.name} />
        );
    });
    return (
        <ul>
            {links}
        </ul>
    ); 
}
/*Hide drop in Drop*/
function DropDown({about}){
    const [IsMenuOpen, setIsMenuOpen] = useState(false)
    const DropRef = useRef();
    const DropListRef = useRef();
    useEffect(() => {
        DropRef.current.addEventListener("click", () => setIsMenuOpen(true));
        DropRef.current.addEventListener("click", HideDrop);
    });

    useEffect(() => {
        const CheckIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (IsMenuOpen && DropListRef.current && !DropListRef.current.contains(e.target)){
                setIsMenuOpen(false);
                HideDrop();
            }
        }
        document.addEventListener("mousedown", CheckIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", CheckIfClickedOutside)
        }
    });
    return(
        <div className="DropWrap" ref={DropRef}>
            <div className="Drop" >
                <img src={DropArrow} id="DropArrow" />
            </div>
            {IsMenuOpen && (
                <div className="DropMenu" id="DropMenu" ref={DropListRef}>
                    <DropMenu about={about} /> 
                </div>
            )}
        </div>
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
            <SearchMag />
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
