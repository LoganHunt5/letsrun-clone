import DropArrowImg from './pics/DropArrow.png';
import { useState, useRef, useEffect} from "react";
import DropArrowHoverImg from './pics/DropArrowHover.png';

function DropItem({which}){
    return(
        <li className={which.class}>
            <a  href={which.link}>{which.name}</a>
            <div className = "BorderBar">
            </div>
        </li> 
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
        <ul>
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
    }

    useEffect(() => {
        const CheckIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (IsMenuOpen && DropListRef.current && !DropListRef.current.contains(e.target)&& !DropRef.current.contains(e.target)){
                setIsMenuOpen(false);
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
