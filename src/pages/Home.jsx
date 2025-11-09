import HomeCard from "../components/HomeCard";
import Me from "../assets/me.png";

const Home = () => {
  return (
    <div className="flex max-h-screen text-white max-w-screen my-10">
      <div className="flex flex-col gap-10 mx-[16vw]">
        <div className="flex flex-col gap-3">
          <h1 className="text-7xl font-black">Elif Deniz Göktürk</h1>
          <div className="flex text-lg gap-10">
            <a
              href="https://drive.proton.me/urls/0YAXYSA82M#CsVYFWWkfDlN"
              className="underline"
            >
              CV
            </a>
            •
            <a
              href="https://drive.proton.me/urls/0YAXYSA82M#CsVYFWWkfDlN"
              className="underline"
            >
              Github
            </a>
            •
            <a
              href="https://drive.proton.me/urls/0YAXYSA82M#CsVYFWWkfDlN"
              className="underline"
            >
              Linkedin
            </a>
          </div>
          <p className="text-lg z-20">
            Je suis une développeuse junior, actuellement étudiante en{" "}
            <b>Master of Science à EPITECH</b> Montpellier. Je suis{" "}
            <b>trilingue</b> en anglais, français et turc et je suis à la{" "}
            <b>recherche d'une alternance</b>.
          </p>
        </div>
        <div className="relative flex gap-4 z-0">
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
