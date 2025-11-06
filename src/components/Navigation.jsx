//Les petits carrés de home page

import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center justify-between my-10 gap-20">
      <h1
        className="text-7xl font-black mb-6 my-10 ml-20 cursor-pointer"
        onClick={() => navigate("/")}
      >
        Elif Deniz Göktürk
      </h1>
      <div className="text-3xl font-bold flex justify-end gap-20 mr-20">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => navigate("/AboutMe")}
        >
          À Propos
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => navigate("/Projects")}
        >
          Projets
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => navigate("/Contact")}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navigation;
