import DropArrowImg from './pics/DropArrow.png';
import { useState, useRef, useEffect} from "react";
import DropArrowHoverImg from './pics/DropArrowHover.png';
import Twitter from '../Floor/Icons/twitter.png'; 
import GitHub from '../Floor/Icons/github.png';
import YouTube from '../Floor/Icons/youtube.png';
import LinkedIn from '../Floor/Icons/linkedin.png';

function DropItem({which}){
    const image = which.image; 
    return(
        <div className="DropItemWBorder">
            <div className="DropItemWrap">
                <div className="DropImage">
                    <img src={image} alt="dropimage"></img>
                </div>
                <li className={which.class}>
                    <a  href={which.link}>{which.name}</a>
                </li> 
            </div>
            <div className="BorderBar">
            </div>
        </div>
    )
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
        <ul className="Dropul">
            {links}
        </ul>
    ); 
}


function DropDown({which, about}){
    const [IsMenuOpen, setIsMenuOpen] = useState(false);
    const DropRef = useRef();
    const DropListRef = useRef();
    const DropArrow = useRef();
    const DropArrowHover = useRef();



    function CycleDrop() {
        setIsMenuOpen(!IsMenuOpen)
        if(IsMenuOpen){
            DropArrowHover.current.className = "DropArrowHoverImg";
            DropRef.current.className = "Linkwrap";
        } else {
            DropArrowHover.current.className = "DropArrowActive";
            DropRef.current.className = "LinkwrapActive";
        }
    }

    useEffect(() => {
        const CheckIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (IsMenuOpen && DropListRef.current && !DropListRef.current.contains(e.target)&& !DropRef.current.contains(e.target)){
                CycleDrop();
            }
        }
        document.addEventListener("mousedown", CheckIfClickedOutside)
        DropRef.current.addEventListener("mousedown", CycleDrop);
        return () => {
            // Cleanup the event listener
            DropRef.current.removeEventListener("mousedown", CycleDrop);
            document.removeEventListener("mousedown", CheckIfClickedOutside)
        }
    });

    useEffect(() => {
        if(IsMenuOpen && DropArrow.current){
            DropArrowHover.current.style.transform = 'rotate(180deg)';
            DropArrow.current.style.transform = 'rotate(180deg)';
        } else {
            DropArrowHover.current.style.transform = 'rotate(0deg)';
            DropArrow.current.style.transform = 'rotate(0deg)';
        }
    }, [IsMenuOpen]);

    return(
        <div className="Linkwrap" ref={DropRef}>
            <a 
                className={which.class} 
            >
                {which.name}</a>
            <div className="DropWrap" >
                <div className="Drop" >
                    <img src={DropArrowImg} class="DropArrowImg" ref={DropArrow}></img>
                    <img src={DropArrowHoverImg} class="DropArrowHoverImg" ref={DropArrowHover}></img>
                </div>
                {IsMenuOpen && (
                    <div className="DropMenu" id="DropMenu" ref={DropListRef}>
                        <DropMenu about={about} /> 
                    </div>
                )}
            </div>
        </div>
    );
}

export default DropDown;
