//Les petits carrés de home page

function HomeCard({title,url}){
    return(
        <div className="text-3xl font-bold p-20 border-2 border-white w-fit h-full">
            <a 
                href={url} 
                className="
                text-white
                visited: text-white
                hover:text-yellow-400
            "
            >
                {title}
            </a>
        </div>
    );
}

export default HomeCard;
