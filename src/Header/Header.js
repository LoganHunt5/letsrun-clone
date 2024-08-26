import './Header.css'
import SearchMagGrey from './pics/SearchMagGrey.png';
import SearchMagYellow from './pics/SearchMagYellow.png';

function Link({ which }){
    const name=which.name !== "World Famous Message Board" ? which.name :
        <div style={{ color: `rgb(251, 196, 57)`}}>
            {which.name}
        </div>;
    return(
        <a className={which.class} href={which.link}>{name}</a>
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
        if(BarWrap.style.width !== '200px'){
            BarWrap.style.width = '200px';
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

/*function DropDown(){

}*/

function InternalHeader({ links }){
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
            <SearchMag />
        </div>
    );
};

const LINKS = [
    {name: "World Famous Message Board", link: "nothing.com", class:"Link"},
    {name: "Better Running Shoes", link: "nothing.com", class:"Link"},
    {name: "Podcast", link: "nothing.com", class:"Link"},
    {name: "About", link: "nothing.com", class:"Link"},
    {name: "Shop", link: "nothing.com", class:"Link"},
    {name: "Subscribe", link: "nothing.com", class:"Link"},
    {name: "Sign In", link: "nothing.com", class:"LinkSignIn"},
    {name: "FAKERUN.COM", link: "nothing.com", class:"FakeRun"}
];

export default function Header() {
    return <InternalHeader links={LINKS} />;
};
