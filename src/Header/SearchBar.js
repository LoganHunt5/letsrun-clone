import SearchMagGrey from './pics/SearchMagGrey.png';
import SearchMagYellow from './pics/SearchMagYellow.png';
import { useState, useRef, useEffect} from "react";



function SearchBar(){
    const [IsSearchOpen, setIsSearchOpen] = useState(false);
    const [MagClassName, setMagClassName] = useState("SearchMagHover");
    const SearchMag = useRef();
    const SearchBar = useRef();
    const BarWrap = useRef();

    function ShowBar()
    {
        if (BarWrap){
            if(BarWrap.current.style.width === '250px'){
                BarWrap.current.style.width = '0px';
                setMagClassName("SearchMagHover");
            }else{
                BarWrap.current.style.width = '250px';
                setMagClassName("SearchMagActive");
                setTimeout(() => {
                    SearchBar.current.focus();
                },300);
            }
            setIsSearchOpen(!IsSearchOpen);
        }
    }
    useEffect(() => {
        const CheckIfClickedOutside = e => {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (IsSearchOpen && SearchBar.current && !SearchBar.current.contains(e.target)&& !SearchMag.current.contains(e.target)){
                ShowBar();
            }
        }
        document.addEventListener("mousedown", CheckIfClickedOutside)
        SearchMag.current.addEventListener("mousedown", ShowBar);
        return () => {
            // Cleanup the event listener
            SearchMag.current.removeEventListener("mousedown", ShowBar);
            document.removeEventListener("mousedown", CheckIfClickedOutside)
        }
    });


    return(
        <>
            <div className="SearchMagWrap">
                <form className="SearchBarWrap" ref={BarWrap}>
                    <input class="SearchBar" id="SearchBar" type="search" ref={SearchBar} placeholder="Search..."/>
                </form>

                <div className="SearchMag">
                    <img src={SearchMagGrey} alt="MagGrey" />
                </div>
                <div className={MagClassName} ref={SearchMag}>
                    <img src={SearchMagYellow} alt="MagYellow"/> 
                </div>
            </div>
        </>
    );
}


export default SearchBar;
