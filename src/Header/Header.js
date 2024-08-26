import './Header.css'
import SearchMagGrey from './pics/SearchMagGrey.png';
import SearchMagYellow from './pics/SearchMagYellow.png';
import DropArrow from './pics/DropArrow.png'
import DropArrowHover from './pics/DropArrowHover.png'

function Link({ which }){
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
        if(BarWrap.style.width === '0px'){
            BarWrap.style.width = '250px';
        }else{
            BarWrap.style.width = '0px';
        }
    }
}

function SearchMag(){

    return(
        <>
            <div className="SearchMagWrap">
                <SearchBar />
                <div className="SearchMag">
                    <img src={SearchMagGrey} />
                </div>
                <div className="SearchMagHover" onClick={ShowBar}>
                    <img src={SearchMagYellow} /> 
                </div>
            </div>
        </>
    );
}

function DropItem({which}){
    return(
        <li className={which.class}><a  href={which.link}>{which.name}</a></li> 
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
        <div className="DropMenu">
            <ul>
                {links}
            </ul>
        </div>
    ); 
}

function DropDown({about}){
    return(
        <div className="DropWrap">
            <div className="Drop">
                <img src={DropArrow} />
            </div>
            <div className="DropHover">
                <img src={DropArrowHover} />
            </div>
            <DropMenu about={about} />
        </div>
    );
}

function InternalHeader({ links, about }){
    const parts = [];
    links.forEach((link) => {
        parts.push(
            <Link 
                which={link}
                key={link.name} />
        );
    });
    return(
        <div className="Header"> 
            {parts}
            <DropDown about={about} />
            <SearchMag />
        </div>
    );
};

const LINKS = [
    {name: "Blog", link: "nothing", class:"Blog"},
    {name: "Portfolio", link: "nothing", class:"Link"},
    {name: "Podcast", link: "nothing", class:"Link"},
    {name: "About", link: "nothing", class:"Link"},
    {name: "Sign In", link: "nothing", class:"LinkSignIn"}
    /*{name: "FAKERUN.COM", link: "nothing", class:"FakeRun"}*/
];
const ABOUT = [
    {name: "FAQ", link: "nothing.com", class:"AboutLink"},
    {name: "Test", link: "nothing.com", class:"AboutLink"},
]

export default function Header() {
    return <InternalHeader links={LINKS} about={ABOUT} />;
};
