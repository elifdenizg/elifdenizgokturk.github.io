//Les petits carrés de home page

import { useNavigate } from "react-router-dom";

function HomeCard({title,url}){
    const navigate = useNavigate();
    return(
        <button type="button" onClick={() => navigate(url)} className="relative group text-5xl font-bold border-2 border-white text-white text-center flex justify-center items-center px-[5vw] py-[25vh]
        transition-all duration-300 hover:bg-white hover:text-black cursor-pointer">{title}</button>
    );
}

export default HomeCard;