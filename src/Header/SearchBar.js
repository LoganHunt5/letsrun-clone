import SearchMagGrey from './pics/SearchMagGrey.png';
import SearchMagYellow from './pics/SearchMagYellow.png';

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

function SearchField(){
    return(
        <form className="SearchBarWrap" id="BarWrap">
            <input class="SearchBar" type="search" placeholder="Search..."/>
        </form>

    );
}

function SearchBar(){

    return(
        <>
            <div className="SearchMagWrap">
                <SearchField />
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


export default SearchBar;
