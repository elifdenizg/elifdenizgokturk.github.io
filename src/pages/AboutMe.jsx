import Me from "../assets/AboutMe/me2.jpeg";
import Istanbul from "../assets/AboutMe/istanbul.png";
import Mugla from "../assets/AboutMe/mugla.png";
import Strasbourg from "../assets/AboutMe/strasbourg.png";
import Table from "../assets/AboutMe/table.png";
import Me2 from "../assets/AboutMe/me3.png";
import Navigation from "../components/Navigation";

const AboutMe = () => {
  return (
    <div className="flex flex-col text-white">
      {Navigation()}
      <div className="flex h-screen justify-center gap-10 mx-[16vw] p-30">
        <img src={Me} className="h-[55vh] w-auto" />
        <div className="flex flex-col h-[55vh] w-1/3 justify-center">
          <h2 className="text-5xl font-bold my-5">À Propos</h2>
          <p className="text-lg">
            Avant d’intégrer le Master of Science à EPITECH Montpellier, j’ai
            obtenu une licence en mathématiques à l’Université de Strasbourg. Au
            fil de mes études, j’ai découvert un véritable intérêt pour
            l’informatique, en particulier pour la résolution de problèmes et
            l’algorithmique qui m'a motivée à me réorienter.
          </p>
        </div>
      </div>

      <p className="text-lg mb-30 mx-[16vw] text-center">
        Au cours de ma vie, j’ai eu la chance de vivre dans{" "}
        <b>huit villes différentes</b>, réparties dans <b>quatre pays</b> : la
        Turquie, la France, l’Allemagne et l’Angleterre. Ces expériences variées
        ont profondément façonné qui je suis aujourd’hui. Elles m’ont appris à 
        <b> m’adapter rapidement</b> à de nouveaux environnements et à développer
        une ouverture d’esprit qui a favorisé mon{" "}
        <b>apprentissage des langues</b>. <br />
        Parmi toutes ces villes, voici les trois où j’ai vécu le plus longtemps:
      </p>
      <div className="flex justify-center">
        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Muğla</b>
          <img src={Mugla} className="w-full" />
        </div>

        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Istanbul</b>
          <img src={Istanbul} className="w-full" />
        </div>

        <div className="flex flex-col items-center w-1/3">
          <b className="text-lg mt-2">Strasbourg</b>
          <img src={Strasbourg} className="w-full" />
        </div>
      </div>
      <div className="relative flex flex-col items-center m-5">
        <img src={Me2} className="h-[55vh] z-10 relative -mb-[8vh]" />
        <img src={Table} className="h-[55vh] z-20" alt="Table" />
        <p className="text-lg text-center -mt-[35vh] max-w-xs z-30">
          En dehors de ma vie étudiante, j’aime consacrer mon temps libre à des
          activités créatives : la photographie argentique, la
          cuisine, le dessin, et bien sûr, les voyages.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
