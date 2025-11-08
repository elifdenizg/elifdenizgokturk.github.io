import HomeCard from "../components/HomeCard";
import Me from "../assets/me.png";

const Home = () => {
  return (
    <div className="flex min-h-screen text-white  my-10 max-w-screen ">
      <div className="flex flex-col gap-10 max-w mx-[16vw]">
        <div>
          <h1 className="text-7xl font-black mb-6">Elif Deniz Göktürk</h1>
          <p className="text-lg z-20">
            Bienvenue sur mon portfolio ! <br />
            Je suis une développeuse junior,
            actuellement étudiante en Master of Science à EPITECH Montpellier <b>à la recherche d'une alternance</b>.
            Trilingue en anglais, français et turc, je combine créativité et
            rigueur technique pour donner vie à des projets innovants.
          </p>
          <a
            href="https://drive.proton.me/urls/0YAXYSA82M#CsVYFWWkfDlN"
            className="flex text-lg pt-1"
          >
            Découvrez mon CV pour en savoir plus sur mon parcours et mes
            compétences en cliquant ici!
          </a>
        </div>
        <div className="relative flex gap-4 mt-4 z-0">
          <HomeCard title="À PROPOS" url="/AboutMe" />
          <HomeCard title="PROJETS" url="/Projects" />
          <HomeCard title="CONTACT INFO" url="/Contact" />
        </div>
      </div>

      <img
        src={Me}
        alt="Elif Deniz Göktürk"
        className="absolute bottom-0 left-0 pt-5 h-[80vh] z-10"
      />
    </div>
  );
};

export default Home;
