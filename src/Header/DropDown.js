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
            <a class="DropTag" href={which.link} target="_blank">
                        {which.name}
            </a>
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

    useEffect(()=>{
        DropRef.current.addEventListener("mousedown", OpenDrop);
    },[]);

    useEffect(()=>{
        if(IsMenuOpen){
            DropArrowHover.current.style.transform = 'rotate(180deg)';
            DropArrow.current.style.transform = 'rotate(180deg)';
            DropArrowHover.current.className = "DropArrowActive";
            DropRef.current.className = "LinkwrapActive";
            clicks = 0;
            DropRef.current.removeEventListener("mousedown", OpenDrop);
            document.addEventListener("mousedown", CheckIfClickedOutside)
        } else if(!IsMenuOpen){
            DropArrowHover.current.className = "DropArrowHoverImg";
            DropRef.current.className = "Linkwrap";
            DropArrowHover.current.style.transform = 'rotate(0deg)';
            DropArrow.current.style.transform = 'rotate(0deg)';
            document.removeEventListener("mousedown", CheckIfClickedOutside)
            DropRef.current.addEventListener("mousedown", OpenDrop);
        }

    },[IsMenuOpen]);

    let clicks = 0;
    function OpenDrop(){
        if(!IsMenuOpen){
            setIsMenuOpen(true);
            DropRef.current.removeEventListener("mousedown", OpenDrop);
            document.addEventListener("mousedown", CheckIfClickedOutside)
        }
    }

    function CycleDrop() {
        if(IsMenuOpen){
            setIsMenuOpen(false);
            document.removeEventListener("mousedown", CheckIfClickedOutside)
            DropRef.current.addEventListener("mousedown", OpenDrop);
        }
    }

    const CheckIfClickedOutside = e => {
        if (clicks != 0 && IsMenuOpen && DropListRef.current && !DropListRef.current.contains(e.target)){
            CycleDrop();
        }
        clicks = clicks + 1;
    }

    return(
        <>
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
                </div>
            </div>
            {IsMenuOpen && (
                <div className="DropMenu" id="DropMenu" ref={DropListRef}>
                    <DropMenu about={about} /> 
                </div>
            )}

        </>
    );
}

export default DropDown;
