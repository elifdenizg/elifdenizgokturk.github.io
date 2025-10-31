//Les petits carrés de home page

function HomeCard({title,url}){
    return(
        <div className="group relative text-3xl font-bold border-2 border-white justify-center text-center content-center px-[5vw] py-[25vh]">
            <div class="hover_card"></div>
            <a 
                href={url} 
                className="
                text-white
                visited: text-white
                hover: text-black
            ">
                {title}
            </a>
        </div>
    );
}

export default HomeCard;