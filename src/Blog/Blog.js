import './Blog.css'
import GuyCoding1 from './pics/guycoding1.png'
import LinkedInGuy from './pics/linkedinguy.png'
import StrangeLove from './pics/drstrangelove.png'

function ArticlePreview({which}){
    return(
        <a className="ArticlePreviewWrapper"href={which.link}>
                <img src={which.img}></img>
                <h1>{which.title}</h1>
                <p>{which.desc}</p>
        </a>
    ); 
}

function BlogSide(){
    return(
            <div className="BlogSide">
                <h2>Welcome to my blog!</h2>
            </div>
    );
}

function BlogContent({blogs}){
    const BlogArr = [];
    blogs.forEach((blog)=>{
        BlogArr.push(
            <ArticlePreview
                which={blog}
                key={blog.name} />
        );
    });

    return(
        <div className="Blog">
            <BlogSide />
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
        desc:"Major T. J. 'King' Kong: Survival kit contents check. In them you'll find: one forty-five caliber automatic; two boxes of ammunition; four days' concentrated emergency rations; one drug issue containing antibiotics, morphine, vitamin pills, pep pills, sleeping pills, tranquilizer pills; one miniature combination Russian phrase book and Bible; one hundred dollars in rubles; one hundred dollars in gold; nine packs of chewing gum; one issue of prophylactics; three lipsticks; three pair of nylon stockings. Shoot, a fella' could have a pretty good weekend in Vegas with all that stuff."
    },
    {
        name:"blog3",
        img:LinkedInGuy,
        link:"fullarticle",
        title:"My Whole Family Left Me, Here's What I Learned About Scalability",
        desc:"In 'My Whole Family Left Me, Here’s What I Learned About Scalability', I explore a personal journey that parallels a critical business concept: scalability. When my family left me in a terrible divorce, I faced the challenge of handling daily life alone, much like how businesses must adapt to growth. This experience taught me valuable lessons about managing increased responsibilities, maintaining balance, and implementing efficient systems. Join me as I share insights on how this unexpected life change provided a unique perspective on scalability, emphasizing adaptability, resource management, and the importance of support systems in both personal and professional realms."
    },
];

export default function Blog(){
    return(<BlogContent blogs={TESTS}/>);
};
