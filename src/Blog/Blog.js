import './Blog.css';
import GuyCoding1 from './pics/guycoding1.png';
import LinkedInGuy from './pics/linkedinguy.png';
import StrangeLove from './pics/drstrangelove.png';
import BlogSideX from './BlogSide/pics/x-close-icon-not-hover.png';
import BlogSideXHover from './BlogSide/pics/x-close-icon.png';
import { useState, useRef, useEffect, forwardRef } from 'react';

function BlogSide({onClick}) {

    return(
        <div className="BlogSide">
            <div className="BlogSideX">
                <img src ={BlogSideX} alt="BlogSizeX"></img>
            </div>
            <div className="BlogSideXHover">
                <img src={BlogSideXHover} alt="BlogSizeXHover" onClick={onClick}></img>
            </div>
            <h2>Welcome to my blog!</h2>
        </div>
    );
}




function ArticlePreview({which}){
    return(
        <a className="ArticlePreviewWrapper"href={which.link}>
                <img src={which.img}></img>
                <h1>{which.title}</h1>
                <p>{which.desc}</p>
        </a>
    ); 
}

function BlogContent({blogs}){

    const [IsSideOpen, setIsSideOpen] = useState(true);
    const CloseSide = () => {
        setIsSideOpen(false);
        BlogRef.current.className = "BlogFull";

    }

    const BlogArr = [];
    blogs.forEach((blog)=>{
        BlogArr.push(
             <ArticlePreview
                which={blog}
                key={blog.name} />
        );
    });

    const BlogRef = useRef();

    return(
        <div className="Blog" ref={BlogRef}>
        {IsSideOpen && (
            <BlogSide onClick = {CloseSide}/>
        )}
            <div className="BlogGrid">
                {BlogArr}
            </div>
        </div>

    );
}

const TESTS = [
    {
        name:"blog1", 
        img:GuyCoding1, 
        link:"fullarticle",
        title:"How I learned to code in 5 mins!",
        desc:"I have an IQ of 500 and have loved coding since 2 years old.It was over for everyone else from the start. Please buy my course about me making 1 billion dollars TC for only $1500 with code SCAM for 20% off!",
    },
    {
        name:"blog2",
        img:StrangeLove,
        link:"fullarticle",
        title:"How I learned to stop worrying and love the bomb",
        desc:"Major T. J. 'King' Kong: Survival kit contents check. In them you'll find: one forty-five caliber automatic; two boxes of ammunition; four days' concentrated emergency rations; one drug issue containing antibiotics, morphine, vitamin pills, pep pills, sleeping pills, tranquilizer pills; one miniature combination Russian phrase book and Bible" 
    },
    {
        name:"blog3",
        img:LinkedInGuy,
        link:"fullarticle",
        title:"My Whole Family Left Me, Here's What I Learned About Scalability",
        desc:"In 'My Whole Family Left Me, Here’s What I Learned About Scalability', I explore a personal journey that parallels a critical business concept: scalability. When my family left me in a terrible divorce, I faced the challenge of handling daily life alone, much like how businesses must adapt to growth." 
    },
];

export default function Blog(){
    return(<BlogContent blogs={TESTS}/>);
};
