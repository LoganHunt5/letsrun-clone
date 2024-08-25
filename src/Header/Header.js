import './Header.css'
function Link(){
    return(
        <a className="Link">Testing!</a>
    )
}

/*function Search(){

}
function DropDown(){

}*/

function Header(){
    return(
        <div className="Header"> 
            <Link />
            <Link />
            <Link />
        </div>
    );
}

    
export default Header;
