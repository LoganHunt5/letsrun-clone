import './Floor.css'
import Twitter from './Icons/twitter.png'; 
import GitHub from './Icons/github.png';
import YouTube from './Icons/youtube.png';
import LinkedIn from './Icons/linkedin.png';

function Link({link}){
    return(
        <div className="LinkWrap">
            <a href={link.link} target="_blank">
                <img src={link.image} alt="mediaImage"></img>
            </a>
        </div>
    );
}
function FloorContent({about}){
    const links = [];
    about.forEach((link) => {
        links.push(
            <Link
                link={link}
                key={link.name} />
        );
    });
    return(
        <div className="Floor">
            <div className="Info">
                Frontend made with React<br></br>
                Website by <a href="Nothing">Logan Hunt</a>
            </div>
            <div className="IconsWrap">
                {links}
            </div>
        </div>
    );
}

const ABOUT = [
    {name: "LinkedIn", link: "nothing.com", class:"AboutLink", image:LinkedIn},
    {name: "YouTube", link: "nothing.com", class:"AboutLink", image:YouTube},
    {name: "GitHub", link: "https://github.com/LoganHunt5", class:"AboutLink", image:GitHub},
    {name: "Twitter", link: "nothing.com", class:"AboutLink", image:Twitter},
]

export default function Floor(){
    return <FloorContent about={ABOUT} />;
};
