//Les petits carrés de home page

function HomeCard({title,url}){
    return(
        <div className="relative group text-5xl font-bold border-2 border-white text-center flex justify-center items-center px-[5vw] py-[25vh]
        transition-all duration-300 hover:bg-neutral-200 text-black cursor-pointer">
            <a href={url} class="relative inset-0 flex items-center justify-center text-white group-hover:text-black">{title}</a>
        </div>
    );
}

export default HomeCard;