import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center my-10 gap-20 mx-[16vw]">
      <h1
        className="text-7xl font-black cursor-pointer"
        onClick={() => navigate("/")}
      >
        Elif Deniz Göktürk
      </h1>
      <div className="text-3xl font-bold flex gap-10">
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
          Contact Info
        </button>
      </div>
    </div>
  );
}

export default Navigation;
